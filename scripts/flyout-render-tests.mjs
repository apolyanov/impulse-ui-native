import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import ts from "typescript";

import { createRenderer } from "./helpers/react-renderer.mjs";

// Real React reconciliation; native hosts, gestures, and Reanimated are stubbed.
// Counts are render regressions, not on-device timing/FPS measurements.
const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lightTheme = JSON.parse(
  readFileSync(resolve(repo, "docs/design-system/tokens.light.json"), "utf8"),
);

function createHarness(mounted = true) {
  const counts = {};
  const cache = new Map();
  const Theme = React.createContext(lightTheme);
  let dimensions = { height: 800, width: 400 };
  const Dimensions = React.createContext(dimensions);
  let lastProps = {};
  let lastTheme = lightTheme;
  const insets = { top: 44, bottom: 34, left: 0, right: 0 };
  const keyboard = { height: { value: 0 }, progress: { value: 0 } };
  const measuredHeight = { value: 450 };
  const closingHeight = { value: 0 };
  const translateY = { value: 0 };
  const opacity = { value: 0.4 };
  const noop = () => {};
  const empty = {};
  const track = (name, render) => (props, ref) => {
    counts[name] = (counts[name] ?? 0) + 1;
    return render(props, ref);
  };
  const trackedNames = new Set([
    "root",
    "surface",
    "flyout",
    "header",
    "handle",
    "title",
    "keyboard-aware-view",
  ]);
  const mocks = {
    "react/jsx-runtime": jsxRuntime,
    "react-native": {
      StyleSheet: {
        create: (styles) => styles,
        absoluteFill: {},
        flatten: (styles) => Object.assign({}, ...styles.filter(Boolean)),
      },
      useWindowDimensions: () => React.useContext(Dimensions),
      Pressable: "Pressable",
    },
    "react-native-safe-area-context": { useSafeAreaInsets: () => insets },
    "react-native-gesture-handler": {
      GestureDetector: ({ children }) => children,
    },
    "react-native-keyboard-controller": {
      useReanimatedKeyboardAnimation: () => keyboard,
    },
    "react-native-reanimated": {
      __esModule: true,
      default: {
        View: "View",
        createAnimatedComponent: (type) =>
          React.forwardRef((props, ref) =>
            React.createElement(type, { ...props, ref }),
          ),
      },
      useSharedValue: (initial) => {
        const ref = React.useRef(null);
        ref.current ??= {
          value: initial,
          set(value) {
            this.value = value;
          },
        };
        return ref.current;
      },
      useAnimatedReaction: () => {},
      useAnimatedStyle: () => React.useMemo(() => ({}), []),
    },
    "@impulse-ui-native/primitives": {
      View: "View",
      Typography: { Title4: "Text" },
    },
    "@impulse-ui-native/theme": {
      useTheme: () => React.useContext(Theme),
      useComponentsTokens: () => React.useContext(Theme).components,
      useThemedStyles: (factory, props, deps) => {
        const theme = React.useContext(Theme);
        return React.useMemo(() => factory(theme, props), [theme, ...deps]);
      },
      getFlyoutTokens: (tokens, { placement }) => ({
        ...tokens,
        ...tokens.placements[placement],
      }),
      getShadowStyle: () => empty,
      useStyleProps: () => empty,
    },
    "@impulse-ui-native/core": {
      useEventCallback: (callback) => {
        const ref = React.useRef(callback);
        ref.current = callback;
        return React.useCallback((...args) => ref.current(...args), []);
      },
    },
  };
  function load(relative) {
    const path = resolve(repo, relative);
    if (cache.has(path)) return cache.get(path);
    const exports = {};
    const source = readFileSync(path, "utf8");
    cache.set(path, exports);
    const compiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.ReactJSX,
      },
    }).outputText;
    const name = basename(path).replace(/\.tsx?$/, "");
    const react = trackedNames.has(name)
      ? {
          ...React,
          memo: (render) =>
            React.memo(
              typeof render === "function" ? track(name, render) : render,
            ),
          forwardRef: (render) => React.forwardRef(track(name, render)),
        }
      : React;
    const require = (specifier) => {
      if (specifier === "react") return react;
      if (specifier in mocks) return mocks[specifier];
      if (specifier === "../hooks")
        return {
          useFlyoutKeyboardBodyStyle: load(
            "packages/flyout/src/hooks/use-flyout-keyboard-body-style.hook.ts",
          ).useFlyoutKeyboardBodyStyle,
          useFlyoutKeyboardBody: load(
            "packages/flyout/src/hooks/use-flyout-keyboard-body.hook.ts",
          ).useFlyoutKeyboardBody,
          useFlyoutContext: load(
            "packages/flyout/src/hooks/use-flyout-context.hook.ts",
          ).useFlyoutContext,
          useFlyoutDragContext: load(
            "packages/flyout/src/hooks/use-flyout-drag-context.hook.ts",
          ).useFlyoutDragContext,
          useFlyoutLifecycle: ({ open }) => {
            const dragGesture = React.useMemo(
              () => ({ enabled: open }),
              [open],
            );
            return React.useMemo(
              () => ({
                close: noop,
                dragGesture,
                hasMeasured: true,
                measuredHeight,
                closingHeight,
                interactive: open,
                mounted,
                onLayout: noop,
                opacity,
                translateY,
              }),
              [dragGesture, open],
            );
          },
        };
      if (specifier.startsWith(".")) {
        const resolved = resolve(dirname(path), specifier);
        for (const extension of [".tsx", ".ts"]) {
          try {
            return load(resolved + extension);
          } catch (error) {
            if (error.code !== "ENOENT") throw error;
          }
        }
      }
      throw new Error(`Unexpected import: ${specifier}`);
    };
    runInNewContext(compiled, { exports, require });
    return exports;
  }
  const Flyout = load(
    "packages/flyout/src/components/flyout.tsx",
  ).FlyoutComponent;
  const Body = load(
    "packages/flyout/src/components/keyboard-aware-view.tsx",
  ).FlyoutKeyboardAwareView;
  const body = React.createElement(Body, null, React.createElement("Form"));
  const render = createRenderer();
  return {
    counts,
    render(props = {}, theme = lightTheme) {
      lastProps = props;
      lastTheme = theme;
      render(
        React.createElement(
          Dimensions.Provider,
          { value: dimensions },
          React.createElement(
            Theme.Provider,
            { value: theme },
            React.createElement(
              Flyout,
              { id: "sheet", title: "Form", open: true, ...props },
              body,
            ),
          ),
        ),
      );
    },
    resize(next) {
      dimensions = next;
      this.render(lastProps, lastTheme);
    },
    unmount() {
      render(null);
    },
  };
}

test("open/close gesture changes do not rerender the keyboard body or generated header", () => {
  const harness = createHarness();
  harness.render();
  const before = { ...harness.counts };
  assert.equal(before["keyboard-aware-view"], 1);
  assert.equal(before.header, 1);
  harness.render({ open: false });
  harness.render({ open: true });
  assert.equal(
    harness.counts["keyboard-aware-view"],
    before["keyboard-aware-view"],
  );
  assert.equal(harness.counts.header, before.header);
  assert.equal(harness.counts.title, before.title);
  assert.equal(harness.counts.handle, before.handle + 2);
  assert.equal(harness.counts.root, before.root + 2);
  harness.unmount();
});

test("geometry updates reach the keyboard body without rerendering Handle", () => {
  const harness = createHarness();
  harness.render();
  const before = { ...harness.counts };
  harness.render({ bottomOffset: 24 });
  assert.equal(
    harness.counts["keyboard-aware-view"],
    before["keyboard-aware-view"] + 1,
  );
  assert.equal(harness.counts.handle, before.handle);
  harness.unmount();
});

test("new lifecycle callbacks do not rerender unchanged presentation parts", () => {
  const harness = createHarness();
  harness.render();
  const before = { ...harness.counts };
  for (let index = 0; index < 5; index++) harness.render({ onClose: () => {} });
  for (const part of [
    "keyboard-aware-view",
    "header",
    "title",
    "handle",
    "surface",
  ])
    assert.equal(harness.counts[part], before[part], part);
  harness.unmount();
});

test("title changes and theme updates still render affected parts", () => {
  const harness = createHarness();
  harness.render();
  const before = { ...harness.counts };
  harness.render({ title: "Updated form" });
  assert.equal(harness.counts.header, before.header + 1);
  assert.equal(harness.counts.title, before.title + 1);
  assert.equal(
    harness.counts["keyboard-aware-view"],
    before["keyboard-aware-view"],
  );
  const theme = {
    ...lightTheme,
    components: {
      ...lightTheme.components,
      flyout: { ...lightTheme.components.flyout, keyboardOffset: 12 },
    },
  };
  harness.render({ title: "Updated form" }, theme);
  assert.equal(
    harness.counts["keyboard-aware-view"],
    before["keyboard-aware-view"] + 1,
  );
  assert.equal(harness.counts.header, before.header + 2);
  harness.unmount();
});

test("closed roots do not subscribe to viewport changes", () => {
  const harness = createHarness(false);
  harness.render({ open: false });
  assert.equal(harness.counts.root, 1);
  assert.equal(harness.counts.surface, undefined);
  harness.resize({ height: 400, width: 800 });
  assert.equal(harness.counts.root, 1);
  assert.equal(harness.counts.surface, undefined);
  harness.unmount();
});

test("viewport changes update only mounted layout, not the lifecycle owner or Handle", () => {
  const harness = createHarness();
  harness.render();
  const before = { ...harness.counts };
  harness.resize({ height: 400, width: 800 });
  assert.equal(harness.counts.root, before.root);
  assert.equal(harness.counts.surface, before.surface + 1);
  assert.equal(
    harness.counts["keyboard-aware-view"],
    before["keyboard-aware-view"] + 1,
  );
  assert.equal(harness.counts.handle, before.handle);
  harness.unmount();
});

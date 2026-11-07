import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const source = readFileSync(
  new URL(
    "../packages/flyout/src/utils/get-flyout-keyboard-body-inset.utils.ts",
    import.meta.url,
  ),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
});
const { getFlyoutKeyboardBodyInset } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);
const paddingSource = readFileSync(
  new URL(
    "../packages/flyout/src/utils/get-flyout-keyboard-body-padding.utils.ts",
    import.meta.url,
  ),
  "utf8",
);
const paddingExports = {};
const paddingCompiled = ts.transpileModule(paddingSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
runInNewContext(paddingCompiled, {
  exports: paddingExports,
  require: (name) => {
    assert.equal(name, "./get-flyout-keyboard-body-inset.utils");
    return { getFlyoutKeyboardBodyInset };
  },
});
const { getFlyoutKeyboardBodyPadding } = paddingExports;
const defaults = {
  placement: "bottom",
  offset: 0,
  screenHeight: 800,
  sheetHeight: 450,
  frame: { y: 66, height: 350 },
  keyboardHeight: 320,
  gap: 8,
};
const inset = (overrides = {}) =>
  getFlyoutKeyboardBodyInset({ ...defaults, ...overrides });

test("body reserves only its overlap, accounting for bottom safe area and themed gap", () => {
  assert.equal(inset(), 294);
  assert.equal(inset({ gap: 0 }), 286);
  assert.equal(inset({ keyboardHeight: 0 }), 0);
});

test("sheet offset and siblings below the body reduce the overlap", () => {
  assert.equal(inset({ offset: 40 }), 254);
  assert.equal(inset({ frame: { y: 66, height: 300 } }), 244);
});

test("top body already above keyboard gets no avoidance", () => {
  assert.equal(inset({ placement: "top", offset: 24 }), 0);
  assert.equal(
    inset({ placement: "top", offset: 24, frame: { y: 100, height: 400 } }),
    52,
  );
});

test("overlap can exceed a short body and updates after rotation", () => {
  assert.equal(inset({ keyboardHeight: 900 }), 874);
  assert.equal(inset({ keyboardHeight: -100 }), 0);
  assert.equal(
    inset({
      screenHeight: 400,
      sheetHeight: 250,
      frame: { y: 40, height: 180 },
      keyboardHeight: 200,
    }),
    178,
  );
});

// Exercise the actual animated style and layout callback with mocked hooks.
// Native keyboard timing, rendering, and scroll recognition are not simulated.
function createBodyHarness(themeKeyboardOffset = 8, contextOverrides = {}) {
  const height = {
    value: 0,
    get() {
      return this.value;
    },
  };
  const progress = { value: 0 };
  const measuredHeight = { value: 450 };
  const context = {
    placement: "bottom",
    offset: 0,
    screenHeight: 800,
    measuredHeight,
    closingHeight: { value: 0 },
    maxHeight: 560,
    ...contextOverrides,
  };
  let frame;
  const shared = [];
  let sharedIndex = 0;
  let reaction;
  let lastFrameRef;
  let frameWrites = 0;
  let animate;
  const exports = {};
  const bodySource = readFileSync(
    new URL(
      "../packages/flyout/src/components/keyboard-aware-view.tsx",
      import.meta.url,
    ),
    "utf8",
  );
  const compiled = ts.transpileModule(bodySource, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText;
  const mocks = {
    react: {
      memo: (component) => component,
      forwardRef: (render) => render,
      useMemo: (factory) => factory(),
      useRef: (initial) => (lastFrameRef ??= { current: initial }),
    },
    "react/jsx-runtime": { jsx: (type, props) => ({ type, props }) },
    "react-native": {
      StyleSheet: {
        flatten: (styles) => Object.assign({}, ...styles.filter(Boolean)),
      },
    },
    "react-native-keyboard-controller": {
      useReanimatedKeyboardAnimation: () => ({ height, progress }),
    },
    "react-native-reanimated": {
      __esModule: true,
      default: { View: "AnimatedView" },
      useAnimatedStyle: (callback) => {
        animate = callback;
        return "animated-style";
      },
      useAnimatedReaction: (prepare, react) => {
        reaction = () => react(prepare());
      },
      useSharedValue: (initial) => {
        const index = sharedIndex++;
        shared[index] ??= {
          value: initial,
          get() {
            return this.value;
          },
          set(value) {
            if (index === 0) frameWrites++;
            this.value = value;
          },
        };
        frame = shared[0];
        return shared[index];
      },
    },
    "@impulse-ui-native/core": { useEventCallback: (callback) => callback },
    "@impulse-ui-native/theme": {
      useTheme: () => ({
        components: { flyout: { keyboardOffset: themeKeyboardOffset } },
      }),
      getShadowStyle: () => ({}),
      useStyleProps: () => ({}),
    },
    "../hooks": { useFlyoutContext: () => context },
    "../utils/get-flyout-keyboard-body-padding.utils": {
      getFlyoutKeyboardBodyPadding,
    },
  };
  mocks["./use-flyout-context.hook"] = mocks["../hooks"];
  for (const hook of [
    "use-flyout-keyboard-body-style",
    "use-flyout-keyboard-body",
  ]) {
    const source = readFileSync(
      new URL(`../packages/flyout/src/hooks/${hook}.hook.ts`, import.meta.url),
      "utf8",
    );
    const hookExports = {};
    const output = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText;
    runInNewContext(output, {
      exports: hookExports,
      require: (name) => {
        assert.ok(name in mocks, `Unexpected import: ${name}`);
        return mocks[name];
      },
    });
    Object.assign(mocks["../hooks"], hookExports);
  }
  runInNewContext(compiled, {
    exports,
    require: (name) => {
      assert.ok(name in mocks, `Unexpected import: ${name}`);
      return mocks[name];
    },
  });
  let view;
  return {
    height,
    progress,
    get frameWrites() {
      return frameWrites;
    },
    context,
    render(props = {}, ref = null) {
      sharedIndex = 0;
      view = exports.FlyoutKeyboardAwareView(props, ref);
      return view;
    },
    layout(layout = { y: 66, height: 350 }) {
      view.props.onLayout({ nativeEvent: { layout } });
    },
    style() {
      reaction();
      return animate();
    },
  };
}

test("avoidance adds body padding without any translation or root position changes", () => {
  const body = createBodyHarness();
  body.render();
  body.layout();
  body.height.value = -320;
  body.progress.value = 1;
  const style = body.style();
  assert.equal(style.height, "auto");
  assert.equal(style.paddingBottom, 294);
  assert.equal(style.transform, undefined);
  assert.equal(style.bottom, undefined);
  assert.equal(body.context.measuredHeight.value, 450);
});

test("already open keyboard uses first body layout", () => {
  const body = createBodyHarness();
  body.height.value = -320;
  body.progress.value = 1;
  body.render();
  body.layout();
  assert.equal(body.style().height, "auto");
  assert.equal(body.style().paddingBottom, 294);
});

test("disabled and keyboard hide restore authored height and padding", () => {
  const body = createBodyHarness();
  const props = { style: { height: 350, paddingBottom: 12 } };
  body.render(props);
  body.layout();
  body.height.value = -200;
  body.progress.value = 1;
  assert.equal(body.style().paddingBottom, 186);
  body.render({ ...props, enabled: false });
  assert.equal(body.style().height, 350);
  assert.equal(body.style().paddingBottom, 12);
  body.render(props);
  body.height.value = 0;
  body.progress.value = 0;
  assert.equal(body.style().paddingBottom, 12);
});

test("gap follows keyboard progress; explicit zero overrides theme", () => {
  const body = createBodyHarness(12);
  body.render();
  body.layout();
  body.height.value = -100;
  body.progress.value = 0.5;
  assert.equal(body.style().paddingBottom, 72);
  body.render({ keyboardOffset: 0 });
  assert.equal(body.style().paddingBottom, 66);
});

test("explicit body height grows with padding and restores when keyboard hides", () => {
  const body = createBodyHarness();
  body.render({ style: { height: 350 } });
  body.layout();
  body.height.value = -320;
  body.progress.value = 1;
  assert.equal(body.style().height, 644);
  body.context.measuredHeight.value = 560;
  body.layout({ y: 66, height: 460 });
  assert.equal(body.style().paddingBottom, 294);
  body.height.value = 0;
  assert.equal(body.style().height, 350);
});

test("padding is capped by the maximum sheet space", () => {
  const body = createBodyHarness();
  body.render({ style: { paddingTop: 16, paddingBottom: 12 } });
  body.layout();
  body.height.value = -900;
  body.progress.value = 1;
  assert.equal(body.style().height, "auto");
  assert.equal(body.style().paddingBottom, 444);
});

test("native ref, style, children, and layout callback survive composition", () => {
  const body = createBodyHarness();
  const ref = { current: null };
  let layoutCount = 0;
  const style = { padding: 12 };
  const view = body.render(
    {
      style,
      onLayout: () => {
        layoutCount++;
      },
      children: "form",
    },
    ref,
  );
  body.layout();
  assert.equal(view.type, "AnimatedView");
  assert.equal(view.props.ref, ref);
  assert.equal(view.props.children, "form");
  assert.equal(view.props.style[1].padding, 12);
  assert.equal(layoutCount, 1);
});

test("short form can grow upward without feedback or loss of its content space", () => {
  const body = createBodyHarness();
  body.context.measuredHeight.value = 186;
  body.render();
  body.layout({ y: 66, height: 86 });
  body.height.value = -320;
  body.progress.value = 1;
  assert.equal(body.style().paddingBottom, 294);
  body.context.measuredHeight.value = 480;
  body.layout({ y: 66, height: 380 });
  assert.equal(body.style().paddingBottom, 294);
  assert.equal(380 - body.style().paddingBottom, 86);
});

test("duplicate body layouts keep the worklet frame stable and still notify consumers", () => {
  const body = createBodyHarness();
  let callbacks = 0;
  body.render({ onLayout: () => callbacks++ });
  body.layout();
  body.layout();
  body.layout();
  assert.equal(body.frameWrites, 1);
  assert.equal(callbacks, 3);
  body.layout({ y: 70, height: 350 });
  assert.equal(body.frameWrites, 2);
});

test("keyboard avoidance waits for valid sheet and body measurements", () => {
  assert.equal(inset({ keyboardHeight: 600, sheetHeight: 0 }), 0);
  assert.equal(inset({ keyboardHeight: 600, frame: { y: 0, height: 0 } }), 0);
  assert.equal(inset({ keyboardHeight: 600, sheetHeight: -1 }), 0);
});

test("inactive avoidance preserves percentage padding instead of overwriting it with zero", () => {
  const body = createBodyHarness();
  body.render({ style: { paddingBottom: "10%" } });
  body.layout();
  assert.equal(body.style().paddingBottom, "10%");
  body.height.value = -320;
  body.progress.value = 1;
  body.render({ enabled: false, style: { paddingBottom: "10%" } });
  assert.equal(body.style().paddingBottom, "10%");
});

for (const authoredHeight of [undefined, 160]) {
  test(`closing retains keyboard padding and body height (${authoredHeight ?? "auto"}) until reopening`, () => {
    const body = createBodyHarness();
    body.render({ style: { height: authoredHeight, paddingBottom: 12 } });
    body.layout();
    body.height.value = -320;
    body.progress.value = 1;
    const expanded = body.style();
    body.context.closingHeight.value = 520;
    body.height.value = 0;
    body.progress.value = 0;
    assert.deepEqual(body.style(), expanded);
    body.layout({ y: 66, height: 200 });
    assert.deepEqual(body.style(), expanded);
    body.context.closingHeight.value = 0;
    assert.equal(body.style().paddingBottom, 12);
    assert.equal(body.style().height, authoredHeight ?? "auto");
  });
}

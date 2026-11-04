import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import ts from "typescript";

import { createRenderer } from "./helpers/react-renderer.mjs";

// Real Content, lifecycle and spring hook; native measurement and animation clocks are controlled.
function createHarness() {
  const animations = [];
  const scheduled = [];
  const context = React.createContext(null);
  const cache = new Map();
  let surface;
  let mounts = 0;
  let unmounts = 0;
  const mocks = {
    react: React,
    "react/jsx-runtime": jsxRuntime,
    "@impulse-ui-native/core": {
      useEventCallback: (callback) => {
        const ref = React.useRef(callback);
        ref.current = callback;
        return React.useCallback((...args) => ref.current(...args), []);
      },
    },
    "react-native-reanimated": {
      useSharedValue: (initial) => {
        const ref = React.useRef(null);
        ref.current ??= {
          value: initial,
          set(animation) {
            animations.push(animation);
          },
        };
        return ref.current;
      },
      withSpring: (target, config, callback) => ({ target, config, callback }),
      withTiming: (target, config, callback) => ({ target, config, callback }),
      cancelAnimation: () => {},
    },
    "react-native-worklets": {
      scheduleOnRN: (callback, ...args) =>
        scheduled.push(() => callback(...args)),
    },
    "@impulse-ui-native/theme": {
      useComponentsTokens: () => ({
        popover: { enterDuration: 240, exitDuration: 180 },
      }),
    },
    "@impulse-ui-native/portal": { Portal: ({ children }) => children },
    "../contexts/popover.context": { PopoverContext: context },
    "../hooks/use-popover-context.hook": {
      usePopoverContext: () => React.useContext(context),
    },
    "./popover-surface": {
      PopoverSurfaceView: (props) => {
        surface = props;
        React.useEffect(() => {
          mounts++;
          return () => {
            unmounts++;
          };
        }, []);
        return React.createElement("Panel");
      },
    },
  };
  function load(path) {
    if (cache.has(path)) return cache.get(path);
    const exports = {};
    const source = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
      },
    });
    runInNewContext(outputText, {
      exports,
      require: (name) => {
        if (name === "./use-overlay-animation.hook")
          return load(
            "packages/overlay/src/hooks/use-overlay-animation.hook.ts",
          );
        if (name === "@impulse-ui-native/overlay")
          return {
            ...load("packages/overlay/src/hooks/use-overlay-lifecycle.hook.ts"),
            ...load("packages/overlay/src/hooks/use-overlay-spring.hook.ts"),
          };
        assert.ok(name in mocks, name);
        return mocks[name];
      },
    });
    cache.set(path, exports);
    return exports;
  }
  const { PopoverContent } = load(
    "packages/popover/src/components/popover-content.tsx",
  );
  const render = createRenderer();
  let open = false;
  const update = () => {
    // Flush state updates issued by lifecycle effects as well as external context updates.
    for (let pass = 0; pass < 3; pass++)
      render(
        React.createElement(
          context.Provider,
          { value: { open } },
          React.createElement(PopoverContent),
        ),
      );
  };
  return {
    animations,
    get surface() {
      return surface;
    },
    get mounts() {
      return mounts;
    },
    get unmounts() {
      return unmounts;
    },
    setOpen(value) {
      open = value;
      update();
    },
    ready() {
      surface.onReady();
      update();
    },
    finish(animation, finished = true) {
      animation.callback(finished);
      while (scheduled.length) scheduled.shift()();
      update();
    },
    destroy() {
      render(null);
    },
  };
}

test("popover waits for measurement, retains content on exit and ignores stale exit completion after reopening", () => {
  const harness = createHarness();
  harness.setOpen(false);
  assert.equal(harness.mounts, 0);
  harness.setOpen(true);
  assert.equal(harness.mounts, 1);
  assert.equal(harness.animations.length, 0);
  assert.equal(harness.surface.interactive, false);
  harness.ready();
  assert.equal(harness.animations.length, 1);
  const entry = harness.animations.at(-1);
  assert.equal(entry.target, 1);
  harness.finish(entry);
  harness.setOpen(false);
  const exit = harness.animations.at(-1);
  assert.equal(exit.target, 0);
  assert.equal(harness.surface.interactive, false);
  assert.equal(harness.unmounts, 0);
  harness.setOpen(true);
  assert.equal(harness.mounts, 1);
  harness.finish(exit); // Completion already queued on RN when the spring was interrupted.
  assert.equal(harness.unmounts, 0);
  assert.equal(harness.surface.interactive, true);
  harness.setOpen(false);
  harness.finish(harness.animations.at(-1));
  assert.equal(harness.unmounts, 1);
  harness.setOpen(true);
  assert.equal(harness.mounts, 2);
  const previousCount = harness.animations.length;
  assert.equal(harness.surface.interactive, false);
  harness.ready();
  assert.equal(harness.animations.length, previousCount + 1);
  harness.destroy();
});

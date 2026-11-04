import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

function createHarness(kind = "spring") {
  const animations = [];
  const pending = [];
  const cleanups = [];
  const cancelled = [];
  const progress = {
    value: 0,
    set(animation) {
      animations.push(animation);
    },
  };
  function load(name) {
    const exports = {};
    const source = readFileSync(
      new URL(`../packages/overlay/src/hooks/${name}.ts`, import.meta.url),
      "utf8",
    );
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    const mocks = {
      react: {
        useMemo: (factory) => factory(),
        useEffect: (effect) => cleanups.push(effect()),
      },
      "@impulse-ui-native/core": { useEventCallback: (callback) => callback },
      "react-native-worklets": {
        scheduleOnRN: (callback, ...args) =>
          pending.push(() => callback(...args)),
      },
      "react-native-reanimated": {
        useSharedValue: () => progress,
        withSpring: (target, config, callback) => ({
          target,
          config,
          callback,
        }),
        withTiming: (target, config, callback) => ({
          target,
          config,
          callback,
        }),
        cancelAnimation: (value) => cancelled.push(value),
      },
    };
    runInNewContext(outputText, {
      exports,
      require: (name) => {
        if (name === "./use-overlay-animation.hook")
          return load("use-overlay-animation.hook");
        assert.ok(name in mocks, name);
        return mocks[name];
      },
    });
    return exports;
  }
  const wrapper = load(`use-overlay-${kind}.hook`);
  const useAnimation =
    kind === "spring" ? wrapper.useOverlaySpring : wrapper.useOverlayTiming;
  return {
    ...useAnimation({ enterDuration: 300, exitDuration: 220 }),
    animations,
    pending,
    cancelled,
    cleanup: () => cleanups.forEach((cleanup) => cleanup()),
  };
}

for (const kind of ["spring", "timing"]) {
  test(`${kind} retargets the same progress without resetting it; cancelled completions stay silent`, () => {
    const harness = createHarness(kind);
    const completed = [];
    harness.options.onEnter(1, (id) => completed.push(id));
    harness.progress.value = 0.45;
    harness.options.onExit(2, (id) => completed.push(id));
    assert.equal(harness.progress.value, 0.45);
    const [enter, exit] = harness.animations;
    assert.equal(enter.target, 1);
    assert.equal(enter.config.duration, 300);
    assert.equal(exit.target, 0);
    assert.equal(exit.config.duration, 220);
    assert.equal(exit.config.dampingRatio, kind === "spring" ? 1 : undefined);
    enter.callback(false);
    exit.callback(true);
    assert.deepEqual(completed, []);
    harness.pending.forEach((callback) => callback());
    assert.deepEqual(completed, [2]);
    harness.cleanup();
    assert.equal(harness.cancelled[0], harness.progress);
  });
}

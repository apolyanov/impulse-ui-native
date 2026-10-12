import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import babel from "@babel/core";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const useExpoTransform = process.argv.includes("--expo-transform");
const cache = new Map();
const notifications = [];
let harness;
let now = 0;

// Execute the real hooks and gesture callbacks with deterministic hook storage,
// shared values, and a queued RN scheduler. This checks native interaction math
// and event ordering, not recognition, rendering, or frame rates on a device.
// Pass --expo-transform to execute the native host's Babel output as well,
// catching worklet closure initialization errors hidden by TypeScript-only checks.
const react = {
  useState(initial) {
    const cell = harness.cell(() => ({ value: initial }));

    return [
      cell.value,
      (next) => {
        cell.value = typeof next === "function" ? next(cell.value) : next;
      },
    ];
  },
  useRef(initial) {
    return harness.cell(() => ({ current: initial }));
  },
  useMemo(factory, dependencies) {
    const cell = harness.cell(() => ({}));

    if (
      !dependencies ||
      !cell.dependencies ||
      dependencies.some(
        (value, index) => !Object.is(value, cell.dependencies[index]),
      )
    ) {
      cell.value = factory();
      cell.dependencies = dependencies;
    }

    return cell.value;
  },
  useCallback(callback, dependencies) {
    return react.useMemo(() => callback, dependencies);
  },
  useEffect(effect, dependencies) {
    react.useMemo(() => harness.effects.push(effect), dependencies);
  },
};

react.useLayoutEffect = react.useEffect;

function createHarness(hook, options) {
  const cells = [];
  const instance = {
    cursor: 0,
    effects: [],
    cell(factory) {
      const index = instance.cursor++;

      if (!(index in cells)) {
        cells[index] = factory();
      }

      return cells[index];
    },
    render() {
      harness = instance;
      instance.cursor = 0;
      instance.effects = [];
      instance.result = hook(options);

      for (const effect of instance.effects) {
        effect();
      }

      return instance.result;
    },
  };

  instance.render();

  return instance;
}

function createGesture() {
  const gesture = { callbacks: {}, config: {} };

  for (const name of [
    "enabled",
    "manualActivation",
    "shouldCancelWhenOutside",
    "onTouchesDown",
    "onStart",
    "onUpdate",
    "onEnd",
    "onFinalize",
  ]) {
    gesture[name] = (value) => {
      (name.startsWith("on") ? gesture.callbacks : gesture.config)[name] =
        value;

      return gesture;
    };
  }

  return gesture;
}

function loadSource(relativePath) {
  const filename = path.resolve(root, relativePath);

  if (cache.has(filename)) {
    return cache.get(filename).exports;
  }

  const module = { exports: {} };
  cache.set(filename, module);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const executableSource = useExpoTransform
    ? babel.transformFileSync(filename, {
        configFile: path.join(root, "apps/impulse-ui-native/babel.config.js"),
        caller: {
          name: "metro",
          platform: "ios",
          isDev: true,
          supportsStaticESM: false,
        },
      }).code
    : outputText;
  const sourceRequire = (specifier) => {
    if (specifier.startsWith("@babel/runtime/")) {
      return require(specifier);
    }

    if (specifier === "react") {
      return react;
    }

    if (specifier === "react-native-reanimated") {
      return {
        useDerivedValue: (evaluate) =>
          react.useMemo(() => ({ get: evaluate }), []),
        useSharedValue: (initial) =>
          react.useMemo(() => {
            let value = initial;

            return {
              get: () => value,
              set: (next) => {
                value = next;
              },
            };
          }, []),
        useAnimatedStyle: (evaluate) =>
          react.useMemo(() => ({ evaluate }), [evaluate]),
      };
    }

    if (specifier === "react-native-gesture-handler") {
      return { Gesture: { Pan: createGesture } };
    }

    if (specifier === "react-native-worklets") {
      return {
        scheduleOnUI: (callback, ...args) => callback(...args),
        scheduleOnRN: (callback, ...args) =>
          notifications.push(() => callback(...args)),
      };
    }

    if (specifier === "@impulse-ui-native/core") {
      return {
        ...loadSource("packages/core/src/hooks/use-controllable-state.hook.ts"),
        ...loadSource("packages/core/src/hooks/use-event-callback.hook.ts"),
      };
    }

    if (specifier === "@impulse-ui-native/theme") {
      return {
        useTheme: () => ({ colors: { primary: { value: "#FF0000" } } }),
      };
    }

    if (
      specifier === "../utils" &&
      filename.includes(`${path.sep}core${path.sep}`)
    ) {
      return loadSource("packages/core/src/utils/hook.utils.ts");
    }

    assert(specifier.startsWith("."), `Unexpected import: ${specifier}`);
    const base = path.resolve(path.dirname(filename), specifier);
    const resolved = [`${base}.ts`, path.join(base, "index.ts")].find(
      (candidate) => fs.existsSync(candidate),
    );
    assert(resolved, `Cannot resolve ${specifier}`);

    return loadSource(resolved);
  };

  vm.runInNewContext(executableSource, {
    module,
    exports: module.exports,
    require: sourceRequire,
    Date: { now: () => now },
    global: { Error },
  });

  return module.exports;
}

function flushNotifications() {
  while (notifications.length > 0) {
    notifications.shift()();
  }
}

function layout(result) {
  result.handleLayout({ nativeEvent: { layout: { width: 100, height: 100 } } });
}

function finish(result, x, y = 0) {
  result.gesture.callbacks.onEnd({ x, y }, true);
  result.gesture.callbacks.onFinalize();
  flushNotifications();
}

const { useControllableState } = loadSource(
  "packages/core/src/hooks/use-controllable-state.hook.ts",
);

const { normalizeSliderValue, normalizeRangeValue, updateRangeThumb } =
  loadSource("packages/slider/src/utils/slider.utils.ts");
assert.equal(
  normalizeSliderValue(3e-7, { min: 0, max: 1e-6, step: 1e-7 }),
  3e-7,
);
assert.equal(normalizeSliderValue(11.5, { min: 0, max: 11.5, step: 2 }), 11.5);
assert.equal(normalizeSliderValue(104, { min: 0, max: 104, step: 10 }), 104);
assert.equal(
  normalizeSliderValue(0.3, { min: 0, max: 1, step: 0.1 }, "down"),
  0.3,
);
assert.deepEqual(
  Array.from(
    normalizeRangeValue([100, 105], { min: 0, max: 105, step: 10 }, 1),
  ),
  [90, 105],
);
assert.deepEqual(
  Array.from(
    normalizeRangeValue([105, 105], { min: 0, max: 105, step: 10 }, 0),
  ),
  [105, 105],
);

for (const bounds of [
  { min: 0, max: 105, step: 10 },
  { min: -0.2, max: 1.05, step: 0.1 },
  { min: 0, max: 1e-6, step: 1e-7 },
]) {
  for (const minimumSteps of [0, 0.5, 1, 2, 100]) {
    const gap = Math.min(bounds.max - bounds.min, minimumSteps * bounds.step);
    const tolerance = Math.max(1e-15, bounds.step * 1e-9);

    for (let index = 0; index <= 20; index++) {
      const position = bounds.min + (index / 20) * (bounds.max - bounds.min);
      const normalized = normalizeRangeValue(
        [position, bounds.max],
        bounds,
        minimumSteps,
      );

      for (const rangeValue of [
        normalized,
        updateRangeThumb(normalized, "start", bounds.max, bounds, minimumSteps),
        updateRangeThumb(normalized, "end", bounds.min, bounds, minimumSteps),
      ]) {
        assert(rangeValue[0] >= bounds.min && rangeValue[1] <= bounds.max);
        assert(
          rangeValue[1] - rangeValue[0] >= gap - tolerance,
          "Range constraints must survive directional snapping",
        );
      }
    }
  }
}
const stateChanges = [];
const state = createHarness(useControllableState, {
  defaultProp: 0,
  onChange: (value) => stateChanges.push(value),
});
state.result[1](1);
state.result[1]((value) => value + 1);
state.result[1](0);
assert.deepEqual(stateChanges, [1, 2, 0]);
assert.equal(state.render()[0], 0);

const rejectedChanges = [];
const rejectedState = createHarness(useControllableState, {
  prop: 0,
  onChange: (value) => rejectedChanges.push(value),
});
rejectedState.result[1](1);
assert.equal(rejectedState.render()[0], 0);
rejectedState.result[1](1);
assert.deepEqual(
  rejectedChanges,
  [1, 1],
  "Controlled requests must reconcile after every commit, even when props stay equal",
);

const { useSlider } = loadSource(
  "packages/slider/src/hooks/use-slider.hook.ts",
);
const changes = [];
const completions = [];
const slider = createHarness(useSlider, {
  defaultValue: 20,
  disabled: false,
  min: 0,
  max: 100,
  step: 10,
  onValueChange: (value) => changes.push(value),
  onSlidingComplete: (value) => completions.push(value),
});
layout(slider.result);
slider.result.gesture.callbacks.onStart({ x: 30 });
slider.result.gesture.callbacks.onUpdate({ x: 31 });
assert.equal(
  slider.result.positionStyle.evaluate().transform[0].translateX,
  31,
  "Thumb movement within a step must remain continuous",
);
slider.result.gesture.callbacks.onUpdate({ x: 20 });
assert.equal(
  slider.result.positionStyle.evaluate().transform[0].translateX,
  20,
);
assert.equal(changes.length, 0, "UI updates must not wait for RN callbacks");
finish(slider.result, 40);
assert.deepEqual(changes, [30, 20, 40]);
assert.deepEqual(completions, [40]);
assert.equal(slider.render().valueLabel, "40");

const continuousChanges = [];
const continuousVisualChanges = [];
const continuous = createHarness(useSlider, {
  defaultValue: 0,
  disabled: false,
  min: 0,
  max: 100,
  step: 25,
  onValueChange: (value) => continuousChanges.push(value),
  onValueChangeWorklet: (value) => continuousVisualChanges.push(value),
});
layout(continuous.result);
continuous.result.gesture.callbacks.onStart({ x: 12 });
continuous.result.gesture.callbacks.onUpdate({ x: 13 });
continuous.result.gesture.callbacks.onUpdate({ x: 14 });
assert.equal(
  continuousVisualChanges.length,
  3,
  "Linked color visuals must update without waiting for RN",
);
assert.equal(continuousChanges.length, 0);
flushNotifications();
assert.deepEqual(continuousChanges, [25]);
assert(
  Math.abs(
    continuous.render().positionStyle.evaluate().transform[0].translateX - 14,
  ) < 1e-9,
  "Accepted stepped values must not pull the thumb off the finger during a drag",
);
continuous.result.gesture.callbacks.onUpdate({ x: 26 });
assert.equal(
  continuous.result.positionStyle.evaluate().transform[0].translateX,
  26,
);
assert.equal(continuous.result.activeTrackStyle.evaluate().width, "26%");
finish(continuous.result, 26);
assert.deepEqual(
  continuousChanges,
  [25],
  "Continuous movement must not emit repeated steps",
);
assert.equal(
  continuous.render().positionStyle.evaluate().transform[0].translateX,
  25,
  "Release must reconcile to the normalized selection",
);

slider.result.gesture.callbacks.onStart({ x: 50 });
slider.result.gesture.callbacks.onUpdate({ x: 60 });
slider.result.gesture.callbacks.onFinalize();
slider.result.gesture.callbacks.onFinalize();
flushNotifications();
assert.deepEqual(
  completions,
  [40, 60],
  "Interruption must complete once with the latest value",
);

const marked = createHarness(useSlider, {
  defaultValue: 0,
  disabled: false,
  min: 0,
  max: 100,
  step: 1,
  marks: [0, 50, 100],
});
const originalLabels = marked.result.labelMarks;
layout(marked.result);
marked.result.gesture.callbacks.onStart({ x: 70 });
finish(marked.result, 70);
assert.equal(
  marked.render().labelMarks,
  originalLabels,
  "Moving the thumb must retain static mark labels",
);

const controlledRequests = [];
const controlled = createHarness(useSlider, {
  defaultValue: 0,
  value: 20,
  onValueChange: (value) => controlledRequests.push(value),
  disabled: false,
  min: 0,
  max: 100,
  step: 10,
});
layout(controlled.result);
controlled.result.gesture.callbacks.onStart({ x: 80 });
assert.equal(
  controlled.result.positionStyle.evaluate().transform[0].translateX,
  80,
);
finish(controlled.result, 80);
assert.deepEqual(controlledRequests, [80]);
assert.equal(
  controlled.render().positionStyle.evaluate().transform[0].translateX,
  20,
  "A rejected controlled edit must reconcile on release",
);
controlled.result.gesture.callbacks.onStart({ x: 40 });
controlled.result.gesture.callbacks.onUpdate({ x: 20 });
finish(controlled.result, 20);
assert.deepEqual(
  controlledRequests,
  [80, 40, 20],
  "Returning to the fixed controlled value must still emit the gesture request",
);

const { useRangeSlider } = loadSource(
  "packages/slider/src/hooks/use-range-slider.hook.ts",
);
const ranges = [];
const range = createHarness(useRangeSlider, {
  defaultValue: [20, 70],
  disabled: false,
  min: 0,
  max: 100,
  step: 10,
  minStepsBetweenThumbs: 1,
  onValueChange: (value) => ranges.push(Array.from(value)),
});
layout(range.result);
range.result.gesture.callbacks.onStart({ x: 25 });
assert.equal(
  range.result.startThumb.positionStyle.evaluate().transform[0].translateX,
  25,
);
range.result.gesture.callbacks.onUpdate({ x: 90 });
range.result.gesture.callbacks.onUpdate({ x: 95 });
finish(range.result, 95);
assert.deepEqual(ranges, [
  [30, 70],
  [60, 70],
]);
assert.equal(range.render().startThumb.valueLabel, "60");

const midpointChanges = [];
const midpoint = createHarness(useRangeSlider, {
  defaultValue: [25, 75],
  disabled: false,
  min: 0,
  max: 100,
  step: 25,
  minStepsBetweenThumbs: 0,
  onValueChange: (value) => midpointChanges.push(Array.from(value)),
});
layout(midpoint.result);
midpoint.result.gesture.callbacks.onStart({ x: 51 });
assert.equal(
  midpoint.result.endThumb.positionStyle.evaluate().transform[0].translateX,
  51,
);
finish(midpoint.result, 51);
assert.deepEqual(
  midpointChanges,
  [[25, 50]],
  "Thumb selection must use the continuous touch position on both threads",
);

const disabled = createHarness(useSlider, {
  defaultValue: 0,
  disabled: true,
  min: 0,
  max: 100,
  step: 1,
});
assert.equal(disabled.result.gesture.config.enabled, false);
let failed = false;
disabled.result.gesture.callbacks.onTouchesDown(
  {},
  {
    fail: () => {
      failed = true;
    },
    activate: () => assert.fail("Unmeasured tracks must not activate"),
  },
);
assert(failed);

const { useSpectrumInteraction } = loadSource(
  "packages/color-picker/src/hooks/use-spectrum-interaction.hook.ts",
);
const colors = [];
const spectrum = createHarness(useSpectrumInteraction, {
  disabled: false,
  saturation: 0,
  brightness: 1,
  onChange: (s, v) => colors.push([s, v]),
});
layout(spectrum.result);
spectrum.result.gesture.callbacks.onStart({ x: 10, y: 10 });
for (now = 1; now <= 100; now++) {
  spectrum.result.gesture.callbacks.onUpdate({ x: now, y: now });
}
assert.equal(colors.length, 0);
assert.equal(
  spectrum.result.indicatorStyle.evaluate().transform[0].translateX,
  100,
);
assert(
  notifications.length <= 8,
  "Spectrum callbacks should be limited even while RN is blocked",
);
finish(spectrum.result, 150, -50);
assert.deepEqual(
  colors.at(-1),
  [1, 1],
  "Release must flush and clamp the final position",
);

spectrum.result.gesture.callbacks.onStart({ x: 10, y: 10 });
now += 1;
spectrum.result.gesture.callbacks.onUpdate({ x: 15, y: 15 });
spectrum.result.gesture.callbacks.onFinalize();
flushNotifications();
assert.deepEqual(
  colors.at(-1),
  [0.15, 0.85],
  "Interruption must flush a throttled spectrum move",
);

const { useColorPicker } = loadSource(
  "packages/color-picker/src/hooks/use-color-picker.hook.ts",
);
const { useColorPickerMotion } = loadSource(
  "packages/color-picker/src/hooks/use-color-picker-motion.hook.ts",
);
const motionOptions = { hsva: { h: 0, s: 1, v: 1, a: 1 }, resetKey: 0 };
const liveColor = createHarness(
  (options) => useColorPickerMotion(options.hsva, options.resetKey),
  motionOptions,
);
liveColor.result.setHue(123.4);
liveColor.result.setAlpha(0.345);
assert.equal(liveColor.result.color.get().h, 123.4);
assert.equal(liveColor.result.color.get().a, 0.345);
motionOptions.hsva = { h: 123, s: 1, v: 1, a: 0.35 };
liveColor.render();
assert.equal(
  liveColor.result.color.get().h,
  123.4,
  "React snapshots must not overwrite continuous hue during drag",
);
assert.equal(liveColor.result.color.get().a, 0.345);
liveColor.result.finish();
liveColor.render();
assert.equal(liveColor.result.color.get().h, 123);
assert.equal(liveColor.result.color.get().a, 0.35);
liveColor.result.setSpectrum(0.2, 0.4);
assert.equal(liveColor.result.color.get().s, 0.2);
assert.equal(liveColor.result.color.get().v, 0.4);
motionOptions.resetKey++;
liveColor.render();
assert.equal(
  liveColor.result.color.get().s,
  1,
  "Cancel/reset must restore accepted visual color",
);
const committedColors = [];
const picker = createHarness(useColorPicker, {
  defaultValue: "#FF0000",
  onChange: (value) => committedColors.push(value),
});
picker.result.setHue(120);
picker.result.setAlpha(0.5);
picker.result.setHue(0);
assert.deepEqual(committedColors, ["#00FF00", "#00FF0080", "#FF000080"]);
assert.equal(picker.render().value, "#FF000080");

const dragChanges = [];
const draggingPicker = createHarness(useColorPicker, {
  defaultValue: "#FF0000",
  onChange: (value) => dragChanges.push(value),
});
const idlePickerContext = draggingPicker.result;
draggingPicker.result.motion.setHue(120);
draggingPicker.result.gesture.setHue(120);
assert.equal(
  draggingPicker.render(),
  idlePickerContext,
  "Drag notifications must not invalidate every picker context consumer",
);
draggingPicker.result.motion.setHue(240);
draggingPicker.result.gesture.setHue(240);
assert.equal(draggingPicker.render(), idlePickerContext);
assert.deepEqual(
  dragChanges,
  ["#00FF00", "#0000FF"],
  "Live value emissions must continue while React fields stay stable",
);
draggingPicker.result.motion.finish();
assert.equal(
  draggingPicker.render().value,
  "#0000FF",
  "Release must publish the final normalized color to fields",
);

const confirmed = [];
const confirmPicker = createHarness(useColorPicker, {
  defaultValue: "#FF0000",
  commitMode: "confirm",
  onChange: (value) => confirmed.push(value),
});
confirmPicker.result.setHue(120);
confirmPicker.render();
assert.equal(confirmed.length, 0);
confirmPicker.result.apply();
assert.deepEqual(confirmed, ["#00FF00"]);
confirmPicker.render();
confirmPicker.result.setHue(240);
confirmPicker.render();
confirmPicker.result.cancel();
assert.equal(confirmPicker.render().value, "#00FF00");

const { useColorInput } = loadSource(
  "packages/color-picker/src/hooks/use-color-input.hook.ts",
);
const inputOptions = {
  value: "10",
  resetKey: 0,
  disabled: false,
  commit: (text) => {
    if (!/^\d{1,3}$/.test(text) || Number(text) > 255) {
      return undefined;
    }

    inputOptions.value = String(Number(text));

    return inputOptions.value;
  },
};
const input = createHarness(useColorInput, inputOptions);
input.result.onChangeText("24");
assert.equal(input.render().text, "24");
input.result.onChangeText("999");
assert.equal(input.render().invalid, false);
assert.equal(
  inputOptions.value,
  "24",
  "Invalid typing must retain the last valid color channel",
);
input.result.onCommit();
assert.equal(input.render().invalid, true);
inputOptions.resetKey++;
assert.equal(
  input.render().text,
  "24",
  "Apply/Cancel must discard invalid input drafts",
);
input.render();
inputOptions.disabled = true;
input.render().onChangeText("100");
assert.equal(inputOptions.value, "24", "Disabled inputs must block edits");

const controlledPickerOptions = {
  value: "#FF0000",
  onChange: (next) => {
    controlledPickerOptions.value = next;
  },
};
const controlledPicker = createHarness(useColorPicker, controlledPickerOptions);
const controlledPickerContext = controlledPicker.result;
controlledPicker.result.motion.setHue(120);
controlledPicker.result.gesture.setHue(120);
assert.equal(controlledPickerOptions.value, "#00FF00");
assert.equal(
  controlledPicker.render(),
  controlledPickerContext,
  "Controlled owner updates must retain the picker presentation snapshot during drag",
);
controlledPicker.result.motion.setAlpha(0.5);
controlledPicker.result.gesture.setAlpha(0.5);
assert.equal(controlledPickerOptions.value, "#00FF0080");
assert.equal(controlledPicker.render(), controlledPickerContext);
controlledPicker.result.motion.finish();
assert.equal(controlledPicker.render().value, "#00FF0080");

const rejectedPickerChanges = [];
const rejectedPicker = createHarness(useColorPicker, {
  value: "#FF0000",
  onChange: (next) => rejectedPickerChanges.push(next),
});
rejectedPicker.result.gesture.setHue(120);
rejectedPicker.render();
rejectedPicker.result.gesture.setHue(0);
assert.deepEqual(rejectedPickerChanges, ["#00FF00", "#FF0000"]);
rejectedPicker.result.motion.finish();
assert.equal(rejectedPicker.render().value, "#FF0000");

const { rgbaToNativeColor } = loadSource(
  "packages/color-picker/src/utils/color.utils.ts",
);
const { processColorInitially } = loadSource(
  "node_modules/react-native-reanimated/src/Colors.ts",
);

// Check the actual installed color processor, not only our representation.
// ARGB inputs would rotate channels twice and break the preview/alpha track.
for (const rgb of [
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 255, b: 0 },
  { r: 0, g: 0, b: 255 },
  { r: 18, g: 52, b: 86 },
]) {
  for (const alpha of [0, 0.01, 0.5, 0.99, 1]) {
    const color = { ...rgb, a: alpha };
    const processed = processColorInitially(rgbaToNativeColor(color));
    const opaque = processColorInitially(rgbaToNativeColor(color, true));

    assert.equal(processed >>> 24, Math.round(alpha * 255));
    assert.equal((processed >>> 16) & 255, rgb.r);
    assert.equal((processed >>> 8) & 255, rgb.g);
    assert.equal(processed & 255, rgb.b);
    assert.equal(opaque >>> 24, 255, "Alpha track must retain an opaque color");
    assert.equal(opaque & 0xffffff, processed & 0xffffff);
  }
}

console.log(
  "Slider interaction checks passed: queued updates, UI independence, steps, final positions, controlled reconciliation, range gaps, disabled/unmeasured tracks, spectrum throttling, and picker commit modes.",
);

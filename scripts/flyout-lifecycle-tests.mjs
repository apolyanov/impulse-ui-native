import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

// Run real lifecycle callbacks, delaying UI completion and RN scheduling separately.
// React commits and native layout/animation rendering are not simulated.
function createHarness(placement = "bottom", offset = 0) {
  const shared = [];
  const refs = [];
  let refIndex = 0;
  let stateUpdates = 0;
  const animationCallbacks = [];
  const rnCallbacks = [];
  const completed = [];
  const notifications = [];
  let measured = false;
  let sharedIndex = 0;
  let mounted = true;
  let overlayProps;
  let options;
  const exports = {};
  const source = readFileSync(
    new URL(
      "../packages/flyout/src/hooks/use-flyout-lifecycle.hook.ts",
      import.meta.url,
    ),
    "utf8",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const gesture = {};
  for (const name of ["enabled", "onUpdate", "onEnd"])
    gesture[name] = () => gesture;
  const mocks = {
    react: {
      useState: () => [
        measured,
        (value) => {
          measured = value;
          stateUpdates++;
        },
      ],
      useRef: (initial) => {
        const index = refIndex++;
        refs[index] ??= { current: initial };
        return refs[index];
      },
      useMemo: (factory) => factory(),
      useEffect: () => {},
    },
    "@impulse-ui-native/core": { useEventCallback: (callback) => callback },
    "@impulse-ui-native/theme": {
      useComponentsTokens: () => ({
        flyout: {
          enterSpring: {},
          exitDuration: 150,
          overlayVisibleOpacity: 0.4,
        },
      }),
    },
    "@impulse-ui-native/overlay": {
      useOverlayLifecycle: (props, config) => {
        overlayProps = props;
        options = config;
        return { mounted, status: "open", interactive: true, close: () => {} };
      },
    },
    "react-native-gesture-handler": { Gesture: { Pan: () => gesture } },
    "react-native-worklets": {
      scheduleOnRN: (callback, ...args) =>
        rnCallbacks.push(() => callback(...args)),
    },
    "react-native-reanimated": {
      cancelAnimation: () => {},
      useSharedValue: (initial) => {
        const index = sharedIndex++;
        shared[index] ??= {
          value: initial,
          writes: 0,
          set(value) {
            this.writes++;
            this.value = value;
          },
        };
        return shared[index];
      },
      withSpring: (target) => target,
      withTiming: (target, _config, callback) => {
        if (callback) animationCallbacks.push(callback);
        return target;
      },
    },
  };
  runInNewContext(outputText, {
    exports,
    require: (name) => {
      assert.ok(name in mocks, `Unexpected import: ${name}`);
      return mocks[name];
    },
  });
  return {
    completed,
    notifications,
    get stateUpdates() {
      return stateUpdates;
    },
    render() {
      sharedIndex = 0;
      refIndex = 0;
      return exports.useFlyoutLifecycle({
        id: "sheet",
        open: true,
        placement,
        offset,
        onCloseFinished: (id) => notifications.push(id),
      });
    },
    exit() {
      options.onExit(7, (id) => {
        completed.push(id);
        overlayProps.onCloseFinished("sheet");
      });
    },
    finishAnimation(finished = true) {
      animationCallbacks.shift()(finished);
    },
    flushRN() {
      while (rnCallbacks.length) rnCallbacks.shift()();
    },
    enter() {
      options.onEnter(8, () => {});
    },
    unmount() {
      mounted = false;
    },
  };
}

for (const placement of ["bottom", "top"]) {
  test(`${placement} exit stays offscreen while React unmount is pending`, () => {
    const harness = createHarness(placement, 12);
    let lifecycle = harness.render();
    lifecycle.onLayout({ nativeEvent: { layout: { height: 520 } } });
    lifecycle = harness.render();
    harness.enter();
    harness.exit();
    const target = placement === "bottom" ? 532 : -532;
    assert.equal(lifecycle.translateY.value, target);
    harness.finishAnimation();
    assert.equal(harness.completed.length, 0);
    harness.flushRN();
    assert.deepEqual(harness.completed, [7]);
    assert.deepEqual(harness.notifications, ["sheet"]);
    // UI values must remain valid before React removes the old native view.
    assert.equal(lifecycle.translateY.value, target);
    assert.equal(lifecycle.measuredHeight.value, 520);
    assert.equal(lifecycle.opacity.value, 0);
    assert.equal(harness.render().hasMeasured, false);
  });
}

test("reopening prepares a fresh height and position before entry", () => {
  const harness = createHarness("bottom", 8);
  let lifecycle = harness.render();
  lifecycle.onLayout({ nativeEvent: { layout: { height: 520 } } });
  harness.render();
  harness.exit();
  harness.finishAnimation();
  harness.flushRN();
  lifecycle = harness.render();
  assert.equal(lifecycle.hasMeasured, false);
  lifecycle.onLayout({ nativeEvent: { layout: { height: 180 } } });
  assert.equal(lifecycle.translateY.value, 188);
  assert.equal(lifecycle.measuredHeight.value, 180);
  lifecycle = harness.render();
  assert.equal(lifecycle.hasMeasured, true);
  harness.enter();
  assert.equal(lifecycle.translateY.value, 0);
  assert.equal(lifecycle.opacity.value, 0.4);
});

test("cancelled exit does not finish closing or reset readiness", () => {
  const harness = createHarness();
  harness.render().onLayout({ nativeEvent: { layout: { height: 320 } } });
  harness.render();
  harness.exit();
  harness.finishAnimation(false);
  harness.flushRN();
  assert.deepEqual(harness.completed, []);
  assert.deepEqual(harness.notifications, []);
  assert.equal(harness.render().hasMeasured, true);
});

test("layout events after unmount cannot replace the retained exit geometry", () => {
  const harness = createHarness();
  harness.render().onLayout({ nativeEvent: { layout: { height: 320 } } });
  harness.render();
  harness.exit();
  harness.finishAnimation();
  harness.flushRN();
  harness.unmount();
  const lifecycle = harness.render();
  lifecycle.onLayout({ nativeEvent: { layout: { height: 40 } } });
  assert.equal(lifecycle.measuredHeight.value, 320);
  assert.equal(lifecycle.translateY.value, 320);
});

test("duplicate layouts prepare once and do not resend height to the UI thread", () => {
  const harness = createHarness();
  const lifecycle = harness.render();
  const event = { nativeEvent: { layout: { height: 320 } } };
  lifecycle.onLayout(event);
  lifecycle.onLayout(event);
  lifecycle.onLayout(event);
  assert.equal(harness.stateUpdates, 1);
  assert.equal(lifecycle.measuredHeight.writes, 1);
  assert.equal(lifecycle.translateY.writes, 1);
  harness.render().onLayout({ nativeEvent: { layout: { height: 400 } } });
  assert.equal(harness.stateUpdates, 1);
  assert.equal(lifecycle.measuredHeight.writes, 2);
  assert.equal(lifecycle.translateY.writes, 1);
});

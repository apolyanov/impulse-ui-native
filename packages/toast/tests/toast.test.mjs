import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const sourceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src",
);

// Load source without importing React Native's native runtime into Node.
function loader(mocks = {}, globals = {}) {
  const cache = new Map();

  function load(file) {
    const filename = path.resolve(sourceRoot, file);

    if (cache.has(filename)) {
      return cache.get(filename);
    }

    const module = { exports: {} };

    cache.set(filename, module.exports);

    const code = ts.transpileModule(readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;

    const require = (specifier) => {
      if (Object.hasOwn(mocks, specifier)) {
        return mocks[specifier];
      }

      if (!specifier.startsWith(".")) {
        throw new Error("Unexpected dependency " + specifier);
      }

      return load(path.resolve(path.dirname(filename), specifier + ".ts"));
    };

    vm.runInNewContext(
      code,
      { module, exports: module.exports, require, ...globals },
      { filename },
    );

    return module.exports;
  }

  return load;
}

function timerHarness(state = "active") {
  let now = 0,
    next = 0,
    cleanup;
  const scheduled = new Map();
  const listeners = new Set();
  const AppState = {
    currentState: state,
    addEventListener: (_event, callback) => {
      listeners.add(callback);

      return { remove: () => listeners.delete(callback) };
    },
  };
  const load = loader(
    {
      react: {
        useEffect: (effect) => {
          cleanup = effect();
        },
      },
      "@impulse-ui-native/core": { useEventCallback: (fn) => fn },
      "react-native": { AppState },
    },
    {
      Date: { now: () => now },
      setTimeout: (callback, delay) => {
        const id = ++next;

        scheduled.set(id, { callback, due: now + delay });

        return id;
      },
      clearTimeout: (id) => scheduled.delete(id),
    },
  );
  const { useToastTimer } = load("hooks/use-toast-timer.hook.ts");

  return {
    start: (active, duration, close) => useToastTimer(active, duration, close),
    advance: (ms) => {
      now += ms;

      for (const [id, task] of scheduled) {
        if (task.due <= now) {
          scheduled.delete(id);
          task.callback();
        }
      }
    },
    state: (value) => {
      AppState.currentState = value;

      listeners.forEach((callback) => callback(value));
    },
    cleanup: () => cleanup?.(),
    scheduled,
    listeners,
  };
}

test("inactive timers and persistent durations have no timer", () => {
  for (const [active, duration] of [
    [false, 4000],
    [true, 0],
    [true, -1],
    [true, Infinity],
    [true, NaN],
  ]) {
    const harness = timerHarness();

    harness.start(active, duration, () => assert.fail("unexpected dismissal"));
    assert.equal(harness.scheduled.size, 0);
    assert.equal(harness.listeners.size, 0);
  }
});

test("backgrounding pauses the timer and foregrounding uses the remaining duration", () => {
  const harness = timerHarness();
  let closes = 0;

  harness.start(true, 4000, () => closes++);
  harness.advance(1500);
  harness.state("background");
  harness.advance(10000);
  assert.equal(closes, 0);
  harness.state("active");
  harness.advance(2499);
  assert.equal(closes, 0);
  harness.advance(1);
  assert.equal(closes, 1);
  harness.cleanup();
  assert.equal(harness.listeners.size, 0);
});

test("unmount cancels timers and listeners, including entries initially opened in background", () => {
  const harness = timerHarness("background");

  harness.start(true, 4000, () => assert.fail("dismissed after cleanup"));
  assert.equal(harness.scheduled.size, 0);
  harness.state("active");
  assert.equal(harness.scheduled.size, 1);
  harness.cleanup();
  harness.advance(5000);
  assert.equal(harness.scheduled.size, 0);
  assert.equal(harness.listeners.size, 0);
});

// Exercise transition ordering with hook slots and a controllable animation backend.
// These checks do not replace rendering in the native Storybook host.
function lifecycleHarness(initialOpen = true) {
  const slots = [];
  let cursor = 0,
    pending = [],
    result,
    timer;
  const events = [],
    animations = [],
    callbacks = [];
  let props = {
    id: "toast",
    open: initialOpen,
    onOpen: () => events.push("open"),
    onOpenFinished: () => events.push("entered"),
    onClose: () => events.push("close"),
    onCloseFinished: () => events.push("closed"),
  };
  const react = {
    useState(initial) {
      const index = cursor++;

      slots[index] ??= {
        value: typeof initial === "function" ? initial() : initial,
      };

      return [
        slots[index].value,
        (value) => {
          slots[index].value = value;
        },
      ];
    },
    useRef(initial) {
      const index = cursor++;

      slots[index] ??= { current: initial };

      return slots[index];
    },
    useEffect(effect, deps) {
      const index = cursor++;
      const old = slots[index];

      if (!old || deps.some((value, i) => !Object.is(value, old.deps[i]))) {
        pending.push(() => {
          old?.cleanup?.();

          slots[index] = { deps, effect, cleanup: effect() };
        });
      }
    },
  };
  const core = {
    useEventCallback(handler) {
      const index = cursor++;

      slots[index] ??= {
        handler,
        callback: (...args) => slots[index].handler(...args),
      };
      slots[index].handler = handler;

      return slots[index].callback;
    },
  };
  const reanimated = {
    useSharedValue(initial) {
      return react.useState(() => ({ value: initial }))[0];
    },
    cancelAnimation(value) {
      const animation = value.value;

      if (animation && !animation.stopped) {
        animation.stopped = true;

        animation.callback(false);
      }
    },
    withTiming(target, config, callback) {
      const animation = {
        target,
        config,
        callback,
        stopped: false,
        complete(flush = true) {
          if (!this.stopped) {
            this.callback(true);

            if (flush) {
              callbacks.splice(0).forEach((run) => run());
            }
          }
        },
      };

      animations.push(animation);

      return animation;
    },
  };
  const { useToastLifecycle } = loader({
    react,
    "react-native-reanimated": reanimated,
    "react-native-worklets": {
      scheduleOnRN: (callback, ...args) => {
        callbacks.push(() => callback(...args));
      },
    },
    "@impulse-ui-native/core": core,
    "@impulse-ui-native/overlay": {
      useOverlayContext: () => ({
        store: { close: (id) => events.push("request:" + id) },
      }),
    },
    "./use-toast-timer.hook": {
      useToastTimer: (active, duration, close) => {
        timer = { active, duration, close };
      },
    },
  })("hooks/use-toast-lifecycle.hook.ts");

  function render(next = {}) {
    props = { ...props, ...next };
    cursor = 0;
    pending = [];
    result = useToastLifecycle(props, 4000);

    pending.forEach((effect) => effect());

    return result;
  }

  return {
    render,
    events,
    animations,
    flushCallbacks() {
      callbacks.splice(0).forEach((run) => run());
    },
    unmount() {
      slots.forEach((slot) => slot?.cleanup?.());
    },
    get timer() {
      return timer;
    },
    replayEffects() {
      for (const slot of slots) {
        if (slot?.effect) {
          slot.cleanup?.();

          slot.cleanup = slot.effect();
        }
      }
    },
  };
}

test("rapid dismissal during entry cancels entry completion and still finishes exit", () => {
  const harness = lifecycleHarness();

  harness.render();
  assert.equal(harness.timer.active, false);
  harness.render({ open: false });
  harness.animations[0].complete();
  assert.equal(harness.events.includes("entered"), false);
  harness.animations[1].complete();
  assert.equal(harness.events.join(","), "open,close,closed");
  assert.equal(harness.render().finished, true);
});

test("closing before entry starts completes without an animation", () => {
  const harness = lifecycleHarness(false);

  harness.render();
  harness.render({ open: false });
  assert.equal(harness.animations.length, 0);
  assert.equal(harness.events.join(","), "close,closed");
});

test("entry completion starts duration counting; closing disables further interaction", () => {
  const harness = lifecycleHarness();

  harness.render();
  harness.animations[0].complete();
  harness.render();
  assert.equal(harness.timer.active, true);
  harness.timer.close();
  assert.equal(harness.events.at(-1), "request:toast");
  assert.equal(harness.render({ open: false }).interactive, false);
  assert.equal(harness.timer.active, false);
});

test("effect replay restarts the animation without duplicating lifecycle notifications", () => {
  const harness = lifecycleHarness();

  harness.render();
  harness.replayEffects();
  harness.animations[0].complete();
  harness.animations[1].complete();
  assert.equal(harness.events.join(","), "open,entered");
});

test("an interrupted exit resumes and notifies close once", () => {
  const harness = lifecycleHarness();

  harness.render();
  harness.animations[0].complete();
  harness.render();
  harness.render({ open: false });
  harness.replayEffects();
  harness.animations[1].complete();
  harness.animations[2].complete();
  assert.equal(harness.events.join(","), "open,entered,close,closed");
});

test("entry completion queued on the RN runtime is ignored after dismissal", () => {
  const harness = lifecycleHarness();

  harness.render();
  harness.animations[0].complete(false);
  harness.render({ open: false });
  harness.flushCallbacks();
  assert.equal(harness.events.join(","), "open,close");
  assert.equal(harness.timer.active, false);
  harness.animations[1].complete();
  assert.equal(harness.events.join(","), "open,close,closed");
});

test("unmount ignores queued entry and exit completions", () => {
  for (const exiting of [false, true]) {
    const harness = lifecycleHarness();

    harness.render();

    if (exiting) {
      harness.animations[0].complete();
      harness.render({ open: false });
    }

    harness.animations.at(-1).complete(false);
    const eventsBeforeUnmount = harness.events.join(",");

    harness.unmount();
    harness.flushCallbacks();
    assert.equal(harness.events.join(","), eventsBeforeUnmount);
  }
});

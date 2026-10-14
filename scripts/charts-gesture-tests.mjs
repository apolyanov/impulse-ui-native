import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

// Exercise real hook callbacks with queued RN scheduling. Gesture recognition
// and React rendering are simulated; these tests do not claim native UI coverage.
function createHarness() {
  const callbacks = {};
  const queue = [];
  const refs = [];
  let refIndex = 0;
  let selection = null;
  let dismissCount = 0;
  const targets = [
    {
      x: 30,
      y: 40,
      selection: { datumIndex: 0 },
      value: 1,
      color: "red",
      label: "A",
    },
    {
      x: 70,
      y: 40,
      selection: { datumIndex: 1 },
      value: 2,
      color: "blue",
      label: "B",
    },
  ];
  const plot = { x: 0, y: 0, width: 100, height: 100 };
  const pan = {};
  for (const name of [
    "enabled",
    "manualActivation",
    "maxPointers",
    "shouldCancelWhenOutside",
  ]) {
    pan[name] = () => pan;
  }
  for (const name of [
    "onTouchesDown",
    "onTouchesMove",
    "onTouchesUp",
    "onTouchesCancelled",
    "onUpdate",
    "onEnd",
    "onFinalize",
  ]) {
    pan[name] = (callback) => {
      callbacks[name] = callback;
      return pan;
    };
  }

  function load(file) {
    const exported = {};
    const source = ts.transpileModule(readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    function localRequire(name) {
      if (name === "react") {
        return {
          useMemo: (factory) => factory(),
          useRef: (value) => {
            const index = refIndex++;
            refs[index] ??= { current: value };
            return refs[index];
          },
        };
      }
      if (name === "@impulse-ui-native/core")
        return { useEventCallback: (handler) => handler };
      if (name === "react-native-gesture-handler")
        return { Gesture: { Pan: () => pan } };
      if (name === "react-native-worklets")
        return {
          scheduleOnRN: (handler, ...args) =>
            queue.push(() => handler(...args)),
        };
      if (name.startsWith("."))
        return load(resolve(dirname(file), name + ".ts"));
      return require(name);
    }
    runInNewContext(source, { exports: exported, require: localRequire });
    return exported;
  }

  const { useChartGesture } = load(
    resolve(root, "packages/charts/src/hooks/use-chart-gesture.hook.ts"),
  );
  const { findChartHitTarget } = load(
    resolve(root, "packages/charts/src/utils/chart-interaction.util.ts"),
  );

  function render() {
    refIndex = 0;
    useChartGesture({
      interactive: true,
      targets,
      plot,
      selectedTargets: targets.filter(
        (target) => target.selection === selection,
      ),
      clearSelection: () => {
        selection = null;
        dismissCount++;
        render();
      },
      selectAt: (point, data, rect, clearOnMiss) => {
        const target = findChartHitTarget(point, data, rect);
        if (target || clearOnMiss) {
          selection = target?.selection ?? null;
          render();
        }
        return target !== null;
      },
    });
  }

  function send(name, point = targets[0]) {
    callbacks[name]?.({ changedTouches: [point] }, { activate() {} });
    while (queue.length) queue.shift()();
  }

  function tap(point = targets[0]) {
    send("onTouchesDown", point);
    send("onTouchesUp", point);
    send("onFinalize");
  }

  render();
  return {
    send,
    tap,
    targets,
    selected: () => selection,
    dismissCount: () => dismissCount,
  };
}

test("pointer-only clicks select, dismiss the same point, and select again", () => {
  const chart = createHarness();
  chart.tap();
  assert.equal(chart.selected(), chart.targets[0].selection);
  chart.tap();
  assert.equal(chart.selected(), null);
  assert.equal(chart.dismissCount(), 1);
  chart.tap();
  assert.equal(chart.selected(), chart.targets[0].selection);
});

test("dragging away and back preserves selection without a pan-end callback", () => {
  const chart = createHarness();
  chart.tap();
  chart.send("onTouchesDown");
  chart.send("onTouchesMove", chart.targets[1]);
  chart.send("onTouchesMove", chart.targets[0]);
  chart.send("onTouchesUp");
  chart.send("onFinalize");
  assert.equal(chart.selected(), chart.targets[0].selection);
  assert.equal(chart.dismissCount(), 0);
});

test("an empty pointer-only tap clears a previous selection", () => {
  const chart = createHarness();
  chart.tap();
  chart.tap({ x: -10, y: -10 });
  assert.equal(chart.selected(), null);
});

test("cancelled touches do not dismiss the selected point", () => {
  const chart = createHarness();
  chart.tap();
  chart.send("onTouchesDown");
  chart.send("onTouchesCancelled");
  chart.send("onFinalize");
  assert.equal(chart.selected(), chart.targets[0].selection);
  assert.equal(chart.dismissCount(), 0);
  chart.tap();
  assert.equal(chart.selected(), null);
});

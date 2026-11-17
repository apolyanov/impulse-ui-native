import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInThisContext } from "node:vm";
import React from "react";
import ts from "typescript";

import { createRenderer } from "./helpers/react-renderer.mjs";

function load(path, imports) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const exports = {};
  const execute = runInThisContext(
    `(function(exports, require) { ${outputText}\n })`,
  );
  execute(exports, (name) => {
    assert.ok(Object.hasOwn(imports, name), `Unexpected import: ${name}`);
    return imports[name];
  });
  return exports;
}

const utils = load("../packages/core/src/utils/hook.utils.ts", {});
const controllable = load(
  "../packages/core/src/hooks/use-controllable-state.hook.ts",
  { react: React, "../utils": utils },
);
const { useAsyncControllableState } = load(
  "../packages/core/src/hooks/use-async-controllable-state.hook.ts",
  { react: React, "./use-controllable-state.hook": controllable },
);

function createHarness() {
  const render = createRenderer();
  let result;
  const history = [];
  function Consumer(props) {
    result = useAsyncControllableState(props);
    history.push(result.state);
    return null;
  }
  return {
    history,
    update(props) {
      render(React.createElement(Consumer, props));
      render(React.createElement(Consumer, props));
      return result;
    },
    unmount() {
      render(null);
    },
  };
}

test("initialProp waits for data, initializes after render once, and notifies onChange", () => {
  const harness = createHarness();
  const changes = [];
  const onChange = (value) => changes.push(value);
  assert.equal(
    harness.update({ initialProp: undefined, onChange }).state,
    undefined,
  );
  assert.equal(harness.update({ initialProp: "Alex", onChange }).state, "Alex");
  assert.equal(harness.update({ initialProp: "Sam", onChange }).state, "Alex");
  assert.deepEqual(changes, ["Alex"]);
  harness.unmount();
});

test("initialProp accepts falsy values and null", () => {
  for (const initialProp of [false, 0, "", null]) {
    const harness = createHarness();
    assert.equal(harness.update({ initialProp }).state, initialProp);
    assert.equal(harness.history[0], undefined);
    harness.unmount();
  }
});

test("defaults and supplied controlled props block async initialization", () => {
  const harness = createHarness();
  const changes = [];
  assert.equal(
    harness.update({
      defaultProp: 0,
      initialProp: 1,
      onChange: (value) => changes.push(value),
    }).state,
    0,
  );
  assert.deepEqual(changes, []);
  harness.unmount();

  const controlled = createHarness();
  controlled.update({});
  assert.equal(
    controlled.update({
      prop: "parent",
      initialProp: "async",
      onChange: (value) => changes.push(value),
    }).state,
    "parent",
  );
  controlled.update({ initialProp: "later" });
  assert.deepEqual(changes, []);
  controlled.unmount();
});

test("user edits and explicit clearing block a later initialProp", () => {
  for (const value of ["user", null]) {
    const harness = createHarness();
    const result = harness.update({});
    result.setState(value);
    assert.equal(harness.update({ initialProp: "async" }).state, value);
    harness.unmount();
  }
});

test("manual and prop initialization share one guard", () => {
  const manual = createHarness();
  manual.update({}).onInitialLoad("manual");
  assert.equal(manual.update({ initialProp: "async" }).state, "manual");
  manual.unmount();

  const automatic = createHarness();
  automatic.update({ initialProp: "async" }).onInitialLoad("manual");
  assert.equal(automatic.update({ initialProp: "later" }).state, "async");
  automatic.unmount();
});

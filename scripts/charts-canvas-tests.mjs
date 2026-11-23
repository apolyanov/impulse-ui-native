import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { test } from "node:test";
import { runInThisContext } from "node:vm";
import React from "react";
import ts from "typescript";

import { createRenderer } from "./helpers/react-renderer.mjs";

const requireCharts = createRequire(
  new URL("../packages/charts/package.json", import.meta.url),
);
const skiaRoot = path.dirname(
  requireCharts.resolve("react-native-skia/package.json"),
);
const canvasPath = path.join(skiaRoot, "src/renderer/Canvas.tsx");
const canvasSource = ts.createSourceFile(
  canvasPath,
  readFileSync(canvasPath, "utf8"),
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX,
);
const sizingDeclaration = canvasSource.statements
  .filter(ts.isVariableStatement)
  .flatMap((statement) => statement.declarationList.declarations)
  .find(
    (declaration) => declaration.name.getText(canvasSource) === "useCanvasSize",
  );
assert(
  sizingDeclaration?.initializer,
  "Skia must expose its layout-driven size hook",
);

// Exercise the installed upstream hook without loading its native renderer.
const sizingCode = ts.transpileModule(
  `const useCanvasSize = ${sizingDeclaration.initializer.getText(canvasSource)};`,
  { compilerOptions: { target: ts.ScriptTarget.ES2022 } },
).outputText;
const useCanvasSize = runInThisContext(
  `(function(hooks) { const {useState, useCallback} = hooks; ${sizingCode}\n return useCanvasSize; })`,
)(React);
const hookCode = ts.transpileModule(
  readFileSync(
    new URL(
      "../packages/charts/src/hooks/use-chart-canvas.hook.ts",
      import.meta.url,
    ),
    "utf8",
  ),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const hookExports = {};
runInThisContext(`(function(exports, require) { ${hookCode}\n })`)(
  hookExports,
  (name) => {
    if (name === "react") {
      return React;
    }

    assert.equal(name, "react-native-skia");

    return {
      useCanvasSize,
      useCanvasRef: () => React.useRef(null),
    };
  },
);

function createHarness() {
  const render = createRenderer();
  let canvas;

  function Consumer() {
    canvas = hookExports.useChartCanvas();
    return null;
  }

  const update = () => render(React.createElement(Consumer));
  update();

  return {
    get canvas() {
      return canvas;
    },
    layout(width, height) {
      canvas.onLayout({ nativeEvent: { layout: { width, height } } });
      update();
    },
    unmount() {
      render(null);
    },
  };
}

test("Skia 3 chart canvas measures initial layout and follows resizes", () => {
  const harness = createHarness();

  try {
    assert.deepEqual(harness.canvas.size, { width: 0, height: 0 });
    const ref = harness.canvas.ref;
    harness.layout(320, 180);
    assert.deepEqual(harness.canvas.size, { width: 320, height: 180 });
    harness.layout(640, 240);
    assert.deepEqual(harness.canvas.size, { width: 640, height: 240 });
    harness.layout(0, 0);
    assert.deepEqual(harness.canvas.size, { width: 0, height: 0 });
    assert.equal(harness.canvas.ref, ref);
  } finally {
    harness.unmount();
  }
});

test("repeated canvas dimensions preserve the frame inputs and layout handler", () => {
  const harness = createHarness();

  try {
    harness.layout(320, 180);
    const previous = harness.canvas;
    harness.layout(320, 180);
    assert.equal(harness.canvas, previous);
    assert.equal(harness.canvas.onLayout, previous.onLayout);
  } finally {
    harness.unmount();
  }
});

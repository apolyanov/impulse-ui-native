import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import ts from "typescript";

import { createRenderer } from "./helpers/react-renderer.mjs";

// Real Input and Control.Input reconciliation with a stubbed native TextInput.
// Verifies ref plumbing and cleanup; keyboard behavior requires a native device.
function createHarness() {
  let focusCount = 0;
  const nativeInput = { focus: () => focusCount++ };
  const NativeInput = React.forwardRef(function NativeInput(_props, ref) {
    React.useImperativeHandle(ref, () => nativeInput, []);

    return null;
  });
  const wrapper = ({ children }) => children;
  const fieldState = { iconColor: "black" };
  const theme = {
    useComponentsTokens: () => ({}),
    getFieldStateTokens: () => fieldState,
    useStyleProps: () => ({}),
    useThemedStyles: () => ({ input: {}, placeholder: { color: "gray" } }),
  };
  const mocks = {
    react: React,
    "react/jsx-runtime": jsxRuntime,
    "react-native": {
      TextInput: NativeInput,
      StyleSheet: { create: (v) => v },
    },
    "@impulse-ui-native/core": { useEventCallback: (callback) => callback },
    "@impulse-ui-native/theme": theme,
    "@impulse-ui-native/icon": { Icon: () => null },
    "@impulse-ui-native/icon/icons/eye": { EyeIcon: () => null },
    "@impulse-ui-native/icon/icons/eye-slash": { EyeSlashIcon: () => null },
    "../../hooks/use-control-context.hook": {
      useControlContext: () => ({ size: "medium", variant: "outlined" }),
    },
  };

  function load(relativePath) {
    const source = readFileSync(
      new URL(`../${relativePath}`, import.meta.url),
      "utf8",
    );
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    });
    const exports = {};

    runInNewContext(outputText, {
      exports,
      require(name) {
        assert.ok(Object.hasOwn(mocks, name), `Unexpected import: ${name}`);

        return mocks[name];
      },
    });

    return exports;
  }

  const { ControlInput } = load(
    "packages/primitives/src/components/controls/input.tsx",
  );
  const appearances = {
    neutral: { outlined: {} },
  };
  theme.useComponentsTokens = () => ({ controlAddon: { colors: appearances } });
  mocks["@impulse-ui-native/primitives"] = {
    Control: {
      Provider: wrapper,
      Root: wrapper,
      Label: wrapper,
      Container: wrapper,
      Error: wrapper,
      Input: ControlInput,
    },
  };
  const { Input } = load("packages/input/src/components/input.tsx");

  return { Input, ControlInput, nativeInput, getFocusCount: () => focusCount };
}

for (const componentName of ["Input", "ControlInput"]) {
  test(`${componentName} exposes the native instance through an object ref`, () => {
    const harness = createHarness();
    const render = createRenderer();
    const ref = React.createRef();
    const Component = harness[componentName];

    render(React.createElement(Component, { ref }));
    assert.equal(ref.current, harness.nativeInput);
    ref.current.focus();
    assert.equal(harness.getFocusCount(), 1);

    render(React.createElement(Component, { ref, error: "Required" }));
    assert.equal(ref.current, harness.nativeInput);

    render(null);
    assert.equal(ref.current, null);
  });

  test(`${componentName} attaches, replaces, and clears callback refs`, () => {
    const harness = createHarness();
    const render = createRenderer();
    const calls = [];
    const nextCalls = [];
    const ref = (instance) => {
      calls.push(instance);
    };
    const nextRef = (instance) => {
      nextCalls.push(instance);
    };
    const Component = harness[componentName];

    render(React.createElement(Component, { ref }));
    assert.deepEqual(calls, [harness.nativeInput]);
    calls[0].focus();
    assert.equal(harness.getFocusCount(), 1);

    render(React.createElement(Component, { ref: nextRef }));
    assert.deepEqual(calls, [harness.nativeInput, null]);
    assert.deepEqual(nextCalls, [harness.nativeInput]);

    render(null);
    assert.deepEqual(nextCalls, [harness.nativeInput, null]);
  });
}

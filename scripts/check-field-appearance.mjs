import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const cache = new Map();
function loadSource(relativePath) {
  if (cache.has(relativePath)) return cache.get(relativePath);
  const filename = path.join(root, relativePath);
  const exports = {};
  cache.set(relativePath, exports);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const require = (specifier) => {
    if (specifier === "react-native")
      return { StyleSheet: { create: (styles) => styles } };
    if (specifier === "@impulse-ui-native/theme")
      return loadSource("packages/theme/src/utils/field-state.utils.ts");
    return {};
  };
  vm.runInNewContext(outputText, { exports, require });
  return exports;
}
const scales = loadSource("packages/theme/src/theme/tokens.theme.ts");
const factories = loadSource(
  "packages/theme/src/theme/create-control-tokens.ts",
);
const { getFieldStateTokens } = loadSource(
  "packages/theme/src/utils/field-state.utils.ts",
);
const { controlContainerStyles } = loadSource(
  "packages/primitives/src/components/controls/container.styles.ts",
);
let checked = 0;
for (const scheme of ["Light", "Dark"]) {
  const primitive = {
    colors: scales[`${scheme}Colors`],
    space: scales.SpaceTokens,
    radii: scales.RadiiTokens,
    borderSize: scales.BorderSizeTokens,
    fontSize: scales.FontSizeTokens,
    fontFamily: scales.FontFamilyTokens,
  };
  const container = factories.createControlContainerTokens(primitive);
  const input = factories.createControlInputTokens(primitive);
  const addon = factories.createControlAddonTokens(primitive);
  const theme = { components: { controlContainer: container } };
  assert.deepEqual(Object.keys(container.colors).sort(), [
    "neutral",
    "primary",
    "secondary",
  ]);
  for (const tone of ["neutral", "primary", "secondary"]) {
    assert.deepEqual(Object.keys(container.colors[tone]).sort(), [
      "filled",
      "outlined",
      "soft",
    ]);
    for (const variant of ["outlined", "soft", "filled"]) {
      const appearances = container.colors[tone][variant];
      const resting = controlContainerStyles(theme, {
        size: "medium",
        tone,
        variant,
      }).inputContainer;
      for (const disabled of [false, true]) {
        for (const error of [false, true]) {
          const state = { disabled, error };
          const visual = getFieldStateTokens(appearances, state);
          const styles = controlContainerStyles(theme, {
            size: "medium",
            tone,
            variant,
            disabled,
            error: error ? "Invalid" : undefined,
          }).inputContainer;
          assert.equal(styles.backgroundColor, visual.backgroundColor);
          assert.equal(styles.borderColor, visual.borderColor);
          if (disabled) {
            assert.deepEqual(
              visual,
              container.colors.neutral[variant].disabled,
            );
            assert.deepEqual(
              getFieldStateTokens(input.colors[tone][variant], state),
              input.colors.neutral[variant].disabled,
            );
            assert.deepEqual(
              getFieldStateTokens(addon.colors[tone][variant], state),
              addon.colors.neutral[variant].disabled,
            );
            assert.equal(styles.borderWidth, resting.borderWidth);
          }
          if (error && !disabled) {
            assert.equal(
              visual.borderColor,
              primitive.colors.feedback.error.value,
            );
          }
          if (variant === "filled" && !disabled) {
            assert.equal(
              getFieldStateTokens(input.colors[tone][variant], state).color,
              getFieldStateTokens(addon.colors[tone][variant], state).iconColor,
            );
            assert.notEqual(visual.backgroundColor, "transparent");
          }
          checked++;
        }
      }
    }
  }
  const customized = {
    ...primitive,
    colors: {
      ...primitive.colors,
      primary: { value: "#123456", contrast: "#ffffff" },
    },
  };
  assert.equal(
    factories.createControlContainerTokens(customized).colors.primary.filled
      .default.backgroundColor,
    "#123456",
  );
  assert.equal(
    factories.createControlInputTokens(customized).colors.primary.filled.default
      .color,
    "#ffffff",
  );
}
console.log(
  `Passed ${checked} light/dark field appearance and state combinations, disabled precedence, and custom primary palette checks. Native rendering is not covered.`,
);

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
function loadSource(relativePath) {
  const exports = {};
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  vm.runInNewContext(outputText, { exports, require: () => ({}) });
  return exports;
}
const scales = loadSource("packages/theme/src/theme/tokens.theme.ts");
const { createButtonTokens } = loadSource(
  "packages/theme/src/theme/create-button-tokens.ts",
);
const { createIconButtonTokens } = loadSource(
  "packages/theme/src/theme/create-icon-button-tokens.ts",
);
const { getActionStateTokens } = loadSource(
  "packages/theme/src/utils/action-state.utils.ts",
);
let checked = 0;
for (const scheme of ["Light", "Dark"]) {
  const tokens = {
    colors: scales[`${scheme}Colors`],
    radii: scales.RadiiTokens,
    borderSize: scales.BorderSizeTokens,
    fontSize: scales.FontSizeTokens,
  };
  const button = createButtonTokens(tokens);
  const iconButton = createIconButtonTokens(tokens);
  assert.deepEqual(Object.keys(button.colors).sort(), [
    "neutral",
    "primary",
    "secondary",
  ]);
  assert.equal(
    JSON.stringify(button.colors),
    JSON.stringify(iconButton.colors),
  );
  for (const tone of ["neutral", "primary", "secondary"]) {
    assert.deepEqual(Object.keys(button.colors[tone]).sort(), [
      "filled",
      "ghost",
      "outlined",
      "soft",
    ]);
    for (const variant of ["filled", "outlined", "soft", "ghost"]) {
      const appearances = button.colors[tone][variant];
      assert.deepEqual(appearances.loading, appearances.default);
      assert.deepEqual(
        appearances.disabled,
        button.colors.primary[variant].disabled,
      );
      for (const disabled of [false, true]) {
        for (const loading of [false, true]) {
          const actual = getActionStateTokens(appearances, {
            disabled,
            loading,
          });
          assert.equal(
            actual,
            disabled
              ? appearances.disabled
              : loading
                ? appearances.loading
                : appearances.default,
          );
          assert.equal(typeof actual.color, "string");
          assert.notEqual(actual.color, actual.backgroundColor);
          if (!disabled && (variant === "outlined" || variant === "ghost")) {
            assert.equal(actual.backgroundColor, "transparent");
          }
          checked++;
        }
      }
    }
  }
  for (const factory of [createButtonTokens, createIconButtonTokens]) {
    const custom = factory({
      ...tokens,
      colors: {
        ...tokens.colors,
        primary: { value: "#123456", contrast: "#abcdef" },
        secondary: { value: "#654321", contrast: "#fedcba" },
        subtle: { value: "#112233", contrast: "#445566" },
      },
    });
    assert.equal(
      custom.colors.primary.filled.default.backgroundColor,
      "#123456",
    );
    assert.equal(custom.colors.primary.filled.default.color, "#abcdef");
    assert.equal(custom.colors.primary.soft.default.backgroundColor, "#654321");
    assert.equal(custom.colors.secondary.outlined.default.color, "#fedcba");
    assert.equal(
      custom.colors.secondary.soft.default.backgroundColor,
      "#112233",
    );
    assert.equal(
      JSON.stringify(custom.colors.neutral),
      JSON.stringify(button.colors.neutral),
    );
  }
}
console.log(
  `Passed ${checked} light/dark button appearance and state combinations, Button/IconButton palette parity, disabled precedence, and custom brand palette checks. Native interaction is not covered.`,
);

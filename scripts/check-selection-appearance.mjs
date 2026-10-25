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
  const exports = {};
  cache.set(relativePath, exports);
  const filename = path.join(root, relativePath);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const require = (specifier) => {
    if (
      specifier === "./selection-state.utils" ||
      specifier === "./control-state.utils"
    ) {
      return loadSource(
        path.relative(
          root,
          path.resolve(path.dirname(filename), `${specifier}.ts`),
        ),
      );
    }
    return {};
  };
  vm.runInNewContext(outputText, { exports, require });
  return exports;
}
const normalize = (value) => JSON.parse(JSON.stringify(value));
const scales = loadSource("packages/theme/src/theme/tokens.theme.ts");
const { getSegmentedControlItemTokens } = loadSource(
  "packages/theme/src/utils/segmented-control-state.utils.ts",
);
const { getSliderTrackTokens } = loadSource(
  "packages/theme/src/utils/slider-tokens.utils.ts",
);
const factories = Object.fromEntries(
  [
    "avatar",
    "tag",
    "checkbox",
    "radio",
    "switch",
    "segmented-control",
    "slider",
  ].map((name) => {
    const exports = loadSource(
      `packages/theme/src/theme/create-${name}-tokens.ts`,
    );
    return [name, Object.values(exports)[0]];
  }),
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
    fontWeight: scales.FontWeightTokens,
  };
  for (const [name, factory] of Object.entries(factories)) {
    const tokens = factory(primitive);
    const tones =
      name === "tag"
        ? [
            "neutral",
            "primary",
            "secondary",
            "error",
            "warning",
            "success",
            "info",
          ]
        : ["neutral", "primary", "secondary"];
    assert.deepEqual(Object.keys(tokens.colors).sort(), tones.toSorted());
    for (const tone of tones) {
      assert.deepEqual(Object.keys(tokens.colors[tone]).sort(), [
        "filled",
        "outlined",
        "soft",
      ]);
      for (const variant of ["filled", "outlined", "soft"]) {
        const appearance = tokens.colors[tone][variant];
        if (name === "avatar") {
          assert.equal(typeof appearance.color, "string");
          assert.equal(
            tokens.statusColors.online,
            primitive.colors.feedback.success.value,
          );
        } else if (name === "segmented-control") {
          for (const disabled of [false, true]) {
            for (const selected of [false, true]) {
              const stateName = disabled
                ? selected
                  ? "disabledSelected"
                  : "disabledUnselected"
                : selected
                  ? "selected"
                  : "unselected";
              const actual = getSegmentedControlItemTokens(tokens, {
                disabled,
                selected,
                tone,
                variant,
                size: "medium",
                layout: "stacked",
              });
              assert.equal(actual.color, appearance.states[stateName].color);
              assert.equal(actual.height, tokens.sizes.medium.height);
              assert.equal(actual.flexDirection, "column");
              if (
                tone === "neutral" &&
                variant === "soft" &&
                selected &&
                !disabled
              ) {
                assert.notEqual(
                  actual.backgroundColor,
                  tokens.rootBackgroundColor,
                );
              }
              if (disabled)
                assert.deepEqual(
                  appearance.states[stateName],
                  tokens.colors.primary[variant].states[stateName],
                );
              checked++;
            }
          }
        } else if (name === "checkbox" || name === "radio") {
          for (const state of [
            "unselected",
            "selected",
            "disabledUnselected",
            "disabledSelected",
          ]) {
            assert.equal(typeof appearance[state].color, "string");
            if (state.startsWith("disabled"))
              assert.deepEqual(
                appearance[state],
                tokens.colors.primary[variant][state],
              );
            checked++;
          }
        } else {
          assert.deepEqual(
            appearance.disabled,
            tokens.colors.primary[variant].disabled,
          );
          if (name === "slider") {
            for (const disabled of [false, true]) {
              const actual = getSliderTrackTokens(tokens, {
                tone,
                variant,
                disabled,
                size: "large",
                layout: "valueBubble",
              });
              const expected = disabled
                ? appearance.disabled
                : appearance.default;
              assert.equal(actual.activeTrackColor, expected.activeTrackColor);
              assert.notEqual(
                expected.activeMarkColor,
                expected.activeTrackColor,
              );
              assert.equal(actual.valueBubbleColor, expected.valueBubbleColor);
              assert.equal(actual.thumbSize, tokens.sizes.large.thumbSize);
              assert.equal(
                actual.reservedVerticalSpace,
                tokens.layouts.valueBubble.reservedVerticalSpace,
              );
              checked++;
            }
          }
        }
        checked++;
      }
    }
    const customPrimitive = {
      ...primitive,
      colors: {
        ...primitive.colors,
        primary: { value: "#123456", contrast: "#abcdef" },
        secondary: { value: "#654321", contrast: "#fedcba" },
        subtle: { value: "#112233", contrast: "#445566" },
      },
    };
    const custom = factory(customPrimitive);
    assert.deepEqual(
      normalize(custom.colors.neutral),
      normalize(tokens.colors.neutral),
    );
    assert.notDeepEqual(
      normalize(custom.colors.primary),
      normalize(tokens.colors.primary),
    );
    assert.notDeepEqual(
      normalize(custom.colors.secondary),
      normalize(tokens.colors.secondary),
    );
    if (name === "tag") {
      for (const feedback of ["error", "warning", "success", "info"]) {
        assert.deepEqual(
          normalize(custom.colors[feedback]),
          normalize(tokens.colors[feedback]),
        );
      }
    }
  }
}
console.log(
  `Passed ${checked} light/dark selection/display appearance checks, disabled palette consistency, token resolver propagation, custom brand palettes, and Tag feedback stability. Native interactions are not covered.`,
);

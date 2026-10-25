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
      specifier === "./create-badge-tokens" ||
      specifier === "./create-icon-button-tokens"
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
const names = [
  "button",
  "icon-button",
  "badge",
  "icon-view",
  "tag",
  "avatar",
  "checkbox",
  "radio",
  "switch",
  "segmented-control",
  "slider",
];
const factories = Object.fromEntries(
  names.map((name) => [
    name,
    Object.values(
      loadSource(`packages/theme/src/theme/create-${name}-tokens.ts`),
    )[0],
  ]),
);
const controls = loadSource(
  "packages/theme/src/theme/create-control-tokens.ts",
);
let checked = 0;
for (const scheme of ["Light", "Dark"]) {
  const base = {
    colors: scales[`${scheme}Colors`],
    space: scales.SpaceTokens,
    radii: scales.RadiiTokens,
    borderSize: scales.BorderSizeTokens,
    fontSize: scales.FontSizeTokens,
    fontFamily: scales.FontFamilyTokens,
    fontWeight: scales.FontWeightTokens,
    lineHeight: scales.LineHeightTokens,
  };
  // Deliberately distinct values expose incorrect semantic aliases even when
  // the default dark palette gives primary.value and secondary.contrast the same hex.
  const custom = {
    ...base,
    colors: {
      ...base.colors,
      primary: { value: "#123456", contrast: "#abcdef" },
      secondary: { value: "#654321", contrast: "#fedcba" },
      subtle: { value: "#112233", contrast: "#445566" },
    },
  };
  for (const primitive of [base, custom]) {
    const components = Object.fromEntries(
      Object.entries(factories).map(([name, factory]) => [
        name,
        factory(primitive),
      ]),
    );
    const container = controls.createControlContainerTokens(primitive);
    const addon = controls.createControlAddonTokens(primitive);
    for (const tone of ["neutral", "primary", "secondary"]) {
      for (const variant of ["filled", "outlined", "soft"]) {
        const reference = components.button.colors[tone][variant].default;
        for (const name of [
          "badge",
          "icon-view",
          "avatar",
          "icon-button",
          "tag",
          "checkbox",
          "radio",
        ]) {
          const palette = components[name].colors[tone][variant];
          const appearance = palette.default ?? palette.selected ?? palette;
          assert.deepEqual(
            normalize(appearance),
            normalize(reference),
            `${scheme} ${name} ${tone}/${variant}`,
          );
          checked++;
        }
        const selection =
          components["segmented-control"].colors[tone][variant].states.selected;
        assert.equal(selection.color, reference.color);
        const toggle = components.switch.colors[tone][variant].default;
        assert.equal(toggle.activeThumbColor, reference.color);
        assert.equal(toggle.activeBackgroundColor, reference.backgroundColor);
        const slider = components.slider.colors[tone][variant].default;
        assert.equal(slider.valueBubbleColor, reference.color);
        if (variant !== "outlined")
          assert.equal(slider.activeTrackColor, reference.backgroundColor);
        assert.equal(
          container.colors[tone][variant].default.backgroundColor,
          reference.backgroundColor,
        );
        assert.equal(
          addon.colors[tone][variant].default.iconColor,
          reference.color,
        );
        checked++;
      }
    }
    for (const tone of ["error", "warning", "success", "info"]) {
      for (const variant of ["filled", "outlined", "soft"]) {
        assert.deepEqual(
          normalize(components.badge.colors[tone][variant]),
          normalize(components.tag.colors[tone][variant].default),
        );
        assert.deepEqual(
          normalize(components["icon-view"].colors[tone][variant]),
          normalize(components.badge.colors[tone][variant]),
        );
        checked++;
      }
    }
  }
}
console.log(
  `Passed ${checked} cross-component palette comparisons in light/dark and custom themes, including feedback palettes and field addon foregrounds.`,
);

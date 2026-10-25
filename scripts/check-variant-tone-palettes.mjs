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
const additionalFactories = Object.fromEntries(
  [
    "progress",
    "spinner",
    "tabs",
    "pagination",
    "carousel",
    "stepper",
    "select",
    "data-state",
    "color-picker",
    "toast",
    "divider",
    "time-picker",
  ].map((name) => [
    name,
    Object.values(
      loadSource(`packages/theme/src/theme/create-${name}-tokens.ts`),
    )[0],
  ]),
);
const { createDatetimePickerTokens } = loadSource(
  "packages/theme/src/theme/create-datetime-picker.ts",
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
        assert.deepEqual(
          normalize(selection),
          normalize(reference),
          `${scheme} selected segment ${tone}/${variant}`,
        );
        const toggle = components.switch.colors[tone][variant].default;
        assert.equal(
          toggle.inactiveBackgroundColor,
          primitive.colors.surface.subtle.value,
        );
        assert.equal(
          toggle.inactiveBorderColor,
          primitive.colors.border.strong.value,
        );
        assert.deepEqual(
          {
            backgroundColor: toggle.activeBackgroundColor,
            borderColor: toggle.activeBorderColor,
            color: toggle.activeThumbColor,
          },
          normalize(reference),
          `${scheme} active switch ${tone}/${variant}`,
        );
        const slider = components.slider.colors[tone][variant].default;
        assert.equal(
          slider.inactiveTrackColor,
          primitive.colors.border.subtle.value,
        );
        assert.deepEqual(
          normalize(components.slider.colors[tone][variant].focused),
          normalize(slider),
        );
        const labelVariant = variant === "soft" ? "soft" : "outlined";
        assert.equal(
          slider.labelColor,
          components.button.colors[tone][labelVariant].default.color,
        );
        assert.deepEqual(
          {
            backgroundColor: slider.thumbBackgroundColor,
            borderColor: slider.thumbBorderColor,
            color:
              variant === "outlined"
                ? slider.labelColor
                : slider.thumbHighlightColor,
          },
          normalize(reference),
          `${scheme} slider thumb ${tone}/${variant}`,
        );
        assert.deepEqual(
          {
            backgroundColor: slider.valueBubbleBackgroundColor,
            borderColor: slider.valueBubbleBorderColor,
            color: slider.valueBubbleColor,
          },
          normalize(reference),
          `${scheme} slider bubble ${tone}/${variant}`,
        );
        assert.equal(
          slider.activeTrackColor,
          variant === "outlined"
            ? reference.borderColor
            : reference.backgroundColor,
        );
        const field = container.colors[tone][variant].default;
        assert.equal(field.backgroundColor, reference.backgroundColor);
        assert.equal(field.borderColor, reference.borderColor);
        assert.equal(
          addon.colors[tone][variant].default.iconColor,
          reference.color,
        );
        for (const name of [
          "icon-button",
          "tag",
          "checkbox",
          "radio",
          "segmented-control",
          "switch",
          "slider",
          "field",
        ]) {
          const disabledReference =
            components.button.colors[tone][variant].disabled;
          const palette =
            name === "field"
              ? container.colors[tone][variant]
              : components[name].colors[tone][variant];
          const disabled =
            palette.disabled ??
            palette.disabledSelected ??
            palette.states?.disabledSelected;
          if (name === "field") {
            assert.equal(
              disabled.backgroundColor,
              disabledReference.backgroundColor,
            );
            assert.equal(disabled.borderColor, disabledReference.borderColor);
          } else if (name === "switch") {
            assert.equal(
              disabled.inactiveBackgroundColor,
              primitive.colors.surface.subtle.value,
            );
            assert.equal(
              disabled.inactiveBorderColor,
              primitive.colors.border.default.value,
            );
            assert.deepEqual(
              {
                backgroundColor: disabled.activeBackgroundColor,
                borderColor: disabled.activeBorderColor,
                color: disabled.activeThumbColor,
              },
              normalize(disabledReference),
            );
          } else if (name === "slider") {
            assert.equal(
              disabled.inactiveTrackColor,
              primitive.colors.border.subtle.value,
            );
            assert.deepEqual(
              {
                backgroundColor: disabled.thumbBackgroundColor,
                borderColor: disabled.thumbBorderColor,
                color: disabled.valueBubbleColor,
              },
              normalize(disabledReference),
            );
            assert.deepEqual(
              {
                backgroundColor: disabled.valueBubbleBackgroundColor,
                borderColor: disabled.valueBubbleBorderColor,
                color: disabled.valueBubbleColor,
              },
              normalize(disabledReference),
            );
          } else {
            assert.deepEqual(
              normalize(disabled),
              normalize(disabledReference),
              `${scheme} disabled ${name} ${tone}/${variant}`,
            );
          }
          checked++;
        }
        checked++;
      }
    }
    const extra = Object.fromEntries(
      Object.entries(additionalFactories).map(([name, factory]) => [
        name,
        factory(primitive),
      ]),
    );
    const calendar = createDatetimePickerTokens(primitive);
    for (const tone of ["neutral", "primary", "secondary"]) {
      const accent = components.button.colors[tone].outlined.default.color;
      const filled = components.button.colors[tone].filled.default;
      const soft = components.button.colors[tone].soft.default;
      assert.equal(extra.spinner.colors[tone], accent);
      assert.equal(extra.progress.colors[tone].indicatorColor, accent);
      const track =
        tone === "primary"
          ? primitive.colors.secondary.value
          : tone === "secondary"
            ? primitive.colors.subtle.value
            : primitive.colors.surface.subtle.value;
      assert.equal(extra.progress.colors[tone].trackColor, track);
      assert.equal(extra.tabs.colors[tone].selected.color, accent);
      assert.equal(extra.tabs.colors[tone].selected.indicatorColor, accent);
      assert.equal(
        extra.tabs.colors[tone].disabledSelected.color,
        primitive.colors.text.disabled,
      );
      const page = extra.pagination.colors[tone].current;
      assert.deepEqual(
        {
          backgroundColor: page.backgroundColor,
          borderColor: page.borderColor,
          color: page.color,
        },
        normalize(filled),
      );
      const unavailable = extra.pagination.colors[tone].disabled;
      const expectedUnavailable =
        components.button.colors[tone].filled.disabled;
      assert.deepEqual(
        {
          backgroundColor: unavailable.backgroundColor,
          borderColor: unavailable.borderColor,
          color: unavailable.color,
        },
        normalize(expectedUnavailable),
      );
      assert.equal(
        extra.carousel.indicator.colors[tone].selected.backgroundColor,
        accent,
      );
      assert.equal(
        extra.carousel.indicator.colors[tone].disabledSelected.backgroundColor,
        primitive.colors.text.disabled,
      );
      assert.equal(
        extra.stepper.navigation.colors[tone].itemBackgroundColor,
        accent,
      );
      assert.equal(extra["data-state"].details.colors[tone].iconColor, accent);
      assert.equal(
        extra["color-picker"].colors[tone].selectedBorderColor,
        accent,
      );
      assert.equal(extra.divider.colors[tone], accent);
      const option = extra.select.option.colors[tone];
      assert.equal(option.selected.iconColor, accent);
      assert.equal(option.selected.iconOpacity, 1);
      assert.equal(option.unselected.iconOpacity, 0);
      assert.equal(
        option.disabledSelected.iconColor,
        primitive.colors.text.disabled,
      );
      assert.equal(option.disabledSelected.iconOpacity, 1);
      assert.equal(option.disabledUnselected.iconOpacity, 0);
      const day = calendar.day.colors[tone];
      assert.deepEqual(normalize(day.selected), {
        backgroundColor: filled.backgroundColor,
        color: filled.color,
      });
      assert.deepEqual(normalize(day.range), {
        backgroundColor: soft.backgroundColor,
        color: soft.color,
      });
      assert.equal(calendar.flyoutActions.colors[tone].clearColor, accent);
      assert.equal(
        extra["time-picker"].column.colors[tone].selected.color,
        accent,
      );
      checked += 13;
    }
    assert.equal(
      extra.progress.colors.inverse.indicatorColor,
      primitive.colors.text.inverse,
    );
    assert.equal(extra.spinner.colors.inverse, primitive.colors.text.inverse);
    for (const tone of ["error", "warning", "success", "info"]) {
      assert.equal(
        extra.toast.tones[tone].value,
        primitive.colors.feedback[tone].value,
      );
      assert.equal(
        extra.toast.tones[tone].actionColor,
        primitive.colors.feedback[tone].value,
      );
      assert.equal(
        extra.toast.tones[tone].contrast,
        primitive.colors.feedback[tone].contrast,
      );
      checked++;
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

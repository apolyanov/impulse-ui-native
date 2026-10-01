import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const themeDirectory = path.join(root, "packages/theme/src/theme");

// Execute the pure token factories without loading React Native or build output.
function loadTokens(filename) {
  const exports = {};
  const source = fs.readFileSync(path.join(themeDirectory, filename), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  vm.runInNewContext(outputText, { exports, require: () => ({}) });
  return exports;
}

function luminance(color) {
  assert.match(color, /^#[0-9a-f]{6}$/i);
  const channels = color
    .slice(1)
    .match(/../g)
    .map((hex) => {
      const value = parseInt(hex, 16) / 255;
      return value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function checkPair(foreground, background, minimum, label) {
  const actual = contrast(foreground, background);
  assert(actual >= minimum, `${label}: ${actual.toFixed(2)}:1 < ${minimum}:1`);
}

const scales = loadTokens("tokens.theme.ts");
const factoryFiles = fs
  .readdirSync(themeDirectory)
  .filter((file) => file.startsWith("create-"));
let factoryCount = 0;
let textPairCount = 0;

for (const scheme of ["Light", "Dark"]) {
  const colors = scales[`${scheme}Colors`];
  const theme = {
    colors,
    space: scales.SpaceTokens,
    radii: scales.RadiiTokens,
    borderSize: scales.BorderSizeTokens,
    fontFamily: scales.FontFamilyTokens,
    fontWeight: scales.FontWeightTokens,
    fontSize: scales.FontSizeTokens,
    lineHeight: scales.LineHeightTokens,
    letterSpacing: scales.LetterSpacingTokens,
  };
  const generated = {};
  for (const filename of factoryFiles) {
    for (const [name, factory] of Object.entries(loadTokens(filename))) {
      generated[name] = factory(theme);
      factoryCount++;
    }
  }

  function checkTextPairs(value, label) {
    if (!value || typeof value !== "object") return;
    const inactive = /disabled|outsideMonth|unselected/i.test(label);
    if (value.color && !inactive) {
      const backgrounds =
        value.backgroundColor && value.backgroundColor !== "transparent"
          ? [value.backgroundColor]
          : [
              colors.surface.primary.value,
              colors.surface.secondary.value,
              colors.surface.elevated.value,
            ];
      for (const background of backgrounds) {
        checkPair(value.color, background, 4.5, `${scheme} ${label}`);
        textPairCount++;
      }
    }
    for (const [key, child] of Object.entries(value)) {
      if (child && typeof child === "object")
        checkTextPairs(child, `${label}.${key}`);
    }
  }

  for (const [name, tokens] of Object.entries(generated))
    checkTextPairs(tokens, name);
  for (const pair of [
    colors.primary,
    colors.secondary,
    colors.accent,
    ...Object.values(colors.feedback),
  ]) {
    checkPair(pair.contrast, pair.value, 4.5, `${scheme} palette pair`);
  }

  for (const surface of ["primary", "secondary", "elevated"]) {
    const background = colors.surface[surface].value;
    for (const tone of ["primary", "secondary", "neutral"]) {
      checkPair(
        generated.createSpinnerTokens.colors[tone],
        background,
        3,
        scheme + " Spinner " + tone,
      );
    }
    for (const variant of ["filled", "outlined"]) {
      checkPair(
        generated.createControlInputTokens.variants[variant].default
          .placeholderColor,
        background,
        4.5,
        scheme + " input placeholder " + variant,
      );
    }
    checkPair(
      generated.createAvatarTokens.statusColors.offline,
      background,
      scheme === "Dark" ? 3 : 2.5,
      scheme + " Avatar offline",
    );
  }
  const switches = generated.createSwitchTokens;
  for (const [variant, states] of Object.entries(switches.variants)) {
    for (const [state, appearance] of Object.entries(states)) {
      for (const selection of ["active", "inactive"]) {
        const background =
          appearance[`${selection}BackgroundColor`] === "transparent"
            ? colors.surface.elevated.value
            : appearance[`${selection}BackgroundColor`];
        checkPair(
          appearance[`${selection}ThumbColor`],
          background,
          state === "disabled" ? 2.5 : 3,
          `${scheme} Switch ${variant}/${state}/${selection}`,
        );
      }
      // Loading resolves the disabled palette in Switch, regardless of value.
      if (state === "disabled") {
        for (const selection of ["active", "inactive"]) {
          checkPair(
            switches.loadingIndicatorColor,
            appearance[`${selection}ThumbColor`],
            3,
            `${scheme} Switch loader`,
          );
        }
      }
    }
  }

  const slider = generated.createSliderTokens;
  for (const [variant, states] of Object.entries(slider.variants)) {
    for (const [state, appearance] of Object.entries(states)) {
      checkPair(
        appearance.activeMarkColor,
        appearance.activeTrackColor,
        state === "disabled" ? 2 : 3,
        `${scheme} Slider ${variant}/${state} active mark`,
      );
      checkPair(
        appearance.markColor,
        appearance.inactiveTrackColor,
        3,
        `${scheme} Slider ${variant}/${state} inactive mark`,
      );
      if (state !== "disabled") {
        checkPair(
          appearance.valueBubbleColor,
          appearance.valueBubbleBackgroundColor === "transparent"
            ? colors.surface.elevated.value
            : appearance.valueBubbleBackgroundColor,
          4.5,
          `${scheme} Slider value`,
        );
      }
    }
  }

  checkPair(
    generated.createFlyoutTokens.handle.backgroundColor,
    generated.createFlyoutTokens.backgroundColor,
    3,
    `${scheme} Flyout handle`,
  );
  for (const tone of ["primary", "secondary", "neutral", "inverse"]) {
    const progress = generated.createProgressTokens.colors[tone];
    checkPair(
      progress.indicatorColor,
      progress.trackColor,
      tone === "neutral" ? 2.5 : 3,
      `${scheme} Progress ${tone}`,
    );
  }
  if (scheme === "Dark") {
    for (const surface of ["primary", "secondary", "elevated"]) {
      let previous = 0;
      for (const tone of ["subtle", "default", "strong"]) {
        const current = contrast(
          colors.border[tone].value,
          colors.surface[surface].value,
        );
        assert(
          current >= 3 && current > previous,
          `Dark border ${tone}/${surface}`,
        );
        previous = current;
      }
    }
  }
}

console.log(
  `Passed ${factoryCount} factory executions and ${textPairCount} enabled text pairs across light/dark palettes, plus Switch, Slider, Flyout, Progress, and dark border checks.`,
);

// Exercise the shared renderers with mocked hooks; these checks do not render native layout.
let renderTheme;
const runtime = {
  react: { memo: (component) => component, useMemo: (factory) => factory() },
  "react/jsx-runtime": { jsx: (type, props) => ({ type, props }) },
  "react-native": {
    Text: "Text",
    StyleSheet: {
      flatten: (styles) =>
        Object.assign({}, ...styles.filter(Boolean).flat(Infinity)),
    },
  },
  "@impulse-ui-native/theme": {
    useTheme: () => renderTheme,
    useStyleProps: (props) =>
      Object.fromEntries(
        Object.entries(props).filter(([key]) =>
          ["color", "fontFamily", "fontVariant"].includes(key),
        ),
      ),
  },
};
function loadRenderer(filename, extra = {}) {
  const exports = {};
  const { outputText } = ts.transpileModule(
    fs.readFileSync(path.join(root, filename), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
      },
    },
  );
  vm.runInNewContext(outputText, {
    exports,
    require: (name) => extra[name] ?? runtime[name] ?? {},
  });
  return exports;
}
const presets = loadRenderer(
  "packages/primitives/src/hocs/create-preset.hoc.tsx",
);
const { Typography } = loadRenderer(
  "packages/primitives/src/components/atoms/typography.tsx",
  { "../../hocs": presets },
);
const { Icon } = loadRenderer("packages/icon/src/components/icon.tsx");
const secondaryPresets = new Set([
  "Subtitle1",
  "Subtitle2",
  "BodySmall",
  "Caption",
  "Helper",
  "Overline",
  "Eyebrow",
]);
const configured = presets.createPreset(
  () => ({ fontFamily: "Configured", fontVariant: ["small-caps"] }),
  "Master",
);
for (const colors of [
  scales.LightColors,
  scales.DarkColors,
  scales.LightColors,
]) {
  renderTheme = {
    colors,
    fontFamily: scales.FontFamilyTokens,
    fontWeight: scales.FontWeightTokens,
    fontSize: scales.FontSizeTokens,
    lineHeight: scales.LineHeightTokens,
    letterSpacing: scales.LetterSpacingTokens,
    components: { icon: { sizes: { small: 18, medium: 24, large: 30 } } },
  };
  for (const [name, Component] of Object.entries(Typography)) {
    assert.equal(
      Component({}).props.style.color,
      colors.text[secondaryPresets.has(name) ? "secondary" : "primary"],
    );
    assert.equal(Component({ color: "custom" }).props.style.color, "custom");
    assert.equal(
      Component({ color: "custom", style: { color: "styled" } }).props.style
        .color,
      "styled",
    );
  }
  assert.equal(Typography.Code({}).props.style.fontFamily, "monospace");
  assert.equal(configured({}).props.style.fontFamily, "Configured");
  assert.equal(
    configured({ fontFamily: "Explicit" }).props.style.fontFamily,
    "Explicit",
  );
  assert.equal(
    configured({ style: { fontFamily: "Styled" } }).props.style.fontFamily,
    "Styled",
  );
  assert.equal(configured({}).props.style.fontVariant[0], "small-caps");
  assert.equal(
    configured({ fontVariant: ["oldstyle-nums"] }).props.style.fontVariant[0],
    "oldstyle-nums",
  );
  assert.equal(
    configured({ numeric: true }).props.style.fontVariant[0],
    "tabular-nums",
  );
  const glyph = () => null;
  assert.equal(Icon({ icon: glyph }).props.color, colors.text.primary);
  assert.equal(
    Icon({ icon: glyph, fill: "explicit-fill" }).props.color,
    "explicit-fill",
  );
  assert.equal(
    Icon({ icon: glyph, fill: "explicit-fill", color: "explicit-color" }).props
      .fill,
    "explicit-color",
  );
  assert.equal(Icon({ icon: glyph, size: "small" }).props.width, 18);
  assert.equal(Icon({ icon: glyph, size: 42 }).props.height, 42);
}
console.log(
  "Passed typography hierarchy, font configuration/override precedence, numeric variants, and Icon color/fill defaults across light/dark/light switching (mocked hooks).",
);

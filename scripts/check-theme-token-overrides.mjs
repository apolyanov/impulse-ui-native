import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const cache = new Map();
const platform = { OS: "ios" };

// Exercise source factories, provider composition, and chart math without a
// native renderer. React's memo/useMemo boundaries and Platform are stubbed;
// the merge implementation, token factories, and D3 calculations are real.
function loadSource(relativePath) {
  const filename = path.resolve(root, relativePath);

  if (cache.has(filename)) {
    return cache.get(filename).exports;
  }

  const module = { exports: {} };
  cache.set(filename, module);

  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
    },
  });

  const sourceRequire = (specifier) => {
    if (specifier === "react") {
      return {
        createContext: () => ({ Provider: "ThemeProvider" }),
        memo: (component) => component,
        useMemo: (factory) => factory(),
      };
    }

    if (specifier === "react-native") {
      return { Platform: platform };
    }

    if (specifier === "@shopify/react-native-skia") {
      return {};
    }

    if (specifier === "@impulse-ui-native/core") {
      return loadSource("packages/core/src/utils/merge.utils.ts");
    }

    if (specifier === "@impulse-ui-native/theme") {
      return {
        ...loadSource("packages/theme/src/theme/tokens.theme.ts"),
        ...loadSource("packages/theme/src/theme/light.theme.ts"),
        ...loadSource("packages/theme/src/theme/create-charts-tokens.ts"),
      };
    }

    if (specifier.startsWith(".")) {
      const base = path.resolve(path.dirname(filename), specifier);
      const resolved = [
        `${base}.ts`,
        `${base}.tsx`,
        path.join(base, "index.ts"),
      ].find((candidate) => fs.existsSync(candidate));
      assert(resolved, `Cannot resolve ${specifier} from ${filename}`);

      return loadSource(resolved);
    }

    return require(specifier);
  };

  vm.runInNewContext(outputText, {
    exports: module.exports,
    module,
    require: sourceRequire,
  });

  return module.exports;
}

const { ThemeProvider } = loadSource(
  "packages/theme/src/providers/theme.provider.tsx",
);
const { LightTheme } = loadSource("packages/theme/src/theme/light.theme.ts");
const { ChartColorTokens } = loadSource(
  "packages/theme/src/theme/tokens.theme.ts",
);
const { getShadowStyle } = loadSource(
  "packages/theme/src/utils/style.utils.ts",
);
const { createChartLayout } = loadSource(
  "packages/charts/src/utils/chart-layout.util.ts",
);
const { createDrawableMultiLineChartSeries } = loadSource(
  "packages/charts/src/utils/multi-line-chart.util.ts",
);
const { createBarChartModel } = loadSource(
  "packages/charts/src/utils/bar-chart.util.ts",
);
const { createDrawableMultiBarChartSeries, createMultiBarChartModel } =
  loadSource("packages/charts/src/utils/multi-bar-chart.util.ts");
const { createMultiPieChartModel } = loadSource(
  "packages/charts/src/utils/multi-pie-chart.util.ts",
);
const { resolveGridLineOptions } = loadSource(
  "packages/charts/src/utils/grid.util.ts",
);

for (const scheme of ["light", "dark"]) {
  const defaults = ThemeProvider({ scheme }).props.value;
  // A canvas override must leave component fills unchanged, even though canvas
  // and subtle share the same default colors.
  const canvasOverride = ThemeProvider({
    scheme,
    theme: {
      [scheme]: { colors: { surface: { canvas: { value: "#123456" } } } },
    },
  }).props.value;
  assert.equal(canvasOverride.colors.surface.canvas.value, "#123456");
  assert.deepEqual(canvasOverride.components, defaults.components);

  const surfaceOverride = ThemeProvider({
    scheme,
    theme: {
      [scheme]: {
        colors: {
          surface: {
            subtle: { value: "#234567" },
            default: { value: "#345678" },
            elevated: { value: "#456789" },
          },
        },
      },
    },
  }).props.value;
  assert.equal(
    surfaceOverride.colors.surface.canvas.value,
    defaults.colors.surface.canvas.value,
  );
  assert.equal(
    surfaceOverride.components.button.variants.filled.disabled.backgroundColor,
    "#234567",
  );
  assert.equal(surfaceOverride.components.card.backgroundColor, "#345678");
  assert.equal(surfaceOverride.components.list.backgroundColor, "#345678");
  assert.equal(surfaceOverride.components.accordion.backgroundColor, "#345678");
  assert.equal(surfaceOverride.components.modal.backgroundColor, "#456789");
  assert.equal(surfaceOverride.components.popover.backgroundColor, "#456789");
}

console.log(
  "Independent surface override checks passed for light and dark themes.",
);

for (const scheme of ["light", "dark"]) {
  const defaults = ThemeProvider({ scheme }).props.value;
  assert.equal(defaults.components.charts.line.width, 2);
  assert.equal(defaults.components.charts.insets.left, 32);
  assert.equal(defaults.components.slider.markLabelWidth, 48);
  assert.equal(defaults.components.slider.thumbHighlightSize, 4);
  assert.equal(defaults.components.slider.valueBubbleMinWidth, 40);
  assert.equal(defaults.components.modal.enterDuration, 180);
  assert.equal(defaults.components.modal.exitDuration, 150);
  assert.equal(defaults.components.toast.stackDuration, 220);
  assert.equal(defaults.components.flyout.enterSpring.stiffness, 300);
  assert.equal(defaults.codeFontFamily, "monospace");

  const theme = ThemeProvider({
    scheme,
    theme: {
      [scheme]: {
        space: { md: 42 },
        borderSize: { sm: 3, md: 5 },
        shadows: { sm: { radius: 12, opacity: 0.32, elevation: 9 } },
        codeFontFamily: "CustomCodeFont",
      },
    },
    components: (primitive) => ({
      charts: {
        palette: ["#123456", ...ChartColorTokens.slice(1)],
        line: { width: 10 },
        insets: { left: primitive.space.md + 6 },
        bar: { categoryPadding: 0.6, seriesPadding: 0.4 },
        pie: { ringPadding: 8 },
      },
      slider: {
        markLabelWidth: 80,
        thumbHighlightSize: 7,
        valueBubbleMinWidth: 52,
      },
      modal: { enterDuration: 420 },
      toast: { stackDuration: 480 },
      flyout: { enterSpring: { stiffness: 450 } },
    }),
  }).props.value;
  const tokens = theme.components.charts;

  assert(
    Array.isArray(tokens.palette),
    "A merged palette must remain an array",
  );
  assert.equal(tokens.palette.length, 15);
  assert.equal(tokens.palette[0], "#123456");
  assert.equal(
    ChartColorTokens[0],
    "#F55D6B",
    "Overrides must not mutate defaults",
  );
  assert.equal(tokens.insets.top, 42);
  assert.equal(tokens.insets.left, 48);
  assert.equal(tokens.axis.width, 3);
  assert.equal(tokens.grid.width, 3);
  assert.equal(theme.codeFontFamily, "CustomCodeFont");
  assert.equal(theme.components.slider.markLabelWidth, 80);
  assert.equal(theme.components.slider.thumbHighlightSize, 7);
  assert.equal(theme.components.slider.valueBubbleMinWidth, 52);
  assert.equal(theme.components.modal.enterDuration, 420);
  assert.equal(theme.components.modal.exitDuration, 150);
  assert.equal(theme.components.toast.stackDuration, 480);
  assert.equal(theme.components.flyout.enterSpring.stiffness, 450);
  assert.equal(theme.components.flyout.enterSpring.damping, 50);

  platform.OS = "ios";
  const iosShadow = getShadowStyle("sm", "top", theme.colors, theme.shadows);
  assert.equal(iosShadow.shadowRadius, 12);
  assert.equal(iosShadow.shadowOpacity, 0.32);
  assert.equal(iosShadow.shadowOffset.height, -6);

  platform.OS = "android";
  assert.equal(
    getShadowStyle("sm", "bottom", theme.colors, theme.shadows).elevation,
    9,
  );

  const layout = createChartLayout(
    { width: 200, height: 200 },
    {},
    tokens.insets,
  );
  assert.equal(layout.plot.x, 48);
  assert.equal(layout.plot.width, 110);
  assert.equal(
    createChartLayout({ width: 200, height: 200 }, { left: 0 }, tokens.insets)
      .plot.x,
    0,
    "Explicit zero insets take precedence",
  );

  const plot = { x: 0, y: 0, width: 100, height: 100 };
  const series = {
    id: "line",
    data: [],
    coordinates: [
      { x: 0, y: 0 },
      { x: 100, y: 100 },
    ],
  };
  const line = createDrawableMultiLineChartSeries(series, 15, plot, tokens);
  assert.equal(line.line.color, "#123456", "Palette selection wraps by length");
  assert.equal(line.line.width, 10);
  assert.equal(line.coordinates[0].x, 5);
  assert.equal(line.coordinates[1].x, 95);
  const explicitLine = createDrawableMultiLineChartSeries(
    { ...series, line: { width: 4, color: "#abcdef" } },
    0,
    plot,
    tokens,
  );
  assert.equal(explicitLine.line.color, "#abcdef");
  assert.equal(explicitLine.coordinates[0].x, 2);

  assert.equal(
    createDrawableMultiBarChartSeries({ id: "bar", data: [] }, 15, tokens).bar
      .color,
    "#123456",
  );
  assert.equal(
    createDrawableMultiBarChartSeries(
      { id: "bar", data: [], bar: { color: "#abcdef" } },
      0,
      tokens,
    ).bar.color,
    "#abcdef",
  );

  const barProps = {
    data: [
      { x: "a", y: 10 },
      { x: "b", y: 20 },
    ],
    plot,
  };
  const themedBars = createBarChartModel(barProps, tokens);
  assert(themedBars.bandwidth < createBarChartModel(barProps).bandwidth);
  assert.equal(
    createBarChartModel({ ...barProps, categoryPadding: Number.NaN }, tokens)
      .bandwidth,
    themedBars.bandwidth,
  );
  assert.equal(
    createBarChartModel({ ...barProps, categoryPadding: 0.2 }, tokens)
      .bandwidth,
    createBarChartModel(barProps).bandwidth,
  );

  const multiBarProps = {
    plot,
    series: [
      { id: "a", data: barProps.data },
      { id: "b", data: barProps.data },
    ],
  };
  const themedMultiBars = createMultiBarChartModel(multiBarProps, tokens);
  assert(
    themedMultiBars.series[0].coordinates[0].width <
      createMultiBarChartModel(multiBarProps).series[0].coordinates[0].width,
  );

  const pieProps = {
    plot,
    series: [
      { id: "a", data: [{ id: "slice", value: 1 }] },
      { id: "b", data: [{ id: "slice", value: 1 }] },
    ],
  };
  const rings = createMultiPieChartModel(pieProps, tokens).series;
  assert(
    Math.abs(
      rings[0].coordinates[0].innerRadius -
        rings[1].coordinates[0].outerRadius -
        8,
    ) < 1e-10,
  );
  const touchingRings = createMultiPieChartModel(
    { ...pieProps, ringPadding: 0 },
    tokens,
  ).series;
  assert.equal(
    touchingRings[0].coordinates[0].innerRadius -
      touchingRings[1].coordinates[0].outerRadius,
    0,
  );

  assert.equal(
    resolveGridLineOptions(true, false, "#123456", tokens.grid.width).width,
    3,
  );
  assert.equal(
    resolveGridLineOptions({ width: 0 }, true, "#123456", tokens.grid.width)
      .width,
    0,
  );
  assert.equal(
    LightTheme.shadows.sm.radius,
    4,
    "Overrides must not mutate base shadows",
  );
}

console.log("Theme token override checks passed for light and dark themes.");

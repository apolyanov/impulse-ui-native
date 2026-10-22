# @impulse-ui-native/charts

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/charts

Skia-rendered chart components and primitives for Impulse UI Native.

## Installation

```sh
pnpm add @impulse-ui-native/charts @shopify/react-native-skia react-native-gesture-handler react-native-reanimated react-native-worklets
```

Complete Skia, Gesture Handler, Reanimated, and Worklets native setup before rendering a chart. Wrap the application in `GestureHandlerRootView` and `ThemeProvider`. Charts require Gesture Handler >=2, Reanimated >=4, and Worklets >=0.5 for native gesture ownership.

## Components

The package provides Skia-rendered `LineChart`, `MultiLineChart`, `BarChart`, `MultiBarChart`, `PieChart`, and `MultiPieChart` components. Charts fill their parent, so give the surrounding view an explicit height.

```tsx
import { BarChart } from "@impulse-ui-native/charts";

<BarChart
  data={[
    { x: "Jan", y: 18 },
    { x: "Feb", y: 24 },
    { x: "Mar", y: 16 },
  ]}
  bar={{ color: "#6366f1", radius: 4 }}
/>;
```

All six charts use the same theme inset defaults. Cartesian charts reserve
space for their default axes and endpoint labels. Use partial `insets` to override individual sides when custom labels,
font sizes, or rotations need different spacing.

Use `MultiBarChart` for grouped series. Categories are shared across the series, and each series can supply its own bar style.

```tsx
import { MultiBarChart } from "@impulse-ui-native/charts";

<MultiBarChart
  series={[
    {
      id: "revenue",
      data: [
        { x: "Jan", y: 18 },
        { x: "Feb", y: 24 },
      ],
    },
    {
      id: "cost",
      data: [
        { x: "Jan", y: 12 },
        { x: "Feb", y: 15 },
      ],
    },
  ]}
  categoryPadding={0.2}
  seriesPadding={0.1}
/>;
```

Bar charts support string, number, and `Date` categories, nullable values, positive and negative values, custom Y domains, axes, and grid styling. Inferred Y domains include zero.

`categoryPadding` and `seriesPadding` are ratios clamped between `0` and `1`. Multi-series bars use the theme's chart palette unless a series supplies `bar.color`.

Set `orientation="horizontal"` on either bar chart. Set `mode="stacked"` on
`MultiBarChart` to stack each category's positive and negative values separately
around zero. Grouped mode remains the default. In stacked mode, `seriesPadding`
does not apply. Missing/null measurements leave gaps in grouped charts and add
nothing to a stack. Duplicate categories within one series are drawn separately
in grouped mode and accumulated in stacked mode.

For horizontal bars, `xAxis` still describes categories and `yAxis` still
describes numeric values, including the numeric domain. Their physical positions
swap: categories appear on the left and values on the bottom. `grid.x` and
`grid.y` always control vertical and horizontal grid lines, respectively.

```tsx
<MultiBarChart
  series={series}
  mode="stacked"
  orientation="horizontal"
  yAxis={{ domain: [-50, 100] }}
  interactive
  legend
/>
```

Use `PieChart` for pies and donuts. Slice values must be positive finite numbers; invalid, zero, and negative values are ignored. Colors follow the chart palette unless a datum supplies `color`.

```tsx
import { PieChart } from "@impulse-ui-native/charts";

<PieChart
  data={[
    { id: "mobile", value: 46 },
    { id: "desktop", value: 34 },
    { id: "tablet", value: 20 },
  ]}
  innerRadius={0.5}
  outerRadius={0.9}
  padAngle={2}
  slice={{ cornerRadius: 4, strokeColor: "#fff", strokeWidth: 2 }}
/>;
```

`innerRadius` and `outerRadius` are ratios of the available radius and are clamped between `0` and `1`. Angles use degrees, measured clockwise from 12 o'clock. The defaults render a complete circle from `0` through `360` degrees.

Use `MultiPieChart` for independently normalized concentric series. The first series is the outermost ring, and angular padding keeps a consistent visual width across all rings.

```tsx
import { MultiPieChart } from "@impulse-ui-native/charts";

<MultiPieChart
  series={[
    {
      id: "current",
      data: [
        { id: "organic", value: 42 },
        { id: "paid", value: 33 },
      ],
    },
    {
      id: "previous",
      data: [
        { id: "organic", value: 36 },
        { id: "paid", value: 29 },
      ],
    },
  ]}
  innerRadius={0.25}
  ringPadding={4}
/>;
```

## Scope

- Token-aware chart primitives for React Native.
- Skia-based rendering.
- D3-backed scales, shapes, interpolation, and date/time helpers.
- Typed components that compose with the rest of Impulse UI Native.

## Native prerequisite

Chart APIs require `@shopify/react-native-skia` version 2 or newer.

## Theme customization

Chart components resolve defaults from `theme.components.charts`: `palette`,
`insets`, `axis.width`, `axis.tickLength`, `axis.labelGap`, `grid.width`,
`line.width`, `bar.categoryPadding`, `bar.seriesPadding`, and `pie.ringPadding`.
Set these with the `ThemeProvider` components prop. Explicit chart/series colors,
stroke widths, insets, and spacing options take precedence. Stroke clipping and
rendering use the same resolved line width.

The palette has fifteen entries, matching `ChartColorTokens`. For example,
`components={{ charts: { palette: myChartPalette } }}` configures it globally.
The standalone `Bar`, `Line`, and `Pie` primitives require a `theme` prop and
resolve their visual defaults from it. Read the theme with `useTheme()` in a
component outside `Canvas`, then pass it to the primitives. Skia renders canvas
children in a separate React root, where the app's theme context is unavailable.

Bar/multi-bar model utilities, `createMultiPieChartModel`, and the hooks
`useBarChart`, `useMultiBarChart`, and
`useMultiPieChart` accept an optional second `ChartsTokens` argument.
`createDrawableMultiLineChartSeries` accepts tokens as its fourth argument, and
`createDrawableMultiBarChartSeries` as its third. Pass
`theme.components.charts` when using these APIs directly; omission preserves
`DefaultChartsTokens` and does not require a provider for the pure hooks.

## Line scales and data ordering

Line charts infer their X scale from the first valid X value: numbers use
`linear`, strings use `point`, and dates use `time`. An explicit `xScaleType`
takes precedence. Use one X-value type per chart, including across multiple
series; values incompatible with an explicit numeric/time scale create gaps.

```tsx
import { LineChart } from "@impulse-ui-native/charts";

<LineChart
  data={[
    { x: new Date(2026, 0, 1), y: 18 },
    { x: new Date(2026, 0, 2), y: null },
    { x: new Date(2026, 0, 3), y: 24 },
  ]}
  xAxis={{ format: (date) => `${date.getMonth() + 1}/${date.getDate()}` }}
  interactive
/>;
```

Input order determines line connections. Sort numeric/time data by X before
using `curve="monotone"` in the `line` options; categorical order follows the
first occurrence of each category. Null/non-finite Y values create gaps.
Single-point and constant numeric domains expand to a usable range. Invalid
numeric domain bounds fall back to `[0, 1]`; valid custom bounds are preserved.
Line stroke width does not move data positions relative to axes or other series.

## Selection, tooltips, and legends

All six chart components accept `interactive` for native tap/drag selection.
Line charts select the nearest drawable point; bars and pies select the touched
mark. Selection stays visible while dragging through gaps or beyond the plot,
and lifting the finger preserves the last valid hit. A tap on empty space
(including donut holes, bar/ring gaps, or plot margins) clears selection.
Interactive charts retain the gesture so vertical dragging does not scroll
the parent; begin a scroll outside the chart instead. A tooltip and selection marker appear for the selected measurement. Tap an already selected point or any entry in the default tooltip to clear selection. Dragging across selected points keeps the tooltip open. Custom tooltip content receives touch events and owns its own actions.
Cartesian tooltip category labels use the same `xAxis.format` callback as the
axis; default date labels use ISO dates. Multi-line tooltips include visible
series at the same X value, including overlapping lines. Supply `tooltip={false}` to hide it, or a function receiving
`readonly ChartSelectionDetails[]` to render custom React Native content.

Selection is uncontrolled by default. Use `defaultSelection` to initialize it,
or `selection` and `onSelectionChange` to control it. `null` clears selection.
`ChartSelection` contains `datumIndex` (the original data-array index) and, for
multi charts, `seriesId`. Keep selection in sync when reordering application
data. Selections absent from the current visible data do not render a tooltip.

```tsx
import { useState } from "react";

import type { ChartSelection } from "@impulse-ui-native/charts";
import { MultiLineChart } from "@impulse-ui-native/charts";

function Trends() {
  const [selection, setSelection] = useState<ChartSelection | null>(null);
  const [hiddenIds, setHiddenIds] = useState<readonly string[]>([]);

  return (
    <MultiLineChart
      series={[
        { id: "current", label: "Current", data: [{ x: "Mon", y: 18 }] },
        { id: "previous", label: "Previous", data: [{ x: "Mon", y: 14 }] },
      ]}
      interactive
      legend
      selection={selection}
      onSelectionChange={setSelection}
      hiddenIds={hiddenIds}
      onHiddenIdsChange={setHiddenIds}
    />
  );
}
```

`legend` enables toggleable legends on multi charts and `PieChart`. `hiddenIds`
and `onHiddenIdsChange` control visibility; `defaultHiddenIds` initializes it.
IDs refer to series on multi charts and slices on `PieChart`. Toggling preserves selection and recomputes scales, groups, stacks, or rings
from visible data. A hidden selected datum/series stops rendering its selection
until shown again; toggling unrelated entries does not clear the selection.
Use unique stable series and slice IDs. Optional `label` fields provide readable
legend/tooltip names. Single line/bar charts have no series legend.

Default series/slice colors are selected from the palette by stable ID, so
filtering and reordering do not change category colors. Explicit colors take
precedence. Pie categories use the same color across rings when their palettes
match. Colors can repeat when there are more IDs than palette entries; use
explicit colors/dashes to distinguish important series.

## Empty data and limits

Empty/all-null/invalid data renders no marks. Use `emptyContent` for a centered
React Native explanation. For bars, all-zero values also have no drawable marks.
For rings, excessive `ringPadding` can consume all radial space; reduce padding
or increase chart size. Pie totals saturate at `Number.MAX_VALUE` when their sum
overflows, while slice proportions remain valid.

Grid visibility and axis stroke/tick visibility are independent. Use
`xAxis.line.visible`, `xAxis.tick.visible`, or the corresponding Y options to
hide individual parts. Label size/rotation and very small parent layouts can
require explicit insets.

## Lower-level composition

Render Skia primitives inside a `Canvas`. Give model utilities a pixel-space
`plot: { x, y, width, height }`; hooks memoize the same models and expect immutable
data/option objects. Coordinates preserve their source datum and index. Native
`ChartLegend` and `ChartTooltip` belong outside the canvas and require a theme
provider, as do the visual primitives.

| API                                         | Contract                                                                                               |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `createChartLayout` / `useChartLayout`      | Split the measured size into plot and axis regions using partial insets.                               |
| `createLineChartModel` / `useLineChart`     | Return scales, domains, ticks, and gap-preserving coordinates.                                         |
| `createLineChartScaleModel`                 | Compute shared scales without allocating coordinates for flattened series.                             |
| `useMultiLineChart`                         | Reuse shared scales and create each series' coordinates once.                                          |
| Bar/pie model utilities and hooks           | Return drawable rectangles/arcs; multi variants share categories or independently normalize rings.     |
| `Line`, `Bar`, `Pie`                        | Draw supplied coordinates with theme-aware styling. Geometry uses pixels; pie coordinates use radians. |
| `XAxis`, `YAxis`, `Grid`                    | Require supplied ticks, scales, plot/axis regions, and an `AppTheme`.                                  |
| `Label`                                     | Draw a paragraph inside a pixel rect; accepts a font manager, alignment, and degree rotation.          |
| `useChartPresentation`                      | Manage controlled/uncontrolled selection and hidden IDs for custom chart composition.                  |
| Hit-target utilities / `findChartHitTarget` | Build targets from model coordinates and resolve a local canvas point.                                 |
| `ChartLegend` / `ChartTooltip`              | Native presentation for explicit legend items/toggle callbacks or selection details.                   |

For a custom canvas, `useChartCanvas` returns `ref`, `size`, and `onLayout`.
Attach `onLayout` to the native view containing the canvas so layout changes
update the model; the initial Skia measurement remains available for existing
ref-only consumers.

## Architecture and consistency

See [the complete architecture and reuse map](https://github.com/apolyanov/impulse-ui-native/blob/main/docs/charts-architecture.md)
for package ownership, every model/rendering layer, and the shared data flow.
Native legend and tooltip text and Skia labels resolve the same chart typography.
Legends reuse the shared Pressable behavior; ChartTooltip owns its themed surface and rows.
All chart frames resolve the same inset defaults, and bar/pie rounding defaults
come from the shared radius scale.

The theme factory also supplies optional chart `label`, `selection`, `legend`, and
`tooltip` tokens. Existing complete `ChartsTokens` objects remain valid: missing
additions fall back to shared theme scales. Override `bar.radius` and
`pie.cornerRadius` globally or their existing component props individually.
Configure the tooltip with `components.charts.tooltip`: `backgroundColor`, `color`, `borderColor`, `borderWidth`, `borderRadius`, `padding`, and `gap`. `ChartTooltip` is exported for reuse with a `details` array, native View props, and a `style` override.

Load your fonts in the host. If Skia cannot resolve the registered font, supply
`fontManager` to Cartesian charts for the same glyphs used by native Typography.
The native `ConsistencyLight` and `ConsistencyDark` stories compare all six charts,
including initial selected values and their default tooltips.

## Verification

Run `pnpm --filter @impulse-ui-native/charts test` for Node model/hit-testing
tests, then the package's `typecheck` and `build`. The test runner bundles real
model code and pure theme factories without loading native rendering modules.
Use the on-device Charts Storybook stories to verify touch behavior, font
rendering, and layout on iOS and Android; model tests do not exercise native UI.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/charts/src/components/bar-chart/bar-chart.tsx

```tsx
import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { BarChartProps, ChartXValue } from "../../types";
import { useBarChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { createBarChartHitTargets } from "../../utils/chart-interaction.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Bar } from "../primitives";

export const BarChart = memo(function BarChart<X extends ChartXValue = string>(
  props: BarChartProps<X>,
) {
  const frame = useChartFrame(props);
  const { theme, layout } = frame;
  const model = useBarChart(
    { ...props, plot: layout.plot },
    theme.components.charts,
  );
  const color = props.bar?.color ?? theme.components.charts.palette[0];

  const targets = useMemo(
    () =>
      props.bar?.visible === false
        ? []
        : createBarChartHitTargets(
            model.coordinates,
            color,
            undefined,
            undefined,
            layout.plot,
            props.xAxis?.format,
          ),
    [
      model.coordinates,
      color,
      props.bar?.visible,
      layout.plot,
      props.xAxis?.format,
    ],
  );

  return (
    <ChartSurface frame={frame} targets={targets}>
      <ChartAxes
        {...props}
        layout={layout}
        theme={theme}
        xScale={model.xScale}
        xTicks={model.xTicks}
        yScale={model.yScale}
        yTicks={model.yTicks}
      />
      <Group clip={layout.plot}>
        <Bar coordinates={model.coordinates} {...props.bar} theme={theme} />
      </Group>
    </ChartSurface>
  );
});
```

### packages/charts/src/components/bar-chart/index.ts

```tsx
export { BarChart } from "./bar-chart";
```

### packages/charts/src/components/chart-legend.tsx

```tsx
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartLegendProps } from "../types";
import { ChartLegendEntry } from "./chart-legend-item";

export const ChartLegend = memo(function ChartLegend({
  items,
  hiddenIds,
  onToggle,
}: ChartLegendProps) {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      {items.map((item) => {
        const hidden = hiddenIds?.includes(item.id) ?? false;

        return (
          <ChartLegendEntry
            key={item.id}
            item={item}
            hidden={hidden}
            onToggle={onToggle}
          />
        );
      })}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    container: { flexDirection: "row", flexWrap: "wrap", gap: theme.space.xxs },
  });
}
```

### packages/charts/src/components/chart-tooltip.tsx

```tsx
import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useTheme, useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartTooltipProps } from "../types";
import { ChartRow } from "./chart-row";
import { ChartSwatch } from "./chart-swatch";
import { ChartText } from "./chart-text";

export const ChartTooltip = memo(function ChartTooltip({
  details,
  style,
  ...props
}: ChartTooltipProps) {
  const theme = useTheme();
  const styles = useThemedStyles(themedStyles);
  const containerStyle = useMemo(
    () => [styles.container, style],
    [styles.container, style],
  );
  const color =
    theme.components.charts.tooltip?.color ?? theme.colors.text.primary;

  return (
    <View {...props} style={containerStyle}>
      {details.map((detail) => {
        const selectionKey =
          (detail.selection.seriesId ?? "") + ":" + detail.selection.datumIndex;

        return (
          <ChartRow style={styles.row} key={selectionKey}>
            <ChartSwatch color={detail.color} />
            <ChartText numeric color={color} flexShrink={1}>
              {detail.label}: {detail.value}
            </ChartText>
          </ChartRow>
        );
      })}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.charts.tooltip;

  return StyleSheet.create({
    row: { gap: tokens?.gap ?? theme.space.xs },
    container: {
      backgroundColor:
        tokens?.backgroundColor ?? theme.colors.surface.elevated.value,
      borderColor: tokens?.borderColor ?? theme.colors.border.subtle.value,
      borderWidth: tokens?.borderWidth ?? theme.borderSize.sm,
      borderRadius: tokens?.borderRadius ?? theme.radii.sm,
      padding: tokens?.padding ?? theme.space.xs,
      gap: tokens?.gap ?? theme.space.xs,
    },
  });
}
```

### packages/charts/src/components/index.ts

```tsx
export { BarChart } from "./bar-chart";
export { ChartLegend } from "./chart-legend";
export { ChartTooltip } from "./chart-tooltip";
export { LineChart } from "./line-chart";
export { MultiBarChart } from "./multi-bar-chart";
export { MultiLineChart } from "./multi-line-chart";
export { MultiPieChart } from "./multi-pie-chart";
export { PieChart } from "./pie-chart";
export * from "./primitives";
```

### packages/charts/src/components/line-chart/index.ts

```tsx
export { LineChart } from "./line-chart";
```

### packages/charts/src/components/line-chart/line-chart.tsx

```tsx
import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, LineChartProps } from "../../types";
import { useLineChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { createLineChartHitTargets } from "../../utils/chart-interaction.util";
import { createChartStrokeClip } from "../../utils/chart-layout.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Line } from "../primitives";

export const LineChart = memo(function LineChart<
  X extends ChartXValue = number,
>(props: LineChartProps<X>) {
  const frame = useChartFrame(props);
  const { theme, layout } = frame;
  const model = useLineChart({ ...props, plot: layout.plot });
  const color = props.line?.color ?? theme.components.charts.palette[0];
  const width = props.line?.width ?? theme.components.charts.line.width;

  const targets = useMemo(
    () =>
      props.line?.visible === false
        ? []
        : createLineChartHitTargets(
            model.coordinates,
            color,
            undefined,
            undefined,
            props.xAxis?.format,
          ),
    [model.coordinates, color, props.line?.visible, props.xAxis?.format],
  );
  const clip = useMemo(
    () => createChartStrokeClip(layout.plot, width, frame.canvas.size),
    [layout.plot, width, frame.canvas.size],
  );

  return (
    <ChartSurface frame={frame} targets={targets}>
      <ChartAxes
        {...props}
        layout={layout}
        theme={theme}
        xScale={model.xScale}
        xTicks={model.xTicks}
        yScale={model.yScale}
        yTicks={model.yTicks}
      />
      <Group clip={clip}>
        <Line coordinates={model.coordinates} {...props.line} theme={theme} />
      </Group>
    </ChartSurface>
  );
});
```

### packages/charts/src/components/multi-bar-chart/index.ts

```tsx
export { MultiBarChart } from "./multi-bar-chart";
```

### packages/charts/src/components/multi-bar-chart/multi-bar-chart.tsx

```tsx
import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, MultiBarChartProps } from "../../types";
import { useMultiBarChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { useVisibleChartSeries } from "../../hooks/use-visible-chart-series.hook";
import { getChartColor } from "../../utils/chart-color.util";
import { createBarChartHitTargets } from "../../utils/chart-interaction.util";
import { createDrawableMultiBarChartSeries } from "../../utils/multi-bar-chart.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Bar } from "../primitives";

export const MultiBarChart = memo(function MultiBarChart<
  X extends ChartXValue = string,
>(props: MultiBarChartProps<X>) {
  const frame = useChartFrame(props);
  const { theme, tokens, layout } = frame;
  const series = useVisibleChartSeries(
    props.series,
    frame.presentation.hidden,
    "bar",
  );
  const model = useMultiBarChart(
    { ...props, series, plot: layout.plot },
    tokens,
  );

  const drawable = useMemo(
    () =>
      model.series.map((item, index) =>
        createDrawableMultiBarChartSeries(item, index, tokens),
      ),
    [model.series, tokens],
  );
  const targets = useMemo(
    () =>
      drawable.flatMap((item) =>
        createBarChartHitTargets(
          item.coordinates,
          item.bar?.color ?? getChartColor(item.id, tokens.palette),
          item.id,
          item.label ?? item.id,
          layout.plot,
          props.xAxis?.format,
        ),
      ),
    [drawable, tokens.palette, layout.plot, props.xAxis?.format],
  );
  const legendItems = useMemo(
    () =>
      props.series.map((item) => ({
        id: item.id,
        label: item.label ?? item.id,
        color: item.bar?.color ?? getChartColor(item.id, tokens.palette),
      })),
    [props.series, tokens.palette],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      <ChartAxes
        {...props}
        layout={layout}
        theme={theme}
        xScale={model.xScale}
        xTicks={model.xTicks}
        yScale={model.yScale}
        yTicks={model.yTicks}
      />
      <Group clip={layout.plot}>
        {drawable.map((item) => (
          <Bar
            key={item.id}
            coordinates={item.coordinates}
            {...item.bar}
            theme={theme}
          />
        ))}
      </Group>
    </ChartSurface>
  );
});
```

### packages/charts/src/components/multi-line-chart/index.ts

```tsx
export { MultiLineChart } from "./multi-line-chart";
```

### packages/charts/src/components/multi-line-chart/multi-line-chart.tsx

```tsx
import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, MultiLineChartProps } from "../../types";
import { useMultiLineChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { useVisibleChartSeries } from "../../hooks/use-visible-chart-series.hook";
import { getChartColor } from "../../utils/chart-color.util";
import { createLineChartHitTargets } from "../../utils/chart-interaction.util";
import { createChartStrokeClip } from "../../utils/chart-layout.util";
import { createDrawableMultiLineChartSeries } from "../../utils/multi-line-chart.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Line } from "../primitives";

export const MultiLineChart = memo(function MultiLineChart<
  X extends ChartXValue = number,
>(props: MultiLineChartProps<X>) {
  const frame = useChartFrame(props);
  const { theme, tokens, layout } = frame;
  const series = useVisibleChartSeries(
    props.series,
    frame.presentation.hidden,
    "line",
  );
  const model = useMultiLineChart({ ...props, series, plot: layout.plot });

  const drawable = useMemo(
    () =>
      model.series.map((item, index) => ({
        ...createDrawableMultiLineChartSeries(item, index, layout.plot, tokens),
        clip: createChartStrokeClip(
          layout.plot,
          item.line?.width ?? tokens.line.width,
          frame.canvas.size,
        ),
      })),
    [model.series, layout.plot, tokens, frame.canvas.size],
  );
  const targets = useMemo(
    () =>
      drawable.flatMap((item) =>
        createLineChartHitTargets(
          item.coordinates,
          item.line?.color ?? getChartColor(item.id, tokens.palette),
          item.id,
          item.label ?? item.id,
          props.xAxis?.format,
        ),
      ),
    [drawable, tokens.palette, props.xAxis?.format],
  );
  const legendItems = useMemo(
    () =>
      props.series.map((item) => ({
        id: item.id,
        label: item.label ?? item.id,
        color: item.line?.color ?? getChartColor(item.id, tokens.palette),
      })),
    [props.series, tokens.palette],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      <ChartAxes
        {...props}
        layout={layout}
        theme={theme}
        xScale={model.xScale}
        xTicks={model.xTicks}
        yScale={model.yScale}
        yTicks={model.yTicks}
      />
      {drawable.map((item) => (
        <Group key={item.id} clip={item.clip}>
          <Line coordinates={item.coordinates} {...item.line} theme={theme} />
        </Group>
      ))}
    </ChartSurface>
  );
});
```

### packages/charts/src/components/multi-pie-chart/index.ts

```tsx
export { MultiPieChart } from "./multi-pie-chart";
```

### packages/charts/src/components/multi-pie-chart/multi-pie-chart.tsx

```tsx
import { useMemo } from "react";

import { memo } from "@impulse-ui-native/core";

import type { MultiPieChartProps } from "../../types";
import { useMultiPieChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { useVisibleChartSeries } from "../../hooks/use-visible-chart-series.hook";
import { getChartColor } from "../../utils/chart-color.util";
import { createPieChartHitTargets } from "../../utils/chart-interaction.util";
import { ChartSurface } from "../chart-surface";
import { Pie } from "../primitives";

export const MultiPieChart = memo(function MultiPieChart(
  props: MultiPieChartProps,
) {
  const frame = useChartFrame(props);
  const { theme, tokens, layout } = frame;
  const series = useVisibleChartSeries(
    props.series,
    frame.presentation.hidden,
    "slice",
  );
  const model = useMultiPieChart(
    { ...props, series, plot: layout.plot },
    tokens,
  );

  const targets = useMemo(
    () =>
      model.series.flatMap((item) =>
        createPieChartHitTargets(
          item.coordinates,
          item.slice?.colors ?? tokens.palette,
          item.id,
          item.label ?? item.id,
        ),
      ),
    [model.series, tokens.palette],
  );
  const legendItems = useMemo(
    () =>
      props.series.map((item) => {
        const colors = item.data
          .filter((datum) => Number.isFinite(datum.value) && datum.value > 0)
          .map(
            (datum) =>
              datum.color ??
              getChartColor(datum.id, item.slice?.colors ?? tokens.palette),
          );

        return {
          id: item.id,
          label: item.label ?? item.id,
          color: colors[0] ?? "transparent",
          colors,
        };
      }),
    [props.series, tokens.palette],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      {model.series.map((item) => (
        <Pie
          key={item.id}
          coordinates={item.coordinates}
          {...item.slice}
          theme={theme}
        />
      ))}
    </ChartSurface>
  );
});
```

### packages/charts/src/components/pie-chart/index.ts

```tsx
export { PieChart } from "./pie-chart";
```

### packages/charts/src/components/pie-chart/pie-chart.tsx

```tsx
import { useMemo } from "react";

import { memo } from "@impulse-ui-native/core";

import type { PieChartProps } from "../../types";
import { usePieChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import {
  createPieChartHitTargets,
  createPieChartLegend,
} from "../../utils/chart-interaction.util";
import { ChartSurface } from "../chart-surface";
import { Pie } from "../primitives";

export const PieChart = memo(function PieChart(props: PieChartProps) {
  const frame = useChartFrame(props);
  const { theme, layout, presentation } = frame;
  const data = useMemo(
    () =>
      props.data.map((datum) =>
        presentation.hidden.has(datum.id) ? { ...datum, value: 0 } : datum,
      ),
    [props.data, presentation.hidden],
  );
  const model = usePieChart({ ...props, data, plot: layout.plot });
  const colors = props.slice?.colors ?? theme.components.charts.palette;

  const targets = useMemo(
    () =>
      props.slice?.visible === false
        ? []
        : createPieChartHitTargets(model.coordinates, colors),
    [model.coordinates, colors, props.slice?.visible],
  );
  const legendItems = useMemo(
    () => createPieChartLegend(props.data, colors),
    [props.data, colors],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      <Pie coordinates={model.coordinates} {...props.slice} theme={theme} />
    </ChartSurface>
  );
});
```

### packages/charts/src/components/primitives/bar.tsx

```tsx
import { Group, RoundedRect } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import { BarDefaultOpacity, BarDefaultRadius } from "../../constants";
import { BarProps, ChartXValue } from "../../types";

export const Bar = memo(function Bar<X extends ChartXValue = string>(
  props: BarProps<X>,
) {
  const tokens = props.theme.components.charts;

  const {
    color = tokens.palette[0],
    coordinates,
    opacity = BarDefaultOpacity,
    radius = tokens.bar.radius ?? BarDefaultRadius,
    visible = true,
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <Group>
      {coordinates.map((coordinate) => {
        const resolvedRadius = Math.min(
          Math.max(0, radius),
          coordinate.width / 2,
          coordinate.height / 2,
        );

        return coordinate.height > 0 ? (
          <RoundedRect
            key={coordinate.index}
            x={coordinate.x}
            y={coordinate.y}
            width={coordinate.width}
            height={coordinate.height}
            r={resolvedRadius}
            color={color}
            opacity={opacity}
          />
        ) : null;
      })}
    </Group>
  );
});
```

### packages/charts/src/components/primitives/grid.tsx

```tsx
import { useMemo } from "react";
import { DashPathEffect, Group, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import { GridDefaultXVisible, GridDefaultYVisible } from "../../constants";
import { ChartXValue, GridProps } from "../../types";
import {
  createHorizontalGridPath,
  createVerticalGridPath,
  resolveGridLineOptions,
} from "../../utils";

export const Grid = memo(function Grid<
  X extends ChartXValue = number,
  Y extends ChartXValue = number,
>(props: GridProps<X, Y>) {
  const { options, plot, theme, xScale, xTicks, yScale, yTicks } = props;

  const xStyle = useMemo(
    () =>
      resolveGridLineOptions(
        options?.x,
        GridDefaultXVisible,
        theme.colors.border.subtle.value,
        theme.components.charts.grid.width,
      ),
    [
      options?.x,
      theme.colors.border.subtle.value,
      theme.components.charts.grid.width,
    ],
  );

  const yStyle = useMemo(
    () =>
      resolveGridLineOptions(
        options?.y,
        GridDefaultYVisible,
        theme.colors.border.subtle.value,
        theme.components.charts.grid.width,
      ),
    [
      options?.y,
      theme.colors.border.subtle.value,
      theme.components.charts.grid.width,
    ],
  );

  const xPath = useMemo(
    () =>
      xStyle.visible ? createVerticalGridPath(xTicks, xScale, plot) : null,
    [plot, xScale, xTicks, xStyle.visible],
  );

  const yPath = useMemo(
    () =>
      yStyle.visible ? createHorizontalGridPath(yTicks, yScale, plot) : null,
    [plot, yScale, yTicks, yStyle.visible],
  );

  const showXGrid = xStyle.visible && xPath;
  const showYGrid = yStyle.visible && yPath;

  return (
    <Group>
      {showXGrid ? (
        <Path
          path={xPath}
          color={xStyle.color}
          opacity={xStyle.opacity}
          strokeWidth={xStyle.width}
          style="stroke"
        >
          {xStyle.dash?.length ? (
            <DashPathEffect intervals={[...xStyle.dash]} />
          ) : null}
        </Path>
      ) : null}

      {showYGrid ? (
        <Path
          path={yPath}
          color={yStyle.color}
          opacity={yStyle.opacity}
          strokeWidth={yStyle.width}
          style="stroke"
        >
          {yStyle.dash?.length ? (
            <DashPathEffect intervals={[...yStyle.dash]} />
          ) : null}
        </Path>
      ) : null}
    </Group>
  );
});
```

### packages/charts/src/components/primitives/index.ts

```tsx
export { Bar } from "./bar";
export { Grid } from "./grid";
export { Label } from "./label";
export { Line } from "./line";
export { Pie } from "./pie";
export { XAxis } from "./x-axis";
export { YAxis } from "./y-axis";
```

### packages/charts/src/components/primitives/label.tsx

```tsx
import { useMemo } from "react";
import {
  Group,
  Paragraph,
  Skia,
  SkTextFontFeatures,
  SkTextStyle,
} from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  LabelDefaultHorizontalAlignment,
  LabelDefaultVerticalAlignment,
  TabularNumsFeature,
} from "../../constants";
import { LabelProps } from "../../types";
import {
  createParagraphBuilder,
  getLabelTextAlign,
  getLabelY,
} from "../../utils";
import { normalizeChartNumber } from "../../utils/chart-number.util";
import { resolveChartLabelTokens } from "../../utils/chart-theme.util";

export const Label = memo(function Label(props: LabelProps) {
  const {
    color,
    fontManager,
    fontSize,
    fontFamily,
    fontWeight,
    horizontalAlign = LabelDefaultHorizontalAlignment,
    rect,
    rotation = 0,
    text,
    theme,
    tnum,
    maxLines = 1,
    verticalAlign = LabelDefaultVerticalAlignment,
  } = props;

  const typography = resolveChartLabelTokens(theme);
  const resolvedColor = color ?? typography.color;
  const resolvedFontSize = normalizeChartNumber(
    fontSize,
    typography.fontSize,
    1,
  );
  const resolvedFontFamily = fontFamily ?? typography.fontFamily;
  const resolvedFontWeight = fontWeight ?? typography.fontWeight;
  const resolvedMaxLines = Math.floor(normalizeChartNumber(maxLines, 1, 1));

  const paragraph = useMemo(() => {
    const fontFeatures: SkTextFontFeatures[] = [];

    if (tnum) {
      fontFeatures.push(TabularNumsFeature);
    }

    const textStyle: SkTextStyle = {
      color: Skia.Color(resolvedColor),
      fontSize: resolvedFontSize,
      fontFeatures,
      fontFamilies: [resolvedFontFamily],
      fontStyle: { weight: resolvedFontWeight },
    };

    const result = createParagraphBuilder({
      paragraphStyle: {
        ellipsis: "\u2026",
        maxLines: resolvedMaxLines,
        textAlign: getLabelTextAlign(horizontalAlign),
      },
      typefaceProvider: fontManager,
    })
      .pushStyle(textStyle)
      .addText(text)
      .pop()
      .build();

    result.layout(normalizeChartNumber(rect.width, 0));

    return result;
  }, [
    resolvedColor,
    fontManager,
    resolvedFontFamily,
    resolvedFontSize,
    resolvedFontWeight,
    horizontalAlign,
    rect.width,
    text,
    tnum,
    resolvedMaxLines,
  ]);

  const rotationProps = useMemo(
    () => ({
      origin: {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      },
      transform: [{ rotate: (rotation * Math.PI) / 180 }],
    }),
    [rect.height, rect.width, rect.x, rect.y, rotation],
  );

  if (!paragraph) {
    return null;
  }

  const y = getLabelY(rect, paragraph.getHeight(), verticalAlign);

  return (
    <Group origin={rotationProps.origin} transform={rotationProps.transform}>
      <Paragraph paragraph={paragraph} x={rect.x} y={y} width={rect.width} />
    </Group>
  );
});
```

### packages/charts/src/components/primitives/line.tsx

```tsx
import { useMemo } from "react";
import {
  Circle,
  DashPathEffect,
  Group,
  Path,
} from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  LineDefaultCap,
  LineDefaultCurve,
  LineDefaultJoin,
  LineDefaultOpacity,
} from "../../constants";
import { ChartXValue, LineProps } from "../../types";
import { createLinePath } from "../../utils";
import { getIsolatedLineCoordinates } from "../../utils/line-coordinates.util";

export const Line = memo(function Line<X extends ChartXValue = number>(
  props: LineProps<X>,
) {
  const tokens = props.theme.components.charts;

  const {
    cap = LineDefaultCap,
    color = tokens.palette[0],
    coordinates,
    curve = LineDefaultCurve,
    dash,
    join = LineDefaultJoin,
    opacity = LineDefaultOpacity,
    visible = true,
    width = tokens.line.width,
  } = props;

  const path = useMemo(
    () => (visible ? createLinePath(coordinates, curve) : null),
    [coordinates, curve, visible],
  );

  const isolated = useMemo(
    () => (visible ? getIsolatedLineCoordinates(coordinates) : []),
    [coordinates, visible],
  );

  if (!visible) {
    return null;
  }

  return (
    <Group>
      {path ? (
        <Path
          path={path}
          color={color}
          opacity={opacity}
          strokeWidth={width}
          style="stroke"
          strokeCap={cap}
          strokeJoin={join}
        >
          {dash?.length ? <DashPathEffect intervals={[...dash]} /> : null}
        </Path>
      ) : null}
      {isolated.map((coordinate) => (
        <Circle
          key={coordinate.index}
          cx={coordinate.x!}
          cy={coordinate.y!}
          r={Math.max(0, width / 2)}
          color={color}
          opacity={opacity}
        />
      ))}
    </Group>
  );
});
```

### packages/charts/src/components/primitives/pie.tsx

```tsx
import { useMemo } from "react";
import { Group, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  PieDefaultCornerRadius,
  PieDefaultOpacity,
  PieDefaultStrokeWidth,
} from "../../constants";
import { PieProps } from "../../types";
import { createPieSlicePath } from "../../utils";
import { getChartColor } from "../../utils/chart-color.util";

export const Pie = memo(function Pie(props: PieProps) {
  const tokens = props.theme.components.charts;

  const {
    colors = tokens.palette,
    coordinates,
    cornerRadius = tokens.pie.cornerRadius ?? PieDefaultCornerRadius,
    opacity = PieDefaultOpacity,
    strokeColor,
    strokeWidth = PieDefaultStrokeWidth,
    visible = true,
  } = props;

  const slices = useMemo(
    () =>
      visible
        ? coordinates.map((coordinate) => ({
            color:
              coordinate.datum.color ??
              getChartColor(coordinate.datum.id, colors),
            coordinate,
            path: createPieSlicePath(coordinate, cornerRadius),
          }))
        : [],
    [colors, coordinates, cornerRadius, visible],
  );

  if (!visible) {
    return null;
  }

  return (
    <Group>
      {slices.map(({ color, coordinate, path }) => {
        const showStroke = strokeColor && strokeWidth > 0;

        return path ? (
          <Group
            key={coordinate.datum.id}
            transform={[
              { translateX: coordinate.center.x },
              { translateY: coordinate.center.y },
            ]}
          >
            <Path path={path} color={color} opacity={opacity} />
            {showStroke ? (
              <Path
                path={path}
                color={strokeColor}
                opacity={opacity}
                style="stroke"
                strokeWidth={strokeWidth}
              />
            ) : null}
          </Group>
        ) : null;
      })}
    </Group>
  );
});
```

### packages/charts/src/components/primitives/x-axis.tsx

```tsx
import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, XAxisProps } from "../../types";
import { ChartAxis } from "./chart-axis";

export const XAxis = memo(function XAxis<X extends ChartXValue = number>(
  props: XAxisProps<X>,
) {
  return <ChartAxis {...props} orientation="horizontal" />;
});
```

### packages/charts/src/components/primitives/y-axis.tsx

```tsx
import { memo } from "@impulse-ui-native/core";

import type { YAxisProps } from "../../types";
import { ChartAxis } from "./chart-axis";

export const YAxis = memo(function YAxis<Value = number>(
  props: YAxisProps<Value>,
) {
  return <ChartAxis {...props} orientation="vertical" />;
});
```

### packages/charts/src/constants/axis.constants.ts

```tsx
import { DefaultChartsTokens } from "./charts.constants";

export const AxisDefaultWidth = DefaultChartsTokens.axis.width;
export const AxisDefaultOpacity = 1;
export const AxisDefaultTickLength = DefaultChartsTokens.axis.tickLength;
export const AxisDefaultLabelGap = DefaultChartsTokens.axis.labelGap;
```

### packages/charts/src/constants/bar-chart.constants.ts

```tsx
import { DefaultChartsTokens } from "./charts.constants";

export const BarChartDefaultCategoryPadding =
  DefaultChartsTokens.bar.categoryPadding;
export const MultiBarChartDefaultSeriesPadding =
  DefaultChartsTokens.bar.seriesPadding;
```

### packages/charts/src/constants/bar.constants.ts

```tsx
import { DefaultChartsTokens } from "./charts.constants";

export const BarDefaultColor = DefaultChartsTokens.palette[0];
export const BarDefaultColors = DefaultChartsTokens.palette;
export const BarDefaultOpacity = 1;
export const BarDefaultRadius = 0;
```

### packages/charts/src/constants/chart-layout.constants.ts

```tsx
import type { ChartInsets } from "../types";
import { DefaultChartsTokens } from "./charts.constants";

export const CartesianChartDefaultInsets: ChartInsets =
  DefaultChartsTokens.insets;
```

### packages/charts/src/constants/charts.constants.ts

```tsx
import { createChartsTokens, LightTheme } from "@impulse-ui-native/theme";

/** Defaults for pure utilities and hooks without an explicit token argument. */
export const DefaultChartsTokens = createChartsTokens(LightTheme);
```

### packages/charts/src/constants/grid.constants.ts

```tsx
import { DefaultChartsTokens } from "./charts.constants";

export const GridDefaultWidth = DefaultChartsTokens.grid.width;
export const GridDefaultOpacity = 1;
export const GridDefaultXVisible = true;
export const GridDefaultYVisible = true;
```

### packages/charts/src/constants/index.ts

```tsx
export * from "./axis.constants";
export * from "./charts.constants";
export * from "./bar.constants";
export * from "./bar-chart.constants";
export * from "./chart-layout.constants";
export * from "./grid.constants";
export * from "./label.constants";
export * from "./line.constants";
export * from "./line-chart.constants";
export * from "./pie.constants";
```

### packages/charts/src/constants/label.constants.ts

```tsx
import { SkTextFontFeatures } from "@shopify/react-native-skia";

import { LabelHorizontalAlignment, LabelVerticalAlignment } from "../types";

export const TabularNumsFeature: SkTextFontFeatures = {
  name: "tnum",
  value: 1,
};

export const LabelDefaultHorizontalAlignment: LabelHorizontalAlignment = "left";
export const LabelDefaultVerticalAlignment: LabelVerticalAlignment = "top";
```

### packages/charts/src/constants/line-chart.constants.ts

```tsx
import { ChartNumericDomain } from "../types";

export const LineChartDefaultTickCount = 5;

export const LineChartDefaultNumericDomain: ChartNumericDomain = [0, 1];
```

### packages/charts/src/constants/line.constants.ts

```tsx
import { ChartStrokeCap, ChartStrokeJoin, LineChartCurve } from "../types";
import { DefaultChartsTokens } from "./charts.constants";

export const LineDefaultColor = DefaultChartsTokens.palette[0];
export const LineDefaultColors = DefaultChartsTokens.palette;
export const LineDefaultWidth = DefaultChartsTokens.line.width;
export const LineDefaultOpacity = 1;
export const LineDefaultCurve: LineChartCurve = "linear";
export const LineDefaultCap: ChartStrokeCap = "round";
export const LineDefaultJoin: ChartStrokeJoin = "round";
```

### packages/charts/src/constants/pie.constants.ts

```tsx
import { DefaultChartsTokens } from "./charts.constants";

export const PieDefaultColors = DefaultChartsTokens.palette;
export const PieDefaultColor = DefaultChartsTokens.palette[0];
export const PieDefaultOpacity = 1;
export const PieDefaultInnerRadius = 0;
export const PieDefaultOuterRadius = 1;
export const PieDefaultPadAngle = 0;
export const PieDefaultStartAngle = 0;
export const PieDefaultEndAngle = 360;
export const PieDefaultCornerRadius = 0;
export const PieDefaultStrokeWidth = 0;
export const MultiPieDefaultRingPadding = DefaultChartsTokens.pie.ringPadding;
```

### packages/charts/src/hooks/index.ts

```tsx
export { useBarChart } from "./use-bar-chart.hook";
export { useChartCanvas } from "./use-chart-canvas.hook";
export { useChartLayout } from "./use-chart-layout.hook";
export { useChartPresentation } from "./use-chart-presentation.hook";
export { useLineChart } from "./use-line-chart.hook";
export { useMultiBarChart } from "./use-multi-bar-chart.hook";
export { useMultiLineChart } from "./use-multi-line-chart.hook";
export { useMultiPieChart } from "./use-multi-pie-chart.hook";
export { usePieChart } from "./use-pie-chart.hook";
```

### packages/charts/src/hooks/use-bar-chart.hook.ts

```tsx
import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type {
  ChartXValue,
  UseBarChartProps,
  UseBarChartResult,
} from "../types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import {
  createBarChartModel,
  normalizeBarChartPadding,
} from "../utils/bar-chart.util";

export function useBarChart<X extends ChartXValue = string>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseBarChartResult<X> {
  const { data, plot, orientation } = props;
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    tokens.bar.categoryPadding,
  );
  const xTickCount = props.xAxis?.tickCount;
  const yTickCount = props.yAxis?.tickCount;
  const yDomain = props.yAxis?.domain;

  return useMemo(
    () =>
      createBarChartModel({
        data,
        plot,
        orientation,
        categoryPadding,
        xAxis: { tickCount: xTickCount },
        yAxis: { tickCount: yTickCount, domain: yDomain },
      }),
    [data, plot, orientation, categoryPadding, xTickCount, yTickCount, yDomain],
  );
}
```

### packages/charts/src/hooks/use-chart-canvas.hook.ts

```tsx
import type { LayoutChangeEvent } from "react-native";
import { useMemo, useState } from "react";
import { useCanvasRef, useCanvasSize } from "@shopify/react-native-skia";

import { useEventCallback } from "@impulse-ui-native/core";

import type { ChartSize } from "../types";

export function useChartCanvas() {
  const [layoutSize, setLayoutSize] = useState<ChartSize | null>(null);
  const ref = useCanvasRef();
  const { size: initialSize } = useCanvasSize(ref);
  const size = layoutSize ?? initialSize;

  const onLayout = useEventCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    setLayoutSize((previous) =>
      previous?.width === width && previous.height === height
        ? previous
        : { width, height },
    );
  });

  return useMemo(() => ({ ref, size, onLayout }), [ref, size, onLayout]);
}
```

### packages/charts/src/hooks/use-chart-layout.hook.ts

```tsx
import { useMemo } from "react";

import { ChartInsets, ChartLayout, ChartSize } from "../types";
import { createChartLayout } from "../utils/chart-layout.util";

export function useChartLayout(
  size: ChartSize,
  insets?: Partial<ChartInsets>,
  defaultInsets?: Partial<ChartInsets>,
): ChartLayout {
  return useMemo(
    () => createChartLayout(size, insets, defaultInsets),
    [defaultInsets, insets, size],
  );
}
```

### packages/charts/src/hooks/use-chart-presentation.hook.ts

```tsx
import { useMemo } from "react";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type {
  ChartHitTarget,
  ChartPoint,
  ChartPresentationProps,
  ChartRect,
  ChartSelection,
} from "../types";
import {
  findChartHitTarget,
  isSameChartSelection,
} from "../utils/chart-interaction.util";

export function useChartPresentation(props: ChartPresentationProps) {
  const [selection, setSelection] = useControllableState<ChartSelection | null>(
    {
      prop: props.selection,
      defaultProp: props.defaultSelection ?? null,
      onChange: props.onSelectionChange,
    },
  );
  const [hiddenIds, setHiddenIds] = useControllableState<readonly string[]>({
    prop: props.hiddenIds,
    defaultProp: props.defaultHiddenIds ?? [],
    onChange: props.onHiddenIdsChange,
  });

  const hidden = useMemo(() => new Set(hiddenIds), [hiddenIds]);

  const selectAt = useEventCallback(
    (
      point: ChartPoint,
      targets: readonly ChartHitTarget[],
      plot: ChartRect,
      clearOnMiss = true,
    ) => {
      const target = findChartHitTarget(point, targets, plot);

      if (!target && !clearOnMiss) {
        return false;
      }

      const next = target?.selection ?? null;

      setSelection((previous) =>
        isSameChartSelection(previous, next) ? previous : next,
      );

      return target !== null;
    },
  );
  const clearSelection = useEventCallback(() => setSelection(null));

  const toggle = useEventCallback((id: string) => {
    setHiddenIds((previous) =>
      previous.includes(id)
        ? previous.filter((value) => value !== id)
        : [...previous, id],
    );
  });

  return useMemo(
    () => ({ selection, hiddenIds, hidden, selectAt, clearSelection, toggle }),
    [selection, hiddenIds, hidden, selectAt, clearSelection, toggle],
  );
}
```

### packages/charts/src/hooks/use-line-chart.hook.ts

```tsx
import { useMemo } from "react";

import type {
  ChartXValue,
  UseLineChartProps,
  UseLineChartResult,
} from "../types";
import { createLineChartCoordinates } from "../utils/line-chart.util";
import { useLineChartScale } from "./use-line-chart-scale.hook";

export function useLineChart<X extends ChartXValue = number>(
  props: UseLineChartProps<X>,
): UseLineChartResult<X> {
  const model = useLineChartScale(props);
  const { data } = props;
  const coordinates = useMemo(
    () => createLineChartCoordinates(data, model.xScale, model.yScale),
    [data, model.xScale, model.yScale],
  );

  return useMemo(() => ({ ...model, coordinates }), [model, coordinates]);
}
```

### packages/charts/src/hooks/use-multi-bar-chart.hook.ts

```tsx
import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type {
  ChartXValue,
  UseMultiBarChartProps,
  UseMultiBarChartResult,
} from "../types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import { normalizeBarChartPadding } from "../utils/bar-chart.util";
import { createMultiBarChartModel } from "../utils/multi-bar-chart.util";

export function useMultiBarChart<X extends ChartXValue = string>(
  props: UseMultiBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiBarChartResult<X> {
  const { series, plot, orientation, mode } = props;
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    tokens.bar.categoryPadding,
  );
  const seriesPadding = normalizeBarChartPadding(
    props.seriesPadding,
    tokens.bar.seriesPadding,
  );
  const xTickCount = props.xAxis?.tickCount;
  const yTickCount = props.yAxis?.tickCount;
  const yDomain = props.yAxis?.domain;

  return useMemo(
    () =>
      createMultiBarChartModel({
        series,
        plot,
        orientation,
        mode,
        categoryPadding,
        seriesPadding,
        xAxis: { tickCount: xTickCount },
        yAxis: { tickCount: yTickCount, domain: yDomain },
      }),
    [
      series,
      plot,
      orientation,
      mode,
      categoryPadding,
      seriesPadding,
      xTickCount,
      yTickCount,
      yDomain,
    ],
  );
}
```

### packages/charts/src/hooks/use-multi-line-chart.hook.ts

```tsx
import { useMemo } from "react";

import {
  ChartXValue,
  UseMultiLineChartProps,
  UseMultiLineChartResult,
} from "../types";
import { createLineChartCoordinates } from "../utils/line-chart.util";
import { useLineChartScale } from "./use-line-chart-scale.hook";

export function useMultiLineChart<X extends ChartXValue = number>(
  props: UseMultiLineChartProps<X>,
): UseMultiLineChartResult<X> {
  const { plot, series, xAxis, xScaleType, yAxis } = props;

  const data = useMemo(
    () => series.flatMap((currentSeries) => currentSeries.data),
    [series],
  );

  const { xDomain, xScale, xTicks, yDomain, yScale, yTicks } =
    useLineChartScale({ data, plot, xAxis, xScaleType, yAxis });

  const seriesModels = useMemo(
    () =>
      series.map((currentSeries) => ({
        ...currentSeries,
        coordinates: createLineChartCoordinates(
          currentSeries.data,
          xScale,
          yScale,
        ),
      })),
    [series, xScale, yScale],
  );

  return useMemo(
    () => ({
      series: seriesModels,
      xDomain,
      xScale,
      xTicks,
      yDomain,
      yScale,
      yTicks,
    }),
    [seriesModels, xDomain, xScale, xTicks, yDomain, yScale, yTicks],
  );
}
```

### packages/charts/src/hooks/use-multi-pie-chart.hook.ts

```tsx
import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { UseMultiPieChartProps, UseMultiPieChartResult } from "../types";
import { createMultiPieChartModel } from "../utils";
import { normalizeChartNumber } from "../utils/chart-number.util";

export function useMultiPieChart(
  props: UseMultiPieChartProps,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiPieChartResult {
  const {
    endAngle,
    innerRadius,
    outerRadius,
    padAngle,
    plot,
    series,
    startAngle,
  } = props;

  const ringPadding = normalizeChartNumber(
    props.ringPadding,
    tokens.pie.ringPadding,
  );

  return useMemo(
    () =>
      createMultiPieChartModel({
        endAngle,
        innerRadius,
        outerRadius,
        padAngle,
        plot,
        ringPadding,
        series,
        startAngle,
      }),
    [
      endAngle,
      innerRadius,
      outerRadius,
      padAngle,
      plot,
      ringPadding,
      series,
      startAngle,
    ],
  );
}
```

### packages/charts/src/hooks/use-pie-chart.hook.ts

```tsx
import { useMemo } from "react";

import { UsePieChartProps, UsePieChartResult } from "../types";
import { createPieChartModel } from "../utils";

export function usePieChart(props: UsePieChartProps): UsePieChartResult {
  const {
    data,
    endAngle,
    innerRadius,
    outerRadius,
    padAngle,
    plot,
    startAngle,
  } = props;

  return useMemo(
    () =>
      createPieChartModel({
        data,
        endAngle,
        innerRadius,
        outerRadius,
        padAngle,
        plot,
        startAngle,
      }),
    [data, endAngle, innerRadius, outerRadius, padAngle, plot, startAngle],
  );
}
```

### packages/charts/src/index.ts

```tsx
export * from "./components";
export * from "./constants";
export * from "./hooks";
export * from "./types";
export * from "./utils";
```

### packages/charts/src/types/axis.types.ts

```tsx
import { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import { AppTheme } from "@impulse-ui-native/theme";

import { ChartAxisOptions, ChartPoint, ChartRect } from "./common.types";
import { ChartXValue, LineChartScale } from "./line-chart.types";

export interface AxisTick<Value> {
  value: Value;
  position: number;
}

export interface AxisLineLayout {
  start: ChartPoint;
  end: ChartPoint;
}

export interface AxisTickLayout<Value> extends AxisTick<Value>, AxisLineLayout {
  labelRect: ChartRect;
}

export interface AxisLayout<Value> {
  line: AxisLineLayout;
  ticks: readonly AxisTickLayout<Value>[];
}

export interface CreateAxisLayoutProps<Value> {
  values: readonly Value[];
  scale: LineChartScale<Value>;
  plot: ChartRect;
  region: ChartRect;
  tickLength: number;
  labelGap: number;
}

export interface CreateYAxisLayoutProps<
  Value = number,
> extends CreateAxisLayoutProps<Value> {
  fontSize: number;
}

export interface AxisProps<Value> {
  ticks: readonly Value[];
  scale: LineChartScale<Value>;
  plot: ChartRect;
  region: ChartRect;
  theme: AppTheme;
  options?: ChartAxisOptions<Value>;
  fontManager?: SkTypefaceFontProvider;
  lineVisible?: boolean;
  tickVisible?: boolean;
}

export interface XAxisProps<
  X extends ChartXValue = number,
> extends AxisProps<X> {}

export interface YAxisProps<Value = number> extends AxisProps<Value> {}
```

### packages/charts/src/types/bar-chart.types.ts

```tsx
import { ChartCartesianProps } from "./common.types";
import { ChartXValue } from "./line-chart.types";

export type BarChartOrientation = "vertical" | "horizontal";

export interface BarChartPoint<X extends ChartXValue = string> {
  x: X;
  y: number | null;
}

export interface BarChartCoordinate<X extends ChartXValue = string> {
  datum: BarChartPoint<X>;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BarChartBarOptions {
  visible?: boolean;
  color?: string;
  opacity?: number;
  radius?: number;
}

export interface BarChartCommonProps<
  X extends ChartXValue = string,
> extends ChartCartesianProps<X> {
  categoryPadding?: number;
  orientation?: BarChartOrientation;
}

export interface BarChartProps<
  X extends ChartXValue = string,
> extends BarChartCommonProps<X> {
  data: readonly BarChartPoint<X>[];
  bar?: BarChartBarOptions;
}
```

### packages/charts/src/types/bar.types.ts

```tsx
import type { AppTheme } from "@impulse-ui-native/theme";

import { BarChartBarOptions, BarChartCoordinate } from "./bar-chart.types";
import { ChartXValue } from "./line-chart.types";

export interface BarProps<
  X extends ChartXValue = string,
> extends BarChartBarOptions {
  coordinates: readonly BarChartCoordinate<X>[];
  theme: AppTheme;
}
```

### packages/charts/src/types/chart-interaction.types.ts

```tsx
import type { ReactNode } from "react";

import type { ViewProps } from "@impulse-ui-native/primitives";

import type { ChartPoint, ChartRect } from "./common.types";
import type { PieChartCoordinate } from "./pie-chart.types";

export interface ChartSelection {
  seriesId?: string;
  datumIndex: number;
}

export interface ChartSelectionDetails {
  selection: ChartSelection;
  label: string;
  value: number;
  color: string;
}

export interface ChartHitTarget extends ChartSelectionDetails, ChartPoint {
  categoryKey?: string;
  rect?: ChartRect;
  arc?: PieChartCoordinate;
}

export interface ChartLegendItem {
  id: string;
  label: string;
  color: string;
  colors?: readonly string[];
}

export interface ChartLegendProps {
  items: readonly ChartLegendItem[];
  hiddenIds?: readonly string[];
  onToggle?: (id: string) => void;
}

export interface ChartTooltipProps extends Omit<ViewProps, "children"> {
  details: readonly ChartSelectionDetails[];
}

export interface ChartPresentationProps {
  /** Enables native tap and drag selection. Off by default. */
  interactive?: boolean;
  selection?: ChartSelection | null;
  defaultSelection?: ChartSelection | null;
  onSelectionChange?: (selection: ChartSelection | null) => void;
  /** Displays selected details by default. A renderer can replace the tooltip. */
  tooltip?:
    boolean | ((details: readonly ChartSelectionDetails[]) => ReactNode);
  legend?: boolean;
  /** Series IDs for multi charts; datum IDs for PieChart. */
  hiddenIds?: readonly string[];
  defaultHiddenIds?: readonly string[];
  onHiddenIdsChange?: (ids: readonly string[]) => void;
  emptyContent?: ReactNode;
}
```

### packages/charts/src/types/chart-scale.types.ts

```tsx
import type { ChartNumericDomain } from "./common.types";
import type { ChartXValue, LineChartScale } from "./line-chart.types";

export interface ChartCartesianScaleModel<X extends ChartXValue> {
  xDomain: readonly X[];
  yDomain: ChartNumericDomain;
  xTicks: readonly X[];
  yTicks: readonly number[];
  xScale: LineChartScale<X>;
  yScale: LineChartScale<number>;
}

export interface ChartNumericScaleModel {
  domain: ChartNumericDomain;
  ticks: readonly number[];
  scale: LineChartScale<number>;
}

export interface BarChartScaleModel<
  X extends ChartXValue,
> extends ChartCartesianScaleModel<X> {
  xStartScale: LineChartScale<X>;
  bandwidth: number;
  baseline: number;
}
```

### packages/charts/src/types/common.types.ts

```tsx
import type { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import type { ChartPresentationProps } from "./chart-interaction.types";
import type { ChartGridOptions } from "./grid.types";
import { ChartLabelStyle, ChartStrokeStyle } from "./style.types";

export type ChartScaleType = "linear" | "point" | "time";

export type ChartNumericDomain = readonly [minimum: number, maximum: number];

export interface ChartInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ChartSize {
  width: number;
  height: number;
}

export interface ChartPoint {
  x: number;
  y: number;
}

export interface ChartRect extends ChartSize {
  x: number;
  y: number;
}

export interface ChartLayout {
  size: ChartSize;
  insets: ChartInsets;
  plot: ChartRect;
  xAxis: ChartRect;
  yAxis: ChartRect;
}

export interface ChartAxisOptions<Value> {
  visible?: boolean;
  tickCount?: number;
  format?: (value: Value) => string;
  line?: ChartAxisLineOptions;
  tick?: ChartAxisTickOptions;
  label?: ChartAxisLabelOptions;
}

export interface ChartAxisLineOptions extends ChartStrokeStyle {
  visible?: boolean;
}

export interface ChartAxisTickOptions extends ChartStrokeStyle {
  visible?: boolean;
  length?: number;
}

export interface ChartAxisLabelOptions extends ChartLabelStyle {
  visible?: boolean;
  gap?: number;
  rotation?: number;
}

export interface ChartXAxisOptions<X> extends ChartAxisOptions<X> {}

export interface ChartYAxisOptions extends ChartAxisOptions<number> {
  domain?: ChartNumericDomain;
}

export interface ChartContainerProps extends ChartPresentationProps {
  insets?: Partial<ChartInsets>;
}

export interface ChartCartesianProps<X> extends ChartContainerProps {
  fontManager?: SkTypefaceFontProvider;
  grid?: ChartGridOptions;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
}
```

### packages/charts/src/types/grid.types.ts

```tsx
import { AppTheme } from "@impulse-ui-native/theme";

import { ChartRect } from "./common.types";
import { ChartXValue, LineChartScale } from "./line-chart.types";
import { ChartStrokeStyle } from "./style.types";

export interface ChartGridLineOptions extends ChartStrokeStyle {
  visible?: boolean;
}

export interface ChartGridOptions {
  x?: boolean | ChartGridLineOptions;
  y?: boolean | ChartGridLineOptions;
}

export interface ResolvedGridLineOptions {
  visible: boolean;
  color: string;
  width: number;
  opacity: number;
  dash?: readonly number[];
}

export interface GridProps<
  X extends ChartXValue = number,
  Y extends ChartXValue = number,
> {
  options?: ChartGridOptions;
  plot: ChartRect;
  theme: AppTheme;
  xTicks: readonly X[];
  xScale: LineChartScale<X>;
  yTicks: readonly Y[];
  yScale: LineChartScale<Y>;
}
```

### packages/charts/src/types/index.ts

```tsx
export * from "./axis.types";
export * from "./bar-chart.types";
export * from "./bar.types";
export * from "./chart-interaction.types";
export * from "./chart-scale.types";
export * from "./common.types";
export * from "./grid.types";
export * from "./label.types";
export * from "./line-chart.types";
export * from "./line.types";
export * from "./multi-bar-chart.types";
export * from "./multi-line-chart.types";
export * from "./multi-pie-chart.types";
export * from "./pie-chart.types";
export * from "./pie.types";
export * from "./style.types";
export * from "./use-bar-chart.types";
export * from "./use-line-chart.types";
export * from "./use-multi-bar-chart.types";
export * from "./use-multi-line-chart.types";
export * from "./use-multi-pie-chart.types";
export * from "./use-pie-chart.types";
```

### packages/charts/src/types/label.types.ts

```tsx
import { FontWeight, SkTypefaceFontProvider } from "@shopify/react-native-skia";

import { AppTheme } from "@impulse-ui-native/theme";

import { ChartRect } from "./common.types";

export type LabelHorizontalAlignment = "left" | "center" | "right";

export type LabelVerticalAlignment = "top" | "center" | "bottom";

export interface LabelProps {
  text: string;
  rect: ChartRect;
  theme: AppTheme;
  horizontalAlign?: LabelHorizontalAlignment;
  verticalAlign?: LabelVerticalAlignment;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  fontManager?: SkTypefaceFontProvider;
  maxLines?: number;
  rotation?: number;
  tnum?: boolean;
}
```

### packages/charts/src/types/line-chart.types.ts

```tsx
import { ChartCartesianProps, ChartScaleType } from "./common.types";
import {
  ChartStrokeCap,
  ChartStrokeJoin,
  ChartStrokeStyle,
} from "./style.types";

export type ChartXValue = number | string | Date;

export type LineChartCurve = "linear" | "monotone";

export type LineChartScale<Value> = (value: Value) => number | undefined;

export interface LineChartPoint<X extends ChartXValue = number> {
  x: X;
  y: number | null;
}

export interface LineChartCoordinate<X extends ChartXValue = number> {
  datum: LineChartPoint<X>;
  index: number;
  x: number | null;
  y: number | null;
}

export interface LineChartLineOptions extends ChartStrokeStyle {
  visible?: boolean;
  curve?: LineChartCurve;
  cap?: ChartStrokeCap;
  join?: ChartStrokeJoin;
}

export interface LineChartCommonProps<
  X extends ChartXValue = number,
> extends ChartCartesianProps<X> {
  xScaleType?: ChartScaleType;
}

export interface LineChartProps<
  X extends ChartXValue = number,
> extends LineChartCommonProps<X> {
  data: readonly LineChartPoint<X>[];
  line?: LineChartLineOptions;
}
```

### packages/charts/src/types/line.types.ts

```tsx
import type { AppTheme } from "@impulse-ui-native/theme";

import {
  ChartXValue,
  LineChartCoordinate,
  LineChartLineOptions,
} from "./line-chart.types";

export interface LineProps<
  X extends ChartXValue = number,
> extends LineChartLineOptions {
  coordinates: readonly LineChartCoordinate<X>[];
  theme: AppTheme;
}
```

### packages/charts/src/types/multi-bar-chart.types.ts

```tsx
import {
  BarChartBarOptions,
  BarChartCommonProps,
  BarChartCoordinate,
  BarChartPoint,
} from "./bar-chart.types";
import { ChartXValue } from "./line-chart.types";

export interface MultiBarChartSeries<X extends ChartXValue = string> {
  id: string;
  label?: string;
  data: readonly BarChartPoint<X>[];
  bar?: BarChartBarOptions;
}

export interface MultiBarChartSeriesModel<
  X extends ChartXValue = string,
> extends MultiBarChartSeries<X> {
  coordinates: readonly BarChartCoordinate<X>[];
}

export interface MultiBarChartProps<
  X extends ChartXValue = string,
> extends BarChartCommonProps<X> {
  series: readonly MultiBarChartSeries<X>[];
  seriesPadding?: number;
  mode?: "grouped" | "stacked";
}
```

### packages/charts/src/types/multi-line-chart.types.ts

```tsx
import { AppTheme } from "@impulse-ui-native/theme";

import { ChartSize } from "./common.types";
import {
  ChartXValue,
  LineChartCommonProps,
  LineChartCoordinate,
  LineChartLineOptions,
  LineChartPoint,
} from "./line-chart.types";

export interface MultiLineChartSeries<X extends ChartXValue = number> {
  id: string;
  label?: string;
  data: readonly LineChartPoint<X>[];
  line?: LineChartLineOptions;
}

export interface MultiLineChartSeriesModel<
  X extends ChartXValue = number,
> extends MultiLineChartSeries<X> {
  coordinates: readonly LineChartCoordinate<X>[];
}

export interface MultiLineChartProps<
  X extends ChartXValue = number,
> extends LineChartCommonProps<X> {
  series: readonly MultiLineChartSeries<X>[];
}

export interface MultiLineChartBodyProps<
  X extends ChartXValue = number,
> extends MultiLineChartProps<X> {
  size: ChartSize;
  theme: AppTheme;
}
```

### packages/charts/src/types/multi-pie-chart.types.ts

```tsx
import {
  PieChartCommonProps,
  PieChartCoordinate,
  PieChartPoint,
  PieChartSliceOptions,
} from "./pie-chart.types";

export interface MultiPieChartSeries {
  id: string;
  label?: string;
  data: readonly PieChartPoint[];
  slice?: PieChartSliceOptions;
}

export interface MultiPieChartSeriesModel extends MultiPieChartSeries {
  coordinates: readonly PieChartCoordinate[];
  total: number;
}

export interface MultiPieChartProps extends PieChartCommonProps {
  series: readonly MultiPieChartSeries[];
  ringPadding?: number;
}
```

### packages/charts/src/types/pie-chart.types.ts

```tsx
import { ChartContainerProps, ChartPoint } from "./common.types";

export interface PieChartPoint {
  id: string;
  value: number;
  color?: string;
  label?: string;
}

export interface PieChartCoordinate {
  datum: PieChartPoint;
  index: number;
  center: ChartPoint;
  startAngle: number;
  endAngle: number;
  padAngle: number;
  padRadius: number;
  innerRadius: number;
  outerRadius: number;
}

export interface PieChartSliceOptions {
  visible?: boolean;
  colors?: readonly string[];
  opacity?: number;
  cornerRadius?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface PieChartCommonProps extends ChartContainerProps {
  innerRadius?: number;
  outerRadius?: number;
  padAngle?: number;
  startAngle?: number;
  endAngle?: number;
}

export interface PieChartProps extends PieChartCommonProps {
  data: readonly PieChartPoint[];
  slice?: PieChartSliceOptions;
}

export interface PieChartModel {
  coordinates: readonly PieChartCoordinate[];
  total: number;
}
```

### packages/charts/src/types/pie.types.ts

```tsx
import type { AppTheme } from "@impulse-ui-native/theme";

import { PieChartCoordinate, PieChartSliceOptions } from "./pie-chart.types";

export interface PieProps extends PieChartSliceOptions {
  coordinates: readonly PieChartCoordinate[];
  theme: AppTheme;
}
```

### packages/charts/src/types/style.types.ts

```tsx
import { FontWeight } from "@shopify/react-native-skia";

export type ChartStrokeCap = "butt" | "round" | "square";

export type ChartStrokeJoin = "bevel" | "miter" | "round";

export interface ChartStrokeStyle {
  color?: string;
  width?: number;
  opacity?: number;
  dash?: readonly number[];
}

export interface ChartLabelStyle {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  maxLines?: number;
}
```

### packages/charts/src/types/use-bar-chart.types.ts

```tsx
import type { ChartCartesianScaleModel } from "./chart-scale.types";
import {
  BarChartCoordinate,
  BarChartOrientation,
  BarChartPoint,
} from "./bar-chart.types";
import {
  ChartRect,
  ChartXAxisOptions,
  ChartYAxisOptions,
} from "./common.types";
import { ChartXValue } from "./line-chart.types";

export interface UseBarChartProps<X extends ChartXValue = string> {
  data: readonly BarChartPoint<X>[];
  plot: ChartRect;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
  categoryPadding?: number;
  orientation?: BarChartOrientation;
}

export interface UseBarChartResult<
  X extends ChartXValue = string,
> extends ChartCartesianScaleModel<X> {
  coordinates: readonly BarChartCoordinate<X>[];
  bandwidth: number;
}
```

### packages/charts/src/types/use-line-chart.types.ts

```tsx
import type { ChartCartesianScaleModel } from "./chart-scale.types";
import {
  ChartRect,
  ChartScaleType,
  ChartXAxisOptions,
  ChartYAxisOptions,
} from "./common.types";
import {
  ChartXValue,
  LineChartCoordinate,
  LineChartPoint,
  LineChartScale,
} from "./line-chart.types";

export interface UseLineChartProps<X extends ChartXValue = number> {
  data: readonly LineChartPoint<X>[];
  plot: ChartRect;
  xScaleType?: ChartScaleType;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
}

export interface UseLineChartResult<
  X extends ChartXValue = number,
> extends ChartCartesianScaleModel<X> {
  coordinates: readonly LineChartCoordinate<X>[];
}

export interface LineChartXScaleModel<X extends ChartXValue> {
  domain: readonly X[];
  ticks: readonly X[];
  scale: LineChartScale<X>;
}
```

### packages/charts/src/types/use-multi-bar-chart.types.ts

```tsx
import { ChartRect } from "./common.types";
import { ChartXValue } from "./line-chart.types";
import {
  MultiBarChartProps,
  MultiBarChartSeriesModel,
} from "./multi-bar-chart.types";
import { UseBarChartResult } from "./use-bar-chart.types";

export interface UseMultiBarChartProps<
  X extends ChartXValue = string,
> extends Pick<
  MultiBarChartProps<X>,
  | "categoryPadding"
  | "series"
  | "seriesPadding"
  | "xAxis"
  | "yAxis"
  | "orientation"
  | "mode"
> {
  plot: ChartRect;
}

export interface UseMultiBarChartResult<
  X extends ChartXValue = string,
> extends Omit<UseBarChartResult<X>, "coordinates"> {
  series: readonly MultiBarChartSeriesModel<X>[];
}
```

### packages/charts/src/types/use-multi-line-chart.types.ts

```tsx
import { ChartRect } from "./common.types";
import { ChartXValue } from "./line-chart.types";
import {
  MultiLineChartProps,
  MultiLineChartSeriesModel,
} from "./multi-line-chart.types";
import { UseLineChartResult } from "./use-line-chart.types";

export interface UseMultiLineChartProps<
  X extends ChartXValue = number,
> extends Pick<
  MultiLineChartProps<X>,
  "series" | "xAxis" | "xScaleType" | "yAxis"
> {
  plot: ChartRect;
}

export interface UseMultiLineChartResult<
  X extends ChartXValue = number,
> extends Omit<UseLineChartResult<X>, "coordinates"> {
  series: readonly MultiLineChartSeriesModel<X>[];
}
```

### packages/charts/src/types/use-multi-pie-chart.types.ts

```tsx
import { ChartRect } from "./common.types";
import {
  MultiPieChartProps,
  MultiPieChartSeriesModel,
} from "./multi-pie-chart.types";
import { PieChartCommonProps } from "./pie-chart.types";

export interface UseMultiPieChartProps
  extends
    Pick<
      PieChartCommonProps,
      "endAngle" | "innerRadius" | "outerRadius" | "padAngle" | "startAngle"
    >,
    Pick<MultiPieChartProps, "ringPadding" | "series"> {
  plot: ChartRect;
}

export interface UseMultiPieChartResult {
  series: readonly MultiPieChartSeriesModel[];
}
```

### packages/charts/src/types/use-pie-chart.types.ts

```tsx
import { ChartRect } from "./common.types";
import {
  PieChartCommonProps,
  PieChartModel,
  PieChartPoint,
} from "./pie-chart.types";

export interface UsePieChartProps extends Pick<
  PieChartCommonProps,
  "endAngle" | "innerRadius" | "outerRadius" | "padAngle" | "startAngle"
> {
  data: readonly PieChartPoint[];
  plot: ChartRect;
}

export type UsePieChartResult = PieChartModel;
```

### packages/charts/src/utils/axis.util.ts

```tsx
import {
  AxisLayout,
  AxisTick,
  ChartRect,
  CreateAxisLayoutProps,
  CreateYAxisLayoutProps,
  LineChartScale,
} from "../types";
import { formatChartXValue } from "./chart-format.util";

export function createAxisTicks<Value>(
  values: readonly Value[],
  scale: LineChartScale<Value>,
): AxisTick<Value>[] {
  return values.reduce<AxisTick<Value>[]>((ticks, value) => {
    const position = scale(value);

    if (position !== undefined && Number.isFinite(position)) {
      ticks.push({ value, position });
    }

    return ticks;
  }, []);
}

export function createXAxisLayout<Value>(
  props: CreateAxisLayoutProps<Value>,
): AxisLayout<Value> {
  const ticks = createAxisTicks(props.values, props.scale);
  const axisY = props.plot.y + props.plot.height;
  const labelOffset = props.tickLength + props.labelGap;

  return {
    line: {
      start: { x: props.plot.x, y: axisY },
      end: { x: props.plot.x + props.plot.width, y: axisY },
    },
    ticks: ticks.map((tick, index) => ({
      ...tick,
      start: { x: tick.position, y: axisY },
      end: { x: tick.position, y: axisY + props.tickLength },
      labelRect: createXAxisLabelRect(ticks, index, props.region, labelOffset),
    })),
  };
}

export function createYAxisLayout<Value = number>(
  props: CreateYAxisLayoutProps<Value>,
): AxisLayout<Value> {
  const ticks = createAxisTicks(props.values, props.scale);
  const axisX = props.plot.x;
  const labelWidth = props.region.width - props.tickLength - props.labelGap;

  return {
    line: {
      start: { x: axisX, y: props.plot.y },
      end: { x: axisX, y: props.plot.y + props.plot.height },
    },
    ticks: ticks.map((tick) => ({
      ...tick,
      start: { x: axisX - props.tickLength, y: tick.position },
      end: { x: axisX, y: tick.position },
      labelRect: createYAxisLabelRect(
        tick.position,
        props.region,
        labelWidth,
        props.fontSize,
      ),
    })),
  };
}

export function createXAxisLabelRect(
  ticks: readonly AxisTick<unknown>[],
  index: number,
  region: ChartRect,
  offset: number,
): ChartRect {
  const tick = ticks[index]!;
  const previous = ticks[index - 1];
  const next = ticks[index + 1];
  const previousSpacing = previous
    ? Math.abs(tick.position - previous.position)
    : next
      ? Math.abs(next.position - tick.position)
      : region.width;
  const nextSpacing = next
    ? Math.abs(next.position - tick.position)
    : previous
      ? Math.abs(tick.position - previous.position)
      : region.width;
  const width = Math.max(0, Math.min(previousSpacing, nextSpacing));

  return {
    x: tick.position - width / 2,
    y: region.y + offset,
    width,
    height: Math.max(0, region.height - offset),
  };
}

export function createYAxisLabelRect(
  position: number,
  region: ChartRect,
  width: number,
  fontSize: number,
): ChartRect {
  return {
    x: region.x,
    y: position - fontSize,
    width: Math.max(0, width),
    height: fontSize * 2,
  };
}

export function formatAxisTick<Value>(
  value: Value,
  format?: (value: Value) => string,
): string {
  return format
    ? format(value)
    : value instanceof Date
      ? formatChartXValue(value)
      : String(value);
}
```

### packages/charts/src/utils/bar-chart.util.ts

```tsx
import { extent } from "d3-array";
import { scaleBand } from "d3-scale";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type { BarChartScaleModel } from "../types/chart-scale.types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import { LineChartDefaultNumericDomain } from "../constants/line-chart.constants";
import {
  BarChartCoordinate,
  BarChartOrientation,
  BarChartPoint,
  ChartNumericDomain,
  ChartXValue,
  LineChartScale,
  UseBarChartProps,
  UseBarChartResult,
} from "../types";
import { createBarChartRectangle } from "./bar-geometry.util";
import {
  isFiniteChartCoordinate,
  normalizeChartNumber,
} from "./chart-number.util";
import { createChartNumericScale } from "./chart-scale.util";
import { getChartTickCount, selectChartTicks } from "./chart-ticks.util";
import {
  isValidChartXValue,
  normalizeNumericDomain,
} from "./numeric-domain.util";

export type { BarChartScaleModel } from "../types/chart-scale.types";

export function createBarChartModel<X extends ChartXValue>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseBarChartResult<X> {
  const model = createBarChartScaleModel(props, tokens);

  return {
    xDomain: model.xDomain,
    yDomain: model.yDomain,
    xTicks: model.xTicks,
    yTicks: model.yTicks,
    xScale: model.xScale,
    yScale: model.yScale,
    bandwidth: model.bandwidth,
    coordinates: createBarChartCoordinates(
      props.data,
      model.xStartScale,
      model.yScale,
      model.baseline,
      model.bandwidth,
      0,
      props.orientation,
    ),
  };
}

export function createBarChartCoordinates<X extends ChartXValue>(
  data: readonly BarChartPoint<X>[],
  xStartScale: LineChartScale<X>,
  yScale: LineChartScale<number>,
  baseline: number,
  width: number,
  offset = 0,
  orientation: BarChartOrientation = "vertical",
): BarChartCoordinate<X>[] {
  const baselineY = yScale(baseline);

  if (!isFiniteChartCoordinate(baselineY) || width <= 0) {
    return [];
  }

  return data.reduce<BarChartCoordinate<X>[]>((coordinates, datum, index) => {
    const x = xStartScale(datum.x);
    const valueY = datum.y === null ? undefined : yScale(datum.y);

    if (!isFiniteChartCoordinate(x) || !isFiniteChartCoordinate(valueY)) {
      return coordinates;
    }

    coordinates.push(
      createBarChartRectangle(
        datum,
        index,
        x + offset,
        baselineY,
        valueY,
        width,
        orientation,
      ),
    );

    return coordinates;
  }, []);
}

export function createBarChartScaleModel<X extends ChartXValue>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): BarChartScaleModel<X> {
  const xTickCount = getChartTickCount(props.xAxis?.tickCount);
  const yTickCount = getChartTickCount(props.yAxis?.tickCount);
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    tokens.bar.categoryPadding,
  );
  const xBandScale = scaleBand<X>()
    .domain(
      props.data
        .map((point) => point.x)
        .filter((value) => isValidChartXValue(value)),
    )
    .range(
      props.orientation === "horizontal"
        ? [props.plot.y, props.plot.y + props.plot.height]
        : [props.plot.x, props.plot.x + props.plot.width],
    )
    .paddingInner(categoryPadding)
    .paddingOuter(categoryPadding / 2);
  const xDomain = xBandScale.domain();
  const bandwidth = xDomain.length === 0 ? 0 : xBandScale.bandwidth();

  const xStartScale: LineChartScale<X> = (value) => xBandScale(value);

  const xScale: LineChartScale<X> = (value) => {
    const start = xBandScale(value);

    return start === undefined ? undefined : start + bandwidth / 2;
  };

  const values = props.data.reduce<number[]>((result, point) => {
    if (
      point.y !== null &&
      Number.isFinite(point.y) &&
      isValidChartXValue(point.x)
    ) {
      result.push(point.y);
    }

    return result;
  }, []);
  const yDomain = normalizeNumericDomain(
    props.yAxis?.domain ?? getBarNumericDomain(values),
  );
  const numeric = createChartNumericScale(
    yDomain,
    props.orientation === "horizontal"
      ? [props.plot.x, props.plot.x + props.plot.width]
      : [props.plot.y + props.plot.height, props.plot.y],
    yTickCount,
    !props.yAxis?.domain,
  );

  return {
    xDomain,
    yDomain: numeric.domain,
    xTicks: selectChartTicks(xDomain, xTickCount),
    yTicks: numeric.ticks,
    xScale,
    xStartScale,
    yScale: numeric.scale,
    bandwidth,
    baseline: getBaseline(numeric.domain),
  };
}

function getBarNumericDomain(values: readonly number[]): ChartNumericDomain {
  const [minimum, maximum] = extent(values);

  if (minimum === undefined || maximum === undefined) {
    return LineChartDefaultNumericDomain;
  }

  const domain = [Math.min(0, minimum), Math.max(0, maximum)] as const;

  return domain[0] === domain[1] ? LineChartDefaultNumericDomain : domain;
}

function getBaseline(domain: ChartNumericDomain): number {
  const minimum = Math.min(...domain);
  const maximum = Math.max(...domain);

  if (minimum > 0) {
    return minimum;
  }

  if (maximum < 0) {
    return maximum;
  }

  return 0;
}

export function normalizeBarChartPadding(
  value: number | undefined,
  fallback: number,
): number {
  return normalizeChartNumber(value, fallback, 0, 1);
}
```

### packages/charts/src/utils/chart-color.util.ts

```tsx
export function getChartColor(id: string, palette: readonly string[]): string {
  let hash = 2166136261;

  for (let index = 0; index < id.length; index += 1) {
    hash = Math.imul(hash ^ id.charCodeAt(index), 16777619);
  }

  return palette[(hash >>> 0) % palette.length] ?? palette[0] ?? "transparent";
}
```

### packages/charts/src/utils/chart-format.util.ts

```tsx
import type { ChartXValue } from "../types";

export function formatChartXValue(value: ChartXValue): string {
  return value instanceof Date && Number.isFinite(value.getTime())
    ? value.toISOString().slice(0, 10)
    : String(value);
}

export function formatChartTargetLabel<X extends ChartXValue>(
  value: X,
  seriesLabel?: string,
  format?: (value: X) => string,
): string {
  const text = format ? format(value) : formatChartXValue(value);

  return seriesLabel ? `${seriesLabel}: ${text}` : text;
}
```

### packages/charts/src/utils/chart-interaction.util.ts

```tsx
import type {
  BarChartCoordinate,
  ChartHitTarget,
  ChartLegendItem,
  ChartPoint,
  ChartRect,
  ChartSelection,
  ChartXValue,
  LineChartCoordinate,
  PieChartCoordinate,
} from "../types";
import { getChartColor } from "./chart-color.util";
import { formatChartTargetLabel } from "./chart-format.util";

export { formatChartXValue } from "./chart-format.util";

export function isSameChartSelection(
  left: ChartSelection | null,
  right: ChartSelection | null,
): boolean {
  return (
    left === right ||
    (left !== null &&
      right !== null &&
      left.seriesId === right.seriesId &&
      left.datumIndex === right.datumIndex)
  );
}

export function getChartCategoryKey(value: ChartXValue): string {
  return value instanceof Date
    ? `date:${value.getTime()}`
    : `${typeof value}:${value}`;
}

export function isPointInChartRect(
  point: ChartPoint,
  rect: ChartRect,
): boolean {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
}

export function findChartHitTarget(
  point: ChartPoint,
  targets: readonly ChartHitTarget[],
  plot: ChartRect,
): ChartHitTarget | null {
  if (plot.width <= 0 || plot.height <= 0 || !isPointInChartRect(point, plot)) {
    return null;
  }

  let nearest: ChartHitTarget | null = null;
  let distance = Infinity;

  for (const target of targets) {
    if (target.rect) {
      if (isPointInChartRect(point, target.rect)) {
        return target;
      }

      continue;
    }

    if (target.arc) {
      const arc = target.arc;
      const dx = point.x - arc.center.x;
      const dy = point.y - arc.center.y;
      const radius = Math.hypot(dx, dy);
      const direction = arc.endAngle >= arc.startAngle ? 1 : -1;
      const turn = Math.PI * 2;
      const angle = Math.atan2(dx, -dy);
      const offset =
        (((direction * (angle - arc.startAngle)) % turn) + turn) % turn;
      const span = Math.min(turn, Math.abs(arc.endAngle - arc.startAngle));
      const edgePadding =
        span >= turn - 1e-8
          ? 0
          : Math.asin(
              Math.min(
                1,
                (arc.padRadius / radius) * Math.sin(arc.padAngle / 2),
              ),
            );

      if (
        radius >= arc.innerRadius &&
        radius <= arc.outerRadius &&
        offset >= edgePadding &&
        offset <= span - edgePadding
      ) {
        return target;
      }

      continue;
    }

    if (!isPointInChartRect(target, plot)) {
      continue;
    }

    const currentDistance = Math.hypot(point.x - target.x, point.y - target.y);

    if (currentDistance < distance) {
      distance = currentDistance;
      nearest = target;
    }
  }

  return nearest;
}

export function createLineChartHitTargets<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  color: string,
  seriesId?: string,
  label?: string,
  formatX?: (value: X) => string,
): ChartHitTarget[] {
  return coordinates.flatMap((coordinate) => {
    if (
      coordinate.x === null ||
      coordinate.y === null ||
      coordinate.datum.y === null
    ) {
      return [];
    }

    return [
      {
        selection: { seriesId, datumIndex: coordinate.index },
        x: coordinate.x,
        y: coordinate.y,
        value: coordinate.datum.y,
        color,
        categoryKey: getChartCategoryKey(coordinate.datum.x),
        label: formatChartTargetLabel(coordinate.datum.x, label, formatX),
      },
    ];
  });
}

export function createBarChartHitTargets<X extends ChartXValue>(
  coordinates: readonly BarChartCoordinate<X>[],
  color: string,
  seriesId?: string,
  label?: string,
  plot?: ChartRect,
  formatX?: (value: X) => string,
): ChartHitTarget[] {
  return coordinates.flatMap((coordinate) => {
    const left = Math.max(coordinate.x, plot?.x ?? coordinate.x);
    const right = Math.min(
      coordinate.x + coordinate.width,
      plot ? plot.x + plot.width : Infinity,
    );
    const top = Math.max(coordinate.y, plot?.y ?? coordinate.y);
    const bottom = Math.min(
      coordinate.y + coordinate.height,
      plot ? plot.y + plot.height : Infinity,
    );

    if (coordinate.datum.y === null || right <= left || bottom <= top) {
      return [];
    }

    return [
      {
        selection: { seriesId, datumIndex: coordinate.index },
        x: (left + right) / 2,
        y: (top + bottom) / 2,
        rect: coordinate,
        value: coordinate.datum.y,
        color,
        label: formatChartTargetLabel(coordinate.datum.x, label, formatX),
      },
    ];
  });
}

export function createPieChartHitTargets(
  coordinates: readonly PieChartCoordinate[],
  colors: readonly string[],
  seriesId?: string,
  label?: string,
): ChartHitTarget[] {
  return coordinates
    .filter((coordinate) => coordinate.outerRadius > coordinate.innerRadius)
    .map((coordinate) => {
      const angle = (coordinate.startAngle + coordinate.endAngle) / 2;
      const radius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      const name = coordinate.datum.label ?? coordinate.datum.id;

      return {
        selection: { seriesId, datumIndex: coordinate.index },
        x: coordinate.center.x + Math.sin(angle) * radius,
        y: coordinate.center.y - Math.cos(angle) * radius,
        arc: coordinate,
        value: coordinate.datum.value,
        color:
          coordinate.datum.color ?? getChartColor(coordinate.datum.id, colors),
        label: label ? `${label}: ${name}` : name,
      };
    });
}

export function createPieChartLegend(
  data: readonly { id: string; label?: string; color?: string }[],
  colors: readonly string[],
): ChartLegendItem[] {
  return data.map((datum) => ({
    id: datum.id,
    label: datum.label ?? datum.id,
    color: datum.color ?? getChartColor(datum.id, colors),
  }));
}
```

### packages/charts/src/utils/chart-layout.util.ts

```tsx
import { ChartInsets, ChartLayout, ChartRect, ChartSize } from "../types";
import { normalizeChartNumber } from "./chart-number.util";

export function createChartLayout(
  size: ChartSize,
  insets: Partial<ChartInsets> = {},
  defaultInsets: Partial<ChartInsets> = {},
): ChartLayout {
  const resolvedSize = {
    width: normalizeChartNumber(size.width, 0),
    height: normalizeChartNumber(size.height, 0),
  };
  const resolvedInsets: ChartInsets = {
    top: normalizeChartNumber(insets.top, defaultInsets.top ?? 0),
    right: normalizeChartNumber(insets.right, defaultInsets.right ?? 0),
    bottom: normalizeChartNumber(insets.bottom, defaultInsets.bottom ?? 0),
    left: normalizeChartNumber(insets.left, defaultInsets.left ?? 0),
  };

  const horizontalRatio = Math.min(
    1,
    resolvedSize.width / (resolvedInsets.left + resolvedInsets.right || 1),
  );
  const verticalRatio = Math.min(
    1,
    resolvedSize.height / (resolvedInsets.top + resolvedInsets.bottom || 1),
  );
  resolvedInsets.left *= horizontalRatio;
  resolvedInsets.right *= horizontalRatio;
  resolvedInsets.top *= verticalRatio;
  resolvedInsets.bottom *= verticalRatio;

  const plotWidth = Math.max(
    0,
    resolvedSize.width - resolvedInsets.left - resolvedInsets.right,
  );
  const plotHeight = Math.max(
    0,
    resolvedSize.height - resolvedInsets.top - resolvedInsets.bottom,
  );

  const plot = {
    x: resolvedInsets.left,
    y: resolvedInsets.top,
    width: plotWidth,
    height: plotHeight,
  };

  return {
    size: resolvedSize,
    insets: resolvedInsets,
    plot,
    xAxis: {
      x: plot.x,
      y: plot.y + plot.height,
      width: plot.width,
      height: resolvedInsets.bottom,
    },
    yAxis: {
      x: 0,
      y: plot.y,
      width: resolvedInsets.left,
      height: plot.height,
    },
  };
}

export function createInsetRect(rect: ChartRect, amount: number): ChartRect {
  const inset = Math.max(0, amount);
  const horizontalInset = Math.min(inset, rect.width / 2);
  const verticalInset = Math.min(inset, rect.height / 2);

  return {
    x: rect.x + horizontalInset,
    y: rect.y + verticalInset,
    width: Math.max(0, rect.width - horizontalInset * 2),
    height: Math.max(0, rect.height - verticalInset * 2),
  };
}

/** Keep stroke centers on the scale while allowing endpoint caps to extend. */
export function createChartStrokeClip(
  plot: ChartRect,
  width: number,
  size: ChartSize,
): ChartRect {
  const padding = Number.isFinite(width) ? Math.max(0, width / 2) : 0;
  const x = Math.max(0, plot.x - padding);
  const y = Math.max(0, plot.y - padding);

  return {
    x,
    y,
    width: Math.max(0, Math.min(size.width, plot.x + plot.width + padding) - x),
    height: Math.max(
      0,
      Math.min(size.height, plot.y + plot.height + padding) - y,
    ),
  };
}
```

### packages/charts/src/utils/grid.util.ts

```tsx
import { Skia, SkPath } from "@shopify/react-native-skia";

import { GridDefaultOpacity, GridDefaultWidth } from "../constants";
import {
  ChartGridLineOptions,
  ChartRect,
  LineChartScale,
  ResolvedGridLineOptions,
} from "../types";
import { createAxisTicks } from "./axis.util";

export function createVerticalGridPath<Value>(
  values: readonly Value[],
  scale: LineChartScale<Value>,
  plot: ChartRect,
): SkPath | null {
  const ticks = createAxisTicks(values, scale);

  if (ticks.length === 0) {
    return null;
  }

  const path = Skia.PathBuilder.Make();

  ticks.forEach(({ position }) => {
    path.moveTo(position, plot.y);
    path.lineTo(position, plot.y + plot.height);
  });

  return path.detach();
}

export function createHorizontalGridPath<Value>(
  values: readonly Value[],
  scale: LineChartScale<Value>,
  plot: ChartRect,
): SkPath | null {
  const ticks = createAxisTicks(values, scale);

  if (ticks.length === 0) {
    return null;
  }

  const path = Skia.PathBuilder.Make();

  ticks.forEach(({ position }) => {
    path.moveTo(plot.x, position);
    path.lineTo(plot.x + plot.width, position);
  });

  return path.detach();
}

export function resolveGridLineOptions(
  options: boolean | ChartGridLineOptions | undefined,
  defaultVisible: boolean,
  defaultColor: string,
  defaultWidth = GridDefaultWidth,
): ResolvedGridLineOptions {
  if (typeof options === "boolean") {
    return {
      visible: options,
      color: defaultColor,
      width: defaultWidth,
      opacity: GridDefaultOpacity,
    };
  }

  return {
    visible: isGridLineVisible(options, defaultVisible),
    color: options?.color ?? defaultColor,
    width: options?.width ?? defaultWidth,
    opacity: options?.opacity ?? GridDefaultOpacity,
    dash: options?.dash,
  };
}

function isGridLineVisible(
  options: boolean | ChartGridLineOptions | undefined,
  defaultVisible: boolean,
): boolean {
  if (typeof options === "boolean") {
    return options;
  }

  return options?.visible ?? defaultVisible;
}
```

### packages/charts/src/utils/index.ts

```tsx
export {
  createAxisTicks,
  createXAxisLabelRect,
  createXAxisLayout,
  createYAxisLabelRect,
  createYAxisLayout,
  formatAxisTick,
} from "./axis.util";
export {
  createBarChartCoordinates,
  createBarChartModel,
} from "./bar-chart.util";
export { getChartColor } from "./chart-color.util";
export {
  createBarChartHitTargets,
  createLineChartHitTargets,
  createPieChartHitTargets,
  createPieChartLegend,
  findChartHitTarget,
  isSameChartSelection,
} from "./chart-interaction.util";
export { createChartLayout, createInsetRect } from "./chart-layout.util";
export {
  createHorizontalGridPath,
  createVerticalGridPath,
  resolveGridLineOptions,
} from "./grid.util";
export { getLabelTextAlign, getLabelY } from "./label.util";
export {
  createLineChartCoordinates,
  createLineChartModel,
  createLineChartScaleModel,
  inferChartScaleType,
} from "./line-chart.util";
export { createLinePath, fitLineCoordinatesToRect } from "./line.util";
export {
  createDrawableMultiBarChartSeries,
  createMultiBarChartModel,
} from "./multi-bar-chart.util";
export { createDrawableMultiLineChartSeries } from "./multi-line-chart.util";
export { createMultiPieChartModel } from "./multi-pie-chart.util";
export { createParagraphBuilder } from "./paragraph-builder.util";
export {
  createPieChartModel,
  createPieChartRadii,
  normalizeRadiusRatio,
} from "./pie-chart.util";
export { createPieSlicePath } from "./pie.util";
```

### packages/charts/src/utils/label.util.ts

```tsx
import { TextAlign } from "@shopify/react-native-skia";

import {
  ChartRect,
  LabelHorizontalAlignment,
  LabelVerticalAlignment,
} from "../types";

export function getLabelTextAlign(
  alignment: LabelHorizontalAlignment,
): TextAlign {
  if (alignment === "center") {
    return TextAlign.Center;
  }

  if (alignment === "right") {
    return TextAlign.Right;
  }

  return TextAlign.Left;
}

export function getLabelY(
  rect: ChartRect,
  paragraphHeight: number,
  alignment: LabelVerticalAlignment,
): number {
  if (alignment === "center") {
    return rect.y + (rect.height - paragraphHeight) / 2;
  }

  if (alignment === "bottom") {
    return rect.y + rect.height - paragraphHeight;
  }

  return rect.y;
}
```

### packages/charts/src/utils/line-chart.util.ts

```tsx
import { extent } from "d3-array";
import { scalePoint, scaleTime } from "d3-scale";

import { LineChartDefaultNumericDomain } from "../constants/line-chart.constants";
import {
  ChartNumericDomain,
  ChartXValue,
  LineChartCoordinate,
  LineChartPoint,
  LineChartScale,
  LineChartXScaleModel,
  UseLineChartProps,
  UseLineChartResult,
} from "../types";
import { isFiniteChartCoordinate } from "./chart-number.util";
import { createChartNumericScale } from "./chart-scale.util";
import { getChartTickCount, selectChartTicks } from "./chart-ticks.util";
import {
  isValidChartXValue,
  normalizeNumericDomain,
} from "./numeric-domain.util";

export function createLineChartScaleModel<X extends ChartXValue>(
  props: UseLineChartProps<X>,
): Omit<UseLineChartResult<X>, "coordinates"> {
  const xTickCount = getChartTickCount(props.xAxis?.tickCount);
  const yTickCount = getChartTickCount(props.yAxis?.tickCount);
  const xRange: ChartNumericDomain = [
    props.plot.x,
    props.plot.x + props.plot.width,
  ];
  const yRange: ChartNumericDomain = [
    props.plot.y + props.plot.height,
    props.plot.y,
  ];

  const xValues = props.data.map((point) => point.x);
  const xModel = createXScale(
    xValues,
    props.xScaleType ?? inferChartScaleType(xValues),
    xRange,
    xTickCount,
  );

  const yValues = props.data.reduce<number[]>((values, point) => {
    if (
      point.y !== null &&
      Number.isFinite(point.y) &&
      Number.isFinite(xModel.scale(point.x))
    ) {
      values.push(point.y);
    }

    return values;
  }, []);
  const yDomain = normalizeNumericDomain(
    props.yAxis?.domain ?? getNumericDomain(yValues),
  );
  const numeric = createChartNumericScale(
    yDomain,
    yRange,
    yTickCount,
    !props.yAxis?.domain,
  );

  return {
    xDomain: xModel.domain,
    yDomain: numeric.domain,
    xTicks: xModel.ticks,
    yTicks: numeric.ticks,
    xScale: xModel.scale,
    yScale: numeric.scale,
  };
}

export function createLineChartModel<X extends ChartXValue>(
  props: UseLineChartProps<X>,
): UseLineChartResult<X> {
  const model = createLineChartScaleModel(props);

  return {
    ...model,
    coordinates: createLineChartCoordinates(
      props.data,
      model.xScale,
      model.yScale,
    ),
  };
}

export function inferChartScaleType(
  values: readonly ChartXValue[],
): "linear" | "point" | "time" {
  const first = values.find(isValidChartXValue);

  if (typeof first === "string") {
    return "point";
  }

  return first instanceof Date ? "time" : "linear";
}

export function createLineChartCoordinates<X extends ChartXValue>(
  data: readonly LineChartPoint<X>[],
  xScale: LineChartScale<X>,
  yScale: LineChartScale<number>,
): LineChartCoordinate<X>[] {
  return data.map((datum, index) => {
    const x = xScale(datum.x);
    const y = datum.y === null ? undefined : yScale(datum.y);

    return {
      datum,
      index,
      x: isFiniteChartCoordinate(x) ? x : null,
      y: isFiniteChartCoordinate(y) ? y : null,
    };
  });
}

function createXScale<X extends ChartXValue>(
  values: readonly X[],
  scaleType: UseLineChartProps<X>["xScaleType"],
  range: ChartNumericDomain,
  tickCount: number,
): LineChartXScaleModel<X> {
  if (scaleType === "point") {
    const d3Scale = scalePoint<X>()
      .domain(values.filter(isValidChartXValue))
      .range(range);
    const domain = d3Scale.domain();

    return {
      domain,
      ticks: selectChartTicks(domain, tickCount),
      scale: (value) => d3Scale(value),
    };
  }

  if (scaleType === "time") {
    const dates = values.filter(
      (value): value is Extract<X, Date> =>
        value instanceof Date && Number.isFinite(value.getTime()),
    );
    const [minimum, maximum] = extent(dates);
    const domain =
      minimum && maximum
        ? minimum.getTime() === maximum.getTime()
          ? ([
              new Date(minimum.getTime() - 1),
              new Date(maximum.getTime() + 1),
            ] as const)
          : ([minimum, maximum] as const)
        : ([new Date(0), new Date(1)] as const);
    const d3Scale = scaleTime().domain(domain).range(range);

    if (tickCount > 0) {
      d3Scale.nice(tickCount);
    }

    return {
      domain: d3Scale.domain() as X[],
      ticks: d3Scale.ticks(tickCount) as X[],
      scale: (value) =>
        value instanceof Date && Number.isFinite(value.getTime())
          ? d3Scale(value)
          : undefined,
    };
  }

  const numbers = values.filter(
    (value): value is Extract<X, number> =>
      typeof value === "number" && Number.isFinite(value),
  );
  const numeric = createChartNumericScale(
    getNumericDomain(numbers),
    range,
    tickCount,
    true,
  );

  return {
    domain: [...numeric.domain] as X[],
    ticks: numeric.ticks as readonly X[],
    scale: (value) =>
      typeof value === "number" ? numeric.scale(value) : undefined,
  };
}

function getNumericDomain(values: readonly number[]): ChartNumericDomain {
  const [minimum, maximum] = extent(values);

  return normalizeNumericDomain(
    minimum === undefined || maximum === undefined
      ? LineChartDefaultNumericDomain
      : [minimum, maximum],
  );
}
```

### packages/charts/src/utils/line.util.ts

```tsx
import { Skia, SkPath } from "@shopify/react-native-skia";
import { line as createD3Line, curveLinear, curveMonotoneX } from "d3-shape";

import {
  ChartRect,
  ChartXValue,
  LineChartCoordinate,
  LineChartCurve,
} from "../types";
import {
  isDrawableLineCoordinate,
  isIsolatedLineCoordinate,
} from "./line-coordinates.util";

export function createLinePath<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  curve: LineChartCurve,
): SkPath | null {
  const pathData = createD3Line<LineChartCoordinate<X>>()
    .defined(
      (coordinate, index) =>
        isDrawableLineCoordinate(coordinate) &&
        !isIsolatedLineCoordinate(coordinates, index),
    )
    .x((coordinate) => coordinate.x!)
    .y((coordinate) => coordinate.y!)
    .curve(curve === "monotone" ? curveMonotoneX : curveLinear)(coordinates);

  return pathData ? Skia.Path.MakeFromSVGString(pathData) : null;
}

export function fitLineCoordinatesToRect<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  source: ChartRect,
  target: ChartRect,
): LineChartCoordinate<X>[] {
  return coordinates.map((coordinate) => ({
    ...coordinate,
    x:
      coordinate.x === null
        ? null
        : mapCoordinate(
            coordinate.x,
            source.x,
            source.width,
            target.x,
            target.width,
          ),
    y:
      coordinate.y === null
        ? null
        : mapCoordinate(
            coordinate.y,
            source.y,
            source.height,
            target.y,
            target.height,
          ),
  }));
}

function mapCoordinate(
  value: number,
  sourceStart: number,
  sourceLength: number,
  targetStart: number,
  targetLength: number,
): number {
  if (sourceLength <= 0) {
    return targetStart + targetLength / 2;
  }

  return targetStart + ((value - sourceStart) / sourceLength) * targetLength;
}
```

### packages/charts/src/utils/multi-bar-chart.util.ts

```tsx
import { scaleBand } from "d3-scale";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type { BarChartStackOffsets } from "../types/bar-stack.types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import {
  ChartXValue,
  MultiBarChartSeriesModel,
  UseMultiBarChartProps,
  UseMultiBarChartResult,
} from "../types";
import {
  createBarChartCoordinates,
  createBarChartScaleModel,
  normalizeBarChartPadding,
} from "./bar-chart.util";
import {
  createStackedBarCoordinates,
  createStackedBarDomainData,
} from "./bar-stack.util";
import { getChartColor } from "./chart-color.util";

export function createMultiBarChartModel<X extends ChartXValue>(
  props: UseMultiBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiBarChartResult<X> {
  const data = props.series.flatMap((series) => series.data);
  const domainData =
    props.mode === "stacked" ? createStackedBarDomainData(data) : data;
  const model = createBarChartScaleModel(
    {
      data: domainData,
      plot: props.plot,
      xAxis: props.xAxis,
      yAxis: props.yAxis,
      categoryPadding: props.categoryPadding,
      orientation: props.orientation,
    },
    tokens,
  );
  const seriesScale = scaleBand<number>()
    .domain(props.series.map((_, index) => index))
    .range([0, model.bandwidth])
    .paddingInner(
      normalizeBarChartPadding(props.seriesPadding, tokens.bar.seriesPadding),
    );
  const seriesBandwidth = seriesScale.bandwidth();
  const stackOffsets: BarChartStackOffsets = new Map();
  const series: MultiBarChartSeriesModel<X>[] = props.series.map(
    (currentSeries, index) => ({
      ...currentSeries,
      coordinates:
        props.mode === "stacked"
          ? createStackedBarCoordinates(
              currentSeries.data,
              model,
              stackOffsets,
              props.orientation,
            )
          : createBarChartCoordinates(
              currentSeries.data,
              model.xStartScale,
              model.yScale,
              model.baseline,
              seriesBandwidth,
              seriesScale(index) ?? 0,
              props.orientation,
            ),
    }),
  );

  return {
    series,
    xDomain: model.xDomain,
    yDomain: model.yDomain,
    xTicks: model.xTicks,
    yTicks: model.yTicks,
    xScale: model.xScale,
    yScale: model.yScale,
    bandwidth: model.bandwidth,
  };
}

export function createDrawableMultiBarChartSeries<X extends ChartXValue>(
  series: MultiBarChartSeriesModel<X>,
  _index: number,
  tokens: ChartsTokens = DefaultChartsTokens,
): MultiBarChartSeriesModel<X> {
  return {
    ...series,
    bar: {
      ...series.bar,
      color: series.bar?.color ?? getChartColor(series.id, tokens.palette),
    },
  };
}
```

### packages/charts/src/utils/multi-line-chart.util.ts

```tsx
import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { ChartRect, ChartXValue, MultiLineChartSeriesModel } from "../types";
import { getChartColor } from "./chart-color.util";

export function createDrawableMultiLineChartSeries<X extends ChartXValue>(
  series: MultiLineChartSeriesModel<X>,
  _index: number,
  _plot: ChartRect,
  tokens: ChartsTokens = DefaultChartsTokens,
): MultiLineChartSeriesModel<X> {
  const width = series.line?.width ?? tokens.line.width;

  return {
    ...series,
    coordinates: series.coordinates,
    line: {
      ...series.line,
      width,
      color: series.line?.color ?? getChartColor(series.id, tokens.palette),
    },
  };
}
```

### packages/charts/src/utils/multi-pie-chart.util.ts

```tsx
import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import {
  MultiPieChartSeriesModel,
  UseMultiPieChartProps,
  UseMultiPieChartResult,
} from "../types";
import { createPieChartModel, createPieChartRadii } from "./pie-chart.util";

export function createMultiPieChartModel(
  props: UseMultiPieChartProps,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiPieChartResult {
  const { innerRadius, outerRadius } = createPieChartRadii(
    props.plot,
    props.innerRadius,
    props.outerRadius,
  );
  const ringCount = props.series.length;
  const radialSpan = outerRadius - innerRadius;
  const ringPadding =
    ringCount <= 1
      ? 0
      : Math.min(
          normalizeRingPadding(props.ringPadding, tokens.pie.ringPadding),
          radialSpan / (ringCount - 1),
        );
  const availableWidth = Math.max(
    0,
    radialSpan - ringPadding * Math.max(0, ringCount - 1),
  );
  const ringWidth = ringCount === 0 ? 0 : availableWidth / ringCount;
  const maximumRadius = Math.max(
    0,
    Math.min(props.plot.width, props.plot.height) / 2,
  );

  const series: MultiPieChartSeriesModel[] = props.series.map(
    (currentSeries, index) => {
      const seriesOuterRadius = outerRadius - index * (ringWidth + ringPadding);
      const seriesInnerRadius = Math.max(
        innerRadius,
        seriesOuterRadius - ringWidth,
      );
      const model = createPieChartModel({
        data: currentSeries.data,
        plot: props.plot,
        startAngle: props.startAngle,
        endAngle: props.endAngle,
        padAngle: props.padAngle,
        innerRadius:
          maximumRadius === 0 ? 0 : seriesInnerRadius / maximumRadius,
        outerRadius:
          maximumRadius === 0 ? 0 : seriesOuterRadius / maximumRadius,
      });

      return {
        ...currentSeries,
        ...model,
        coordinates: model.coordinates.map((coordinate) => ({
          ...coordinate,
          padRadius: outerRadius,
        })),
      };
    },
  );

  return { series };
}

function normalizeRingPadding(
  value: number | undefined,
  fallback: number,
): number {
  const padding =
    value === undefined || !Number.isFinite(value) ? fallback : value;

  return Math.max(0, padding);
}
```

### packages/charts/src/utils/paragraph-builder.util.ts

```tsx
import {
  Skia,
  SkParagraphStyle,
  SkTypefaceFontProvider,
} from "@shopify/react-native-skia";

interface CreateParagraphBuilderProps {
  paragraphStyle?: SkParagraphStyle;
  typefaceProvider?: SkTypefaceFontProvider;
}

export function createParagraphBuilder(props: CreateParagraphBuilderProps) {
  if (props.typefaceProvider) {
    return Skia.ParagraphBuilder.Make(
      props.paragraphStyle,
      props.typefaceProvider,
    );
  }

  return Skia.ParagraphBuilder.Make(props.paragraphStyle);
}
```

### packages/charts/src/utils/pie-chart.util.ts

```tsx
import { pie } from "d3-shape";

import {
  PieDefaultEndAngle,
  PieDefaultInnerRadius,
  PieDefaultOuterRadius,
  PieDefaultPadAngle,
  PieDefaultStartAngle,
} from "../constants/pie.constants";
import {
  ChartRect,
  PieChartCoordinate,
  PieChartModel,
  PieChartPoint,
  UsePieChartProps,
} from "../types";

const DegreesToRadians = Math.PI / 180;

export function createPieChartModel(props: UsePieChartProps): PieChartModel {
  const data = props.data.filter(isValidPieChartPoint);
  const indices = new Map(props.data.map((datum, index) => [datum, index]));
  const maximumValue = data.reduce(
    (maximum, datum) => Math.max(maximum, datum.value),
    0,
  );
  const normalizedTotal = data.reduce(
    (sum, datum) => sum + datum.value / maximumValue,
    0,
  );
  const total = Math.min(Number.MAX_VALUE, normalizedTotal * maximumValue);
  const { center, innerRadius, outerRadius } = createPieChartRadii(
    props.plot,
    props.innerRadius,
    props.outerRadius,
  );

  if (data.length === 0 || outerRadius <= 0) {
    return { coordinates: [], total: 0 };
  }

  const startAngle = degreesToRadians(
    normalizeAngle(props.startAngle, PieDefaultStartAngle),
  );
  const endAngle = degreesToRadians(
    normalizeAngle(props.endAngle, PieDefaultEndAngle),
  );
  const padAngle = Math.max(
    0,
    degreesToRadians(normalizeAngle(props.padAngle, PieDefaultPadAngle)),
  );
  const arcs = pie<PieChartPoint>()
    .value((datum) => datum.value / maximumValue)
    .sort(null)
    .startAngle(startAngle)
    .endAngle(endAngle)
    .padAngle(padAngle)(data);
  const coordinates: PieChartCoordinate[] = arcs.map((currentArc) => ({
    datum: currentArc.data,
    index: indices.get(currentArc.data)!,
    center,
    startAngle: currentArc.startAngle,
    endAngle: currentArc.endAngle,
    padAngle: currentArc.padAngle,
    padRadius: outerRadius,
    innerRadius,
    outerRadius,
  }));

  return { coordinates, total };
}

export function createPieChartRadii(
  plot: ChartRect,
  innerRadiusRatio = PieDefaultInnerRadius,
  outerRadiusRatio = PieDefaultOuterRadius,
) {
  const maximumRadius = Math.max(0, Math.min(plot.width, plot.height) / 2);
  const resolvedOuterRatio = normalizeRadiusRatio(
    Number.isFinite(outerRadiusRatio)
      ? outerRadiusRatio
      : PieDefaultOuterRadius,
  );
  const resolvedInnerRatio = Math.min(
    normalizeRadiusRatio(
      Number.isFinite(innerRadiusRatio)
        ? innerRadiusRatio
        : PieDefaultInnerRadius,
    ),
    resolvedOuterRatio,
  );

  return {
    center: {
      x: plot.x + plot.width / 2,
      y: plot.y + plot.height / 2,
    },
    innerRadius: maximumRadius * resolvedInnerRatio,
    outerRadius: maximumRadius * resolvedOuterRatio,
  };
}

export function normalizeRadiusRatio(value: number): number {
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
}

function degreesToRadians(value: number): number {
  return value * DegreesToRadians;
}

function normalizeAngle(value: number | undefined, fallback: number): number {
  return value === undefined || !Number.isFinite(value) ? fallback : value;
}

function isValidPieChartPoint(datum: PieChartPoint): boolean {
  return Number.isFinite(datum.value) && datum.value > 0;
}
```

### packages/charts/src/utils/pie.util.ts

```tsx
import { Skia, SkPath } from "@shopify/react-native-skia";
import { arc } from "d3-shape";

import { PieChartCoordinate } from "../types";

export function createPieSlicePath(
  coordinate: PieChartCoordinate,
  cornerRadius = 0,
): SkPath | null {
  const pathData = arc()
    .cornerRadius(Math.max(0, cornerRadius))
    .padRadius(coordinate.padRadius)({
    innerRadius: coordinate.innerRadius,
    outerRadius: coordinate.outerRadius,
    startAngle: coordinate.startAngle,
    endAngle: coordinate.endAngle,
    padAngle: coordinate.padAngle,
  });

  if (!pathData) {
    return null;
  }

  return Skia.Path.MakeFromSVGString(pathData);
}
```

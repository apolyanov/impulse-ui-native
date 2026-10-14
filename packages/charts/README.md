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

See [the complete architecture and reuse map](../../docs/charts-architecture.md)
for package ownership, every model/rendering layer, and the shared data flow.
Native legend and tooltip text and Skia labels resolve the same chart typography.
Legends reuse the shared Pressable behavior; tooltips reuse Card surfaces/content.
All chart frames resolve the same inset defaults, and bar/pie rounding defaults
come from the shared radius scale.

The theme factory also supplies optional chart `label`, `selection`, `legend`, and
`tooltip` tokens. Existing complete `ChartsTokens` objects remain valid: missing
additions fall back to shared theme scales. Override `bar.radius` and
`pie.cornerRadius` globally or their existing component props individually.
Card tokens style the default tooltip surface and content spacing.

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

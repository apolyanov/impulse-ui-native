# @impulse-ui-native/charts

Skia-rendered chart components and primitives for Impulse UI Native.

## Installation

```sh
pnpm add @impulse-ui-native/charts @shopify/react-native-skia
```

Follow Skia's platform setup instructions before rendering a chart.

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
  insets={{ left: 40, bottom: 28 }}
  bar={{ color: "#6366f1", radius: 4 }}
/>;
```

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
  insets={{ left: 40, bottom: 28 }}
/>;
```

Bar charts support string, number, and `Date` categories, nullable values, positive and negative values, custom Y domains, axes, and grid styling. Inferred Y domains include zero.

`categoryPadding` and `seriesPadding` are ratios clamped between `0` and `1`. Multi-series bars use the theme's chart palette unless a series supplies `bar.color`.

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

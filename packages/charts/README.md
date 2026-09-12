# @impulse-ui-native/charts

Skia-rendered chart components and primitives for Impulse UI Native.

## Components

The package provides Skia-rendered `LineChart`, `MultiLineChart`, `BarChart`, and `MultiBarChart` components. Charts fill their parent, so give the surrounding view an explicit height.

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

## Scope

- Token-aware chart primitives for React Native.
- Skia-based rendering.
- D3-backed scales, shapes, interpolation, and date/time helpers.
- Typed components that compose with the rest of Impulse UI Native.

## Native prerequisite

Chart APIs require `@shopify/react-native-skia` version 2 or newer. Follow Skia's platform setup instructions before using them.

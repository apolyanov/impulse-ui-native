# @impulse-ui-native/charts: capability guide

Show numeric series with interactive native charts.

## Setup

- ThemeProvider and GestureHandlerRootView.
- Install/configure Skia, Gesture Handler, Reanimated and Worklets peers.

## Capabilities

- Line, multi-line, bar, multi-bar, pie and multi-pie charts.
- Axes, legends, tooltips and gesture-driven selection.

## Boundaries and composition

- Give the parent an explicit height; data models differ by chart family.
- Series/data colors are independent of shared component tones; inspect exported series types.

Exact contracts: [API reference](../api/charts.md). Machine facts: [package JSON](charts.json) or [full catalog](../capabilities.json).

## Recipes

- [metrics](../recipes.md#metrics)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                           | Range     | Optional |
| ------------------------------ | --------- | -------- |
| `@shopify/react-native-skia`   | `>=2`     | No       |
| `react-native-gesture-handler` | `>=2.0.0` | No       |
| `react-native-reanimated`      | `>=4.0.0` | No       |
| `react-native-worklets`        | `>=0.5`   | No       |
| `react`                        | `>=18`    | No       |
| `react-native`                 | `>=0.73`  | No       |

### Bar

Source: `packages/charts/src/components/primitives/bar.tsx:8`. Direct defaults: `color=tokens.palette[0]`, `opacity=BarDefaultOpacity`, `radius=tokens.bar.radius ?? BarDefaultRadius`, `visible=true`.

Generic parameters: `X extends ChartXValue`.

| Prop          | Required | Type / choices                     |
| ------------- | -------- | ---------------------------------- |
| `coordinates` | Yes      | `readonly BarChartCoordinate<X>[]` |
| `radius`      | No       | `number \| undefined`              |
| `theme`       | Yes      | `AppTheme`                         |
| `visible`     | No       | `boolean \| undefined`             |

Style props: `color`, `opacity`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### BarChart

Source: `packages/charts/src/components/bar-chart/bar-chart.tsx:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `X extends ChartXValue`.

| Prop                | Required | Type / choices                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `bar`               | No       | `BarChartBarOptions \| undefined`                                                    |
| `categoryPadding`   | No       | `number \| undefined`                                                                |
| `data`              | Yes      | `readonly BarChartPoint<X>[]`                                                        |
| `defaultHiddenIds`  | No       | `readonly string[] \| undefined`                                                     |
| `defaultSelection`  | No       | `ChartSelection \| null \| undefined`                                                |
| `emptyContent`      | No       | `ReactNode`                                                                          |
| `fontManager`       | No       | `SkTypefaceFontProvider \| undefined`                                                |
| `grid`              | No       | `ChartGridOptions \| undefined`                                                      |
| `hiddenIds`         | No       | `readonly string[] \| undefined`                                                     |
| `insets`            | No       | `Partial<ChartInsets> \| undefined`                                                  |
| `interactive`       | No       | `boolean \| undefined`                                                               |
| `legend`            | No       | `boolean \| undefined`                                                               |
| `onHiddenIdsChange` | No       | `((ids: readonly string[]) => void) \| undefined`                                    |
| `onSelectionChange` | No       | `((selection: ChartSelection \| null) => void) \| undefined`                         |
| `orientation`       | No       | `horizontal / vertical`                                                              |
| `selection`         | No       | `ChartSelection \| null \| undefined`                                                |
| `tooltip`           | No       | `boolean \| ((details: readonly ChartSelectionDetails[]) => ReactNode) \| undefined` |
| `xAxis`             | No       | `ChartXAxisOptions<X> \| undefined`                                                  |
| `yAxis`             | No       | `ChartYAxisOptions \| undefined`                                                     |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ChartLegend

Source: `packages/charts/src/components/chart-legend.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop        | Required | Type / choices                        |
| ----------- | -------- | ------------------------------------- |
| `hiddenIds` | No       | `readonly string[] \| undefined`      |
| `items`     | Yes      | `readonly ChartLegendItem[]`          |
| `onToggle`  | No       | `((id: string) => void) \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ChartTooltip

Source: `packages/charts/src/components/chart-tooltip.tsx:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `details`  | Yes      | `readonly ChartSelectionDetails[]`                     |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Grid

Source: `packages/charts/src/components/primitives/grid.tsx:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `X extends ChartXValue`, `Y extends ChartXValue`.

| Prop      | Required | Type / choices                  |
| --------- | -------- | ------------------------------- |
| `options` | No       | `ChartGridOptions \| undefined` |
| `plot`    | Yes      | `ChartRect`                     |
| `theme`   | Yes      | `AppTheme`                      |
| `xScale`  | Yes      | `LineChartScale<X>`             |
| `xTicks`  | Yes      | `readonly X[]`                  |
| `yScale`  | Yes      | `LineChartScale<Y>`             |
| `yTicks`  | Yes      | `readonly Y[]`                  |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Label

Source: `packages/charts/src/components/primitives/label.tsx:26`. Direct defaults: `horizontalAlign=LabelDefaultHorizontalAlignment`, `rotation=0`, `maxLines=1`, `verticalAlign=LabelDefaultVerticalAlignment`.

| Prop              | Required | Type / choices                        |
| ----------------- | -------- | ------------------------------------- |
| `fontManager`     | No       | `SkTypefaceFontProvider \| undefined` |
| `horizontalAlign` | No       | `center / left / right`               |
| `maxLines`        | No       | `number \| undefined`                 |
| `rect`            | Yes      | `ChartRect`                           |
| `rotation`        | No       | `number \| undefined`                 |
| `text`            | Yes      | `string`                              |
| `theme`           | Yes      | `AppTheme`                            |
| `tnum`            | No       | `boolean \| undefined`                |
| `verticalAlign`   | No       | `bottom / center / top`               |

Style props: `color`, `fontFamily`, `fontSize`, `fontWeight`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Line

Source: `packages/charts/src/components/primitives/line.tsx:21`. Direct defaults: `cap=LineDefaultCap`, `color=tokens.palette[0]`, `curve=LineDefaultCurve`, `join=LineDefaultJoin`, `opacity=LineDefaultOpacity`, `visible=true`, `width=tokens.line.width`.

Generic parameters: `X extends ChartXValue`.

| Prop          | Required | Type / choices                      |
| ------------- | -------- | ----------------------------------- |
| `cap`         | No       | `butt / round / square`             |
| `coordinates` | Yes      | `readonly LineChartCoordinate<X>[]` |
| `curve`       | No       | `linear / monotone`                 |
| `dash`        | No       | `readonly number[] \| undefined`    |
| `join`        | No       | `bevel / miter / round`             |
| `theme`       | Yes      | `AppTheme`                          |
| `visible`     | No       | `boolean \| undefined`              |

Style props: `color`, `opacity`, `width`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### LineChart

Source: `packages/charts/src/components/line-chart/line-chart.tsx:15`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `X extends ChartXValue`.

| Prop                | Required | Type / choices                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `data`              | Yes      | `readonly LineChartPoint<X>[]`                                                       |
| `defaultHiddenIds`  | No       | `readonly string[] \| undefined`                                                     |
| `defaultSelection`  | No       | `ChartSelection \| null \| undefined`                                                |
| `emptyContent`      | No       | `ReactNode`                                                                          |
| `fontManager`       | No       | `SkTypefaceFontProvider \| undefined`                                                |
| `grid`              | No       | `ChartGridOptions \| undefined`                                                      |
| `hiddenIds`         | No       | `readonly string[] \| undefined`                                                     |
| `insets`            | No       | `Partial<ChartInsets> \| undefined`                                                  |
| `interactive`       | No       | `boolean \| undefined`                                                               |
| `legend`            | No       | `boolean \| undefined`                                                               |
| `line`              | No       | `LineChartLineOptions \| undefined`                                                  |
| `onHiddenIdsChange` | No       | `((ids: readonly string[]) => void) \| undefined`                                    |
| `onSelectionChange` | No       | `((selection: ChartSelection \| null) => void) \| undefined`                         |
| `selection`         | No       | `ChartSelection \| null \| undefined`                                                |
| `tooltip`           | No       | `boolean \| ((details: readonly ChartSelectionDetails[]) => ReactNode) \| undefined` |
| `xAxis`             | No       | `ChartXAxisOptions<X> \| undefined`                                                  |
| `xScaleType`        | No       | `linear / point / time`                                                              |
| `yAxis`             | No       | `ChartYAxisOptions \| undefined`                                                     |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### MultiBarChart

Source: `packages/charts/src/components/multi-bar-chart/multi-bar-chart.tsx:17`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `X extends ChartXValue`.

| Prop                | Required | Type / choices                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `categoryPadding`   | No       | `number \| undefined`                                                                |
| `defaultHiddenIds`  | No       | `readonly string[] \| undefined`                                                     |
| `defaultSelection`  | No       | `ChartSelection \| null \| undefined`                                                |
| `emptyContent`      | No       | `ReactNode`                                                                          |
| `fontManager`       | No       | `SkTypefaceFontProvider \| undefined`                                                |
| `grid`              | No       | `ChartGridOptions \| undefined`                                                      |
| `hiddenIds`         | No       | `readonly string[] \| undefined`                                                     |
| `insets`            | No       | `Partial<ChartInsets> \| undefined`                                                  |
| `interactive`       | No       | `boolean \| undefined`                                                               |
| `legend`            | No       | `boolean \| undefined`                                                               |
| `mode`              | No       | `grouped / stacked`                                                                  |
| `onHiddenIdsChange` | No       | `((ids: readonly string[]) => void) \| undefined`                                    |
| `onSelectionChange` | No       | `((selection: ChartSelection \| null) => void) \| undefined`                         |
| `orientation`       | No       | `horizontal / vertical`                                                              |
| `selection`         | No       | `ChartSelection \| null \| undefined`                                                |
| `series`            | Yes      | `readonly MultiBarChartSeries<X>[]`                                                  |
| `seriesPadding`     | No       | `number \| undefined`                                                                |
| `tooltip`           | No       | `boolean \| ((details: readonly ChartSelectionDetails[]) => ReactNode) \| undefined` |
| `xAxis`             | No       | `ChartXAxisOptions<X> \| undefined`                                                  |
| `yAxis`             | No       | `ChartYAxisOptions \| undefined`                                                     |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### MultiLineChart

Source: `packages/charts/src/components/multi-line-chart/multi-line-chart.tsx:18`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `X extends ChartXValue`.

| Prop                | Required | Type / choices                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `defaultHiddenIds`  | No       | `readonly string[] \| undefined`                                                     |
| `defaultSelection`  | No       | `ChartSelection \| null \| undefined`                                                |
| `emptyContent`      | No       | `ReactNode`                                                                          |
| `fontManager`       | No       | `SkTypefaceFontProvider \| undefined`                                                |
| `grid`              | No       | `ChartGridOptions \| undefined`                                                      |
| `hiddenIds`         | No       | `readonly string[] \| undefined`                                                     |
| `insets`            | No       | `Partial<ChartInsets> \| undefined`                                                  |
| `interactive`       | No       | `boolean \| undefined`                                                               |
| `legend`            | No       | `boolean \| undefined`                                                               |
| `onHiddenIdsChange` | No       | `((ids: readonly string[]) => void) \| undefined`                                    |
| `onSelectionChange` | No       | `((selection: ChartSelection \| null) => void) \| undefined`                         |
| `selection`         | No       | `ChartSelection \| null \| undefined`                                                |
| `series`            | Yes      | `readonly MultiLineChartSeries<X>[]`                                                 |
| `tooltip`           | No       | `boolean \| ((details: readonly ChartSelectionDetails[]) => ReactNode) \| undefined` |
| `xAxis`             | No       | `ChartXAxisOptions<X> \| undefined`                                                  |
| `xScaleType`        | No       | `linear / point / time`                                                              |
| `yAxis`             | No       | `ChartYAxisOptions \| undefined`                                                     |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### MultiPieChart

Source: `packages/charts/src/components/multi-pie-chart/multi-pie-chart.tsx:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop                | Required | Type / choices                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `defaultHiddenIds`  | No       | `readonly string[] \| undefined`                                                     |
| `defaultSelection`  | No       | `ChartSelection \| null \| undefined`                                                |
| `emptyContent`      | No       | `ReactNode`                                                                          |
| `endAngle`          | No       | `number \| undefined`                                                                |
| `hiddenIds`         | No       | `readonly string[] \| undefined`                                                     |
| `innerRadius`       | No       | `number \| undefined`                                                                |
| `insets`            | No       | `Partial<ChartInsets> \| undefined`                                                  |
| `interactive`       | No       | `boolean \| undefined`                                                               |
| `legend`            | No       | `boolean \| undefined`                                                               |
| `onHiddenIdsChange` | No       | `((ids: readonly string[]) => void) \| undefined`                                    |
| `onSelectionChange` | No       | `((selection: ChartSelection \| null) => void) \| undefined`                         |
| `outerRadius`       | No       | `number \| undefined`                                                                |
| `padAngle`          | No       | `number \| undefined`                                                                |
| `ringPadding`       | No       | `number \| undefined`                                                                |
| `selection`         | No       | `ChartSelection \| null \| undefined`                                                |
| `series`            | Yes      | `readonly MultiPieChartSeries[]`                                                     |
| `startAngle`        | No       | `number \| undefined`                                                                |
| `tooltip`           | No       | `boolean \| ((details: readonly ChartSelectionDetails[]) => ReactNode) \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Pie

Source: `packages/charts/src/components/primitives/pie.tsx:15`. Direct defaults: `colors=tokens.palette`, `cornerRadius=tokens.pie.cornerRadius ?? PieDefaultCornerRadius`, `opacity=PieDefaultOpacity`, `strokeWidth=PieDefaultStrokeWidth`, `visible=true`.

| Prop           | Required | Type / choices                   |
| -------------- | -------- | -------------------------------- |
| `colors`       | No       | `readonly string[] \| undefined` |
| `coordinates`  | Yes      | `readonly PieChartCoordinate[]`  |
| `cornerRadius` | No       | `number \| undefined`            |
| `strokeColor`  | No       | `string \| undefined`            |
| `strokeWidth`  | No       | `number \| undefined`            |
| `theme`        | Yes      | `AppTheme`                       |
| `visible`      | No       | `boolean \| undefined`           |

Style props: `opacity`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### PieChart

Source: `packages/charts/src/components/pie-chart/pie-chart.tsx:15`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop                | Required | Type / choices                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------ |
| `data`              | Yes      | `readonly PieChartPoint[]`                                                           |
| `defaultHiddenIds`  | No       | `readonly string[] \| undefined`                                                     |
| `defaultSelection`  | No       | `ChartSelection \| null \| undefined`                                                |
| `emptyContent`      | No       | `ReactNode`                                                                          |
| `endAngle`          | No       | `number \| undefined`                                                                |
| `hiddenIds`         | No       | `readonly string[] \| undefined`                                                     |
| `innerRadius`       | No       | `number \| undefined`                                                                |
| `insets`            | No       | `Partial<ChartInsets> \| undefined`                                                  |
| `interactive`       | No       | `boolean \| undefined`                                                               |
| `legend`            | No       | `boolean \| undefined`                                                               |
| `onHiddenIdsChange` | No       | `((ids: readonly string[]) => void) \| undefined`                                    |
| `onSelectionChange` | No       | `((selection: ChartSelection \| null) => void) \| undefined`                         |
| `outerRadius`       | No       | `number \| undefined`                                                                |
| `padAngle`          | No       | `number \| undefined`                                                                |
| `selection`         | No       | `ChartSelection \| null \| undefined`                                                |
| `slice`             | No       | `PieChartSliceOptions \| undefined`                                                  |
| `startAngle`        | No       | `number \| undefined`                                                                |
| `tooltip`           | No       | `boolean \| ((details: readonly ChartSelectionDetails[]) => ReactNode) \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### XAxis

Source: `packages/charts/src/components/primitives/x-axis.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `X extends ChartXValue`.

| Prop          | Required | Type / choices                        |
| ------------- | -------- | ------------------------------------- |
| `fontManager` | No       | `SkTypefaceFontProvider \| undefined` |
| `lineVisible` | No       | `boolean \| undefined`                |
| `options`     | No       | `ChartAxisOptions<X> \| undefined`    |
| `plot`        | Yes      | `ChartRect`                           |
| `region`      | Yes      | `ChartRect`                           |
| `scale`       | Yes      | `LineChartScale<X>`                   |
| `theme`       | Yes      | `AppTheme`                            |
| `ticks`       | Yes      | `readonly X[]`                        |
| `tickVisible` | No       | `boolean \| undefined`                |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### YAxis

Source: `packages/charts/src/components/primitives/y-axis.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `Value extends unknown`.

| Prop          | Required | Type / choices                         |
| ------------- | -------- | -------------------------------------- |
| `fontManager` | No       | `SkTypefaceFontProvider \| undefined`  |
| `lineVisible` | No       | `boolean \| undefined`                 |
| `options`     | No       | `ChartAxisOptions<Value> \| undefined` |
| `plot`        | Yes      | `ChartRect`                            |
| `region`      | Yes      | `ChartRect`                            |
| `scale`       | Yes      | `LineChartScale<Value>`                |
| `theme`       | Yes      | `AppTheme`                             |
| `ticks`       | Yes      | `readonly Value[]`                     |
| `tickVisible` | No       | `boolean \| undefined`                 |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `AxisDefaultLabelGap` (value)
- `AxisDefaultOpacity` (value)
- `AxisDefaultTickLength` (value)
- `AxisDefaultWidth` (value)
- `AxisLayout` (type)
- `AxisLineLayout` (type)
- `AxisProps` (type)
- `AxisTick` (type)
- `AxisTickLayout` (type)
- `Bar` (value)
  - `<X extends ChartXValue = string>(props: BarProps<X>): import("react").JSX.Element \| null`
- `BarChart` (value)
  - `<X extends ChartXValue = string>(props: BarChartProps<X>): import("react").JSX.Element`
- `BarChartBarOptions` (type)
- `BarChartCommonProps` (type)
- `BarChartCoordinate` (type)
- `BarChartDefaultCategoryPadding` (value)
- `BarChartOrientation` (type)
- `BarChartPoint` (type)
- `BarChartProps` (type)
- `BarChartScaleModel` (type)
- `BarDefaultColor` (value)
- `BarDefaultColors` (value)
- `BarDefaultOpacity` (value)
- `BarDefaultRadius` (value)
- `BarProps` (type)
- `CartesianChartDefaultInsets` (value)
- `ChartAxisLabelOptions` (type)
- `ChartAxisLineOptions` (type)
- `ChartAxisOptions` (type)
- `ChartAxisTickOptions` (type)
- `ChartCartesianProps` (type)
- `ChartCartesianScaleModel` (type)
- `ChartContainerProps` (type)
- `ChartGridLineOptions` (type)
- `ChartGridOptions` (type)
- `ChartHitTarget` (type)
- `ChartInsets` (type)
- `ChartLabelStyle` (type)
- `ChartLayout` (type)
- `ChartLegend` (value)
  - `({ items, hiddenIds, onToggle, }: ChartLegendProps): import("react").JSX.Element`
- `ChartLegendItem` (type)
- `ChartLegendProps` (type)
- `ChartNumericDomain` (type)
- `ChartNumericScaleModel` (type)
- `ChartPoint` (type)
- `ChartPresentationProps` (type)
- `ChartRect` (type)
- `ChartScaleType` (type)
- `ChartSelection` (type)
- `ChartSelectionDetails` (type)
- `ChartSize` (type)
- `ChartStrokeCap` (type)
- `ChartStrokeJoin` (type)
- `ChartStrokeStyle` (type)
- `ChartTooltip` (value)
  - `({ details, style, ...props }: ChartTooltipProps): import("react").JSX.Element`
- `ChartTooltipProps` (type)
- `ChartXAxisOptions` (type)
- `ChartXValue` (type)
- `ChartYAxisOptions` (type)
- `CreateAxisLayoutProps` (type)
- `createAxisTicks` (value)
  - `<Value>(values: readonly Value[], scale: LineChartScale<Value>): AxisTick<Value>[]`
- `createBarChartCoordinates` (value)
  - `<X extends ChartXValue>(data: readonly BarChartPoint<X>[], xStartScale: LineChartScale<X>, yScale: LineChartScale<number>, baseline: number, width: number, offset?: number, orientation?: BarChartOrientation): BarChartCoordinate<X>[]`
- `createBarChartHitTargets` (value)
  - `<X extends ChartXValue>(coordinates: readonly BarChartCoordinate<X>[], color: string, seriesId?: string, label?: string, plot?: ChartRect, formatX?: (value: X) => string): ChartHitTarget[]`
- `createBarChartModel` (value)
  - `<X extends ChartXValue>(props: UseBarChartProps<X>, tokens?: ChartsTokens): UseBarChartResult<X>`
- `createChartLayout` (value)
  - `(size: ChartSize, insets?: Partial<ChartInsets>, defaultInsets?: Partial<ChartInsets>): ChartLayout`
- `createDrawableMultiBarChartSeries` (value)
  - `<X extends ChartXValue>(series: MultiBarChartSeriesModel<X>, _index: number, tokens?: ChartsTokens): MultiBarChartSeriesModel<X>`
- `createDrawableMultiLineChartSeries` (value)
  - `<X extends ChartXValue>(series: MultiLineChartSeriesModel<X>, _index: number, _plot: ChartRect, tokens?: ChartsTokens): MultiLineChartSeriesModel<X>`
- `createHorizontalGridPath` (value)
  - `<Value>(values: readonly Value[], scale: LineChartScale<Value>, plot: ChartRect): SkPath \| null`
- `createInsetRect` (value)
  - `(rect: ChartRect, amount: number): ChartRect`
- `createLineChartCoordinates` (value)
  - `<X extends ChartXValue>(data: readonly LineChartPoint<X>[], xScale: LineChartScale<X>, yScale: LineChartScale<number>): LineChartCoordinate<X>[]`
- `createLineChartHitTargets` (value)
  - `<X extends ChartXValue>(coordinates: readonly LineChartCoordinate<X>[], color: string, seriesId?: string, label?: string, formatX?: (value: X) => string): ChartHitTarget[]`
- `createLineChartModel` (value)
  - `<X extends ChartXValue>(props: UseLineChartProps<X>): UseLineChartResult<X>`
- `createLineChartScaleModel` (value)
  - `<X extends ChartXValue>(props: UseLineChartProps<X>): Omit<UseLineChartResult<X>, "coordinates">`
- `createLinePath` (value)
  - `<X extends ChartXValue>(coordinates: readonly LineChartCoordinate<X>[], curve: LineChartCurve): SkPath \| null`
- `createMultiBarChartModel` (value)
  - `<X extends ChartXValue>(props: UseMultiBarChartProps<X>, tokens?: ChartsTokens): UseMultiBarChartResult<X>`
- `createMultiPieChartModel` (value)
  - `(props: UseMultiPieChartProps, tokens?: ChartsTokens): UseMultiPieChartResult`
- `createParagraphBuilder` (value)
  - `(props: CreateParagraphBuilderProps): import("@shopify/react-native-skia").SkParagraphBuilder`
- `createPieChartHitTargets` (value)
  - `(coordinates: readonly PieChartCoordinate[], colors: readonly string[], seriesId?: string, label?: string): ChartHitTarget[]`
- `createPieChartLegend` (value)
  - `(data: readonly { id: string; label?: string; color?: string; }[], colors: readonly string[]): ChartLegendItem[]`
- `createPieChartModel` (value)
  - `(props: UsePieChartProps): PieChartModel`
- `createPieChartRadii` (value)
  - `(plot: ChartRect, innerRadiusRatio?: number, outerRadiusRatio?: number): { center: { x: number; y: number; }; innerRadius: number; outerRadius: number; }`
- `createPieSlicePath` (value)
  - `(coordinate: PieChartCoordinate, cornerRadius?: number): SkPath \| null`
- `createVerticalGridPath` (value)
  - `<Value>(values: readonly Value[], scale: LineChartScale<Value>, plot: ChartRect): SkPath \| null`
- `createXAxisLabelRect` (value)
  - `(ticks: readonly AxisTick<unknown>[], index: number, region: ChartRect, offset: number): ChartRect`
- `createXAxisLayout` (value)
  - `<Value>(props: CreateAxisLayoutProps<Value>): AxisLayout<Value>`
- `createYAxisLabelRect` (value)
  - `(position: number, region: ChartRect, width: number, fontSize: number): ChartRect`
- `createYAxisLayout` (value)
  - `<Value = number>(props: CreateYAxisLayoutProps<Value>): AxisLayout<Value>`
- `CreateYAxisLayoutProps` (type)
- `DefaultChartsTokens` (value)
- `findChartHitTarget` (value)
  - `(point: ChartPoint, targets: readonly ChartHitTarget[], plot: ChartRect): ChartHitTarget \| null`
- `fitLineCoordinatesToRect` (value)
  - `<X extends ChartXValue>(coordinates: readonly LineChartCoordinate<X>[], source: ChartRect, target: ChartRect): LineChartCoordinate<X>[]`
- `formatAxisTick` (value)
  - `<Value>(value: Value, format?: (value: Value) => string): string`
- `getChartColor` (value)
  - `(id: string, palette: readonly string[]): string`
- `getLabelTextAlign` (value)
  - `(alignment: LabelHorizontalAlignment): TextAlign`
- `getLabelY` (value)
  - `(rect: ChartRect, paragraphHeight: number, alignment: LabelVerticalAlignment): number`
- `Grid` (value)
  - `<X extends ChartXValue = number, Y extends ChartXValue = number>(props: GridProps<X, Y>): import("react").JSX.Element`
- `GridDefaultOpacity` (value)
- `GridDefaultWidth` (value)
- `GridDefaultXVisible` (value)
- `GridDefaultYVisible` (value)
- `GridProps` (type)
- `inferChartScaleType` (value)
  - `(values: readonly ChartXValue[]): "linear" \| "point" \| "time"`
- `isSameChartSelection` (value)
  - `(left: ChartSelection \| null, right: ChartSelection \| null): boolean`
- `Label` (value)
  - `(props: LabelProps): import("react").JSX.Element \| null`
- `LabelDefaultHorizontalAlignment` (value)
- `LabelDefaultVerticalAlignment` (value)
- `LabelHorizontalAlignment` (type)
- `LabelProps` (type)
- `LabelVerticalAlignment` (type)
- `Line` (value)
  - `<X extends ChartXValue = number>(props: LineProps<X>): import("react").JSX.Element \| null`
- `LineChart` (value)
  - `<X extends ChartXValue = number>(props: LineChartProps<X>): import("react").JSX.Element`
- `LineChartCommonProps` (type)
- `LineChartCoordinate` (type)
- `LineChartCurve` (type)
- `LineChartDefaultNumericDomain` (value)
- `LineChartDefaultTickCount` (value)
- `LineChartLineOptions` (type)
- `LineChartPoint` (type)
- `LineChartProps` (type)
- `LineChartScale` (type)
- `LineChartXScaleModel` (type)
- `LineDefaultCap` (value)
- `LineDefaultColor` (value)
- `LineDefaultColors` (value)
- `LineDefaultCurve` (value)
- `LineDefaultJoin` (value)
- `LineDefaultOpacity` (value)
- `LineDefaultWidth` (value)
- `LineProps` (type)
- `MultiBarChart` (value)
  - `<X extends ChartXValue = string>(props: MultiBarChartProps<X>): import("react").JSX.Element`
- `MultiBarChartDefaultSeriesPadding` (value)
- `MultiBarChartProps` (type)
- `MultiBarChartSeries` (type)
- `MultiBarChartSeriesModel` (type)
- `MultiLineChart` (value)
  - `<X extends ChartXValue = number>(props: MultiLineChartProps<X>): import("react").JSX.Element`
- `MultiLineChartBodyProps` (type)
- `MultiLineChartProps` (type)
- `MultiLineChartSeries` (type)
- `MultiLineChartSeriesModel` (type)
- `MultiPieChart` (value)
  - `(props: MultiPieChartProps): import("react").JSX.Element`
- `MultiPieChartProps` (type)
- `MultiPieChartSeries` (type)
- `MultiPieChartSeriesModel` (type)
- `MultiPieDefaultRingPadding` (value)
- `normalizeRadiusRatio` (value)
  - `(value: number): number`
- `Pie` (value)
  - `(props: PieProps): import("react").JSX.Element \| null`
- `PieChart` (value)
  - `(props: PieChartProps): import("react").JSX.Element`
- `PieChartCommonProps` (type)
- `PieChartCoordinate` (type)
- `PieChartModel` (type)
- `PieChartPoint` (type)
- `PieChartProps` (type)
- `PieChartSliceOptions` (type)
- `PieDefaultColor` (value)
- `PieDefaultColors` (value)
- `PieDefaultCornerRadius` (value)
- `PieDefaultEndAngle` (value)
- `PieDefaultInnerRadius` (value)
- `PieDefaultOpacity` (value)
- `PieDefaultOuterRadius` (value)
- `PieDefaultPadAngle` (value)
- `PieDefaultStartAngle` (value)
- `PieDefaultStrokeWidth` (value)
- `PieProps` (type)
- `ResolvedGridLineOptions` (type)
- `resolveGridLineOptions` (value)
  - `(options: boolean \| ChartGridLineOptions \| undefined, defaultVisible: boolean, defaultColor: string, defaultWidth?: number): ResolvedGridLineOptions`
- `TabularNumsFeature` (value)
- `useBarChart` (hook)
  - `<X extends ChartXValue = string>(props: UseBarChartProps<X>, tokens?: ChartsTokens): UseBarChartResult<X>`
- `UseBarChartProps` (type)
- `UseBarChartResult` (type)
- `useChartCanvas` (hook)
  - `(): { ref: import("react").RefObject<import("@shopify/react-native-skia").CanvasRef \| null>; size: ChartSize; onLayout: (event: Readonly<{ bubbles: boolean \| undefined; cancelable: boolean \| undefined; currentTarget: number \| import("react-native").HostInstance; defaultPrevented: boolean \| undefined; dispatchConfig: Readonly<{ registrationName: string; }>; eventPhase: number \| undefined; preventDefault: () => void; isDefaultPrevented: () => boolean; stopPropagation: () => void; isPropagationStopped: () => boolean; isTrusted: boolean \| undefined; nativeEvent: Readonly<{ layout: Readonly<{ x: number; y: number; width: number; height: number; }>; }>; persist: () => void; target: (number \| undefined) \| import("react-native").HostInstance; timeStamp: number; type: string \| undefined; }>) => void; }`
- `useChartLayout` (hook)
  - `(size: ChartSize, insets?: Partial<ChartInsets>, defaultInsets?: Partial<ChartInsets>): ChartLayout`
- `useChartPresentation` (hook)
  - `(props: ChartPresentationProps): { selection: ChartSelection \| null; hiddenIds: readonly string[]; hidden: Set<string>; selectAt: (point: ChartPoint, targets: readonly ChartHitTarget[], plot: ChartRect, clearOnMiss?: any) => boolean; clearSelection: () => void; toggle: (id: string) => void; }`
- `useLineChart` (hook)
  - `<X extends ChartXValue = number>(props: UseLineChartProps<X>): UseLineChartResult<X>`
- `UseLineChartProps` (type)
- `UseLineChartResult` (type)
- `useMultiBarChart` (hook)
  - `<X extends ChartXValue = string>(props: UseMultiBarChartProps<X>, tokens?: ChartsTokens): UseMultiBarChartResult<X>`
- `UseMultiBarChartProps` (type)
- `UseMultiBarChartResult` (type)
- `useMultiLineChart` (hook)
  - `<X extends ChartXValue = number>(props: UseMultiLineChartProps<X>): UseMultiLineChartResult<X>`
- `UseMultiLineChartProps` (type)
- `UseMultiLineChartResult` (type)
- `useMultiPieChart` (hook)
  - `(props: UseMultiPieChartProps, tokens?: ChartsTokens): UseMultiPieChartResult`
- `UseMultiPieChartProps` (type)
- `UseMultiPieChartResult` (type)
- `usePieChart` (hook)
  - `(props: UsePieChartProps): UsePieChartResult`
- `UsePieChartProps` (type)
- `UsePieChartResult` (type)
- `XAxis` (value)
  - `<X extends ChartXValue = number>(props: XAxisProps<X>): import("react").JSX.Element`
- `XAxisProps` (type)
- `YAxis` (value)
  - `<Value = number>(props: YAxisProps<Value>): import("react").JSX.Element`
- `YAxisProps` (type)

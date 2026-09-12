import { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import {
  ChartInsets,
  ChartScaleType,
  ChartXAxisOptions,
  ChartYAxisOptions,
} from "./common.types";
import { ChartGridOptions } from "./grid.types";
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

export interface LineChartCommonProps<X extends ChartXValue = number> {
  fontManager?: SkTypefaceFontProvider;
  grid?: ChartGridOptions;
  xScaleType?: ChartScaleType;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
  insets?: Partial<ChartInsets>;
}

export interface LineChartProps<
  X extends ChartXValue = number,
> extends LineChartCommonProps<X> {
  data: readonly LineChartPoint<X>[];
  line?: LineChartLineOptions;
}

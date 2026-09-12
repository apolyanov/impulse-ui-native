import { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import {
  ChartInsets,
  ChartXAxisOptions,
  ChartYAxisOptions,
} from "./common.types";
import { ChartGridOptions } from "./grid.types";
import { ChartXValue } from "./line-chart.types";

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

export interface BarChartCommonProps<X extends ChartXValue = string> {
  fontManager?: SkTypefaceFontProvider;
  grid?: ChartGridOptions;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
  insets?: Partial<ChartInsets>;
  categoryPadding?: number;
}

export interface BarChartProps<
  X extends ChartXValue = string,
> extends BarChartCommonProps<X> {
  data: readonly BarChartPoint<X>[];
  bar?: BarChartBarOptions;
}

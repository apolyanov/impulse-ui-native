import {
  BarChartBarOptions,
  BarChartCommonProps,
  BarChartCoordinate,
  BarChartPoint,
} from "./bar-chart.types";
import { ChartXValue } from "./line-chart.types";

export interface MultiBarChartSeries<X extends ChartXValue = string> {
  id: string;
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
}

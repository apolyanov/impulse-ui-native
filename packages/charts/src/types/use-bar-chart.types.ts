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

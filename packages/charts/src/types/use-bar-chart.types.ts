import { BarChartCoordinate, BarChartPoint } from "./bar-chart.types";
import {
  ChartNumericDomain,
  ChartRect,
  ChartXAxisOptions,
  ChartYAxisOptions,
} from "./common.types";
import { ChartXValue, LineChartScale } from "./line-chart.types";

export interface UseBarChartProps<X extends ChartXValue = string> {
  data: readonly BarChartPoint<X>[];
  plot: ChartRect;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
  categoryPadding?: number;
}

export interface UseBarChartResult<X extends ChartXValue = string> {
  xDomain: readonly X[];
  yDomain: ChartNumericDomain;
  xTicks: readonly X[];
  yTicks: readonly number[];
  coordinates: readonly BarChartCoordinate<X>[];
  xScale: LineChartScale<X>;
  yScale: LineChartScale<number>;
  bandwidth: number;
}

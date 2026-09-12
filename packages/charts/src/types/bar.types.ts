import { BarChartBarOptions, BarChartCoordinate } from "./bar-chart.types";
import { ChartXValue } from "./line-chart.types";

export interface BarProps<
  X extends ChartXValue = string,
> extends BarChartBarOptions {
  coordinates: readonly BarChartCoordinate<X>[];
}

import {
  ChartXValue,
  LineChartCoordinate,
  LineChartLineOptions,
} from "./line-chart.types";

export interface LineProps<
  X extends ChartXValue = number,
> extends LineChartLineOptions {
  coordinates: readonly LineChartCoordinate<X>[];
}

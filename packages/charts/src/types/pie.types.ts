import { PieChartCoordinate, PieChartSliceOptions } from "./pie-chart.types";

export interface PieProps extends PieChartSliceOptions {
  coordinates: readonly PieChartCoordinate[];
}

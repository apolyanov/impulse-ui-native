import {
  PieChartCommonProps,
  PieChartCoordinate,
  PieChartPoint,
  PieChartSliceOptions,
} from "./pie-chart.types";

export interface MultiPieChartSeries {
  id: string;
  data: readonly PieChartPoint[];
  slice?: PieChartSliceOptions;
}

export interface MultiPieChartSeriesModel extends MultiPieChartSeries {
  coordinates: readonly PieChartCoordinate[];
  total: number;
}

export interface MultiPieChartProps extends PieChartCommonProps {
  series: readonly MultiPieChartSeries[];
  ringPadding?: number;
}

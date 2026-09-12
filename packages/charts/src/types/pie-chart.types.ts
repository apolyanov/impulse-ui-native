import { ChartInsets, ChartPoint } from "./common.types";

export interface PieChartPoint {
  id: string;
  value: number;
  color?: string;
}

export interface PieChartCoordinate {
  datum: PieChartPoint;
  index: number;
  center: ChartPoint;
  startAngle: number;
  endAngle: number;
  padAngle: number;
  padRadius: number;
  innerRadius: number;
  outerRadius: number;
}

export interface PieChartSliceOptions {
  visible?: boolean;
  colors?: readonly string[];
  opacity?: number;
  cornerRadius?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface PieChartCommonProps {
  insets?: Partial<ChartInsets>;
  innerRadius?: number;
  outerRadius?: number;
  padAngle?: number;
  startAngle?: number;
  endAngle?: number;
}

export interface PieChartProps extends PieChartCommonProps {
  data: readonly PieChartPoint[];
  slice?: PieChartSliceOptions;
}

export interface PieChartModel {
  coordinates: readonly PieChartCoordinate[];
  total: number;
}

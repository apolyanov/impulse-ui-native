import { ChartCartesianProps } from "./common.types";
import { ChartXValue } from "./line-chart.types";

export type BarChartOrientation = "vertical" | "horizontal";

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

export interface BarChartCommonProps<
  X extends ChartXValue = string,
> extends ChartCartesianProps<X> {
  categoryPadding?: number;
  orientation?: BarChartOrientation;
}

export interface BarChartProps<
  X extends ChartXValue = string,
> extends BarChartCommonProps<X> {
  data: readonly BarChartPoint<X>[];
  bar?: BarChartBarOptions;
}

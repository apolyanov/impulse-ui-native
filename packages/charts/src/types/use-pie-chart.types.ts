import { ChartRect } from "./common.types";
import {
  PieChartCommonProps,
  PieChartModel,
  PieChartPoint,
} from "./pie-chart.types";

export interface UsePieChartProps extends Pick<
  PieChartCommonProps,
  "endAngle" | "innerRadius" | "outerRadius" | "padAngle" | "startAngle"
> {
  data: readonly PieChartPoint[];
  plot: ChartRect;
}

export type UsePieChartResult = PieChartModel;

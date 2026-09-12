import { ChartRect } from "./common.types";
import {
  MultiPieChartProps,
  MultiPieChartSeriesModel,
} from "./multi-pie-chart.types";
import { PieChartCommonProps } from "./pie-chart.types";

export interface UseMultiPieChartProps
  extends
    Pick<
      PieChartCommonProps,
      "endAngle" | "innerRadius" | "outerRadius" | "padAngle" | "startAngle"
    >,
    Pick<MultiPieChartProps, "ringPadding" | "series"> {
  plot: ChartRect;
}

export interface UseMultiPieChartResult {
  series: readonly MultiPieChartSeriesModel[];
}

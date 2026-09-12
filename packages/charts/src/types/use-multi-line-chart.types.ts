import { ChartRect } from "./common.types";
import { ChartXValue } from "./line-chart.types";
import {
  MultiLineChartProps,
  MultiLineChartSeriesModel,
} from "./multi-line-chart.types";
import { UseLineChartResult } from "./use-line-chart.types";

export interface UseMultiLineChartProps<
  X extends ChartXValue = number,
> extends Pick<
  MultiLineChartProps<X>,
  "series" | "xAxis" | "xScaleType" | "yAxis"
> {
  plot: ChartRect;
}

export interface UseMultiLineChartResult<
  X extends ChartXValue = number,
> extends Omit<UseLineChartResult<X>, "coordinates"> {
  series: readonly MultiLineChartSeriesModel<X>[];
}

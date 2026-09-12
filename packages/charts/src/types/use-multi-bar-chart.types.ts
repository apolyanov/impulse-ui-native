import { ChartRect } from "./common.types";
import { ChartXValue } from "./line-chart.types";
import {
  MultiBarChartProps,
  MultiBarChartSeriesModel,
} from "./multi-bar-chart.types";
import { UseBarChartResult } from "./use-bar-chart.types";

export interface UseMultiBarChartProps<
  X extends ChartXValue = string,
> extends Pick<
  MultiBarChartProps<X>,
  "categoryPadding" | "series" | "seriesPadding" | "xAxis" | "yAxis"
> {
  plot: ChartRect;
}

export interface UseMultiBarChartResult<
  X extends ChartXValue = string,
> extends Omit<UseBarChartResult<X>, "coordinates"> {
  series: readonly MultiBarChartSeriesModel<X>[];
}

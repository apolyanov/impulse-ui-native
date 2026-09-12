import { useMemo } from "react";

import {
  ChartXValue,
  UseMultiBarChartProps,
  UseMultiBarChartResult,
} from "../types";
import { createMultiBarChartModel } from "../utils";

export function useMultiBarChart<X extends ChartXValue = string>(
  props: UseMultiBarChartProps<X>,
): UseMultiBarChartResult<X> {
  const { categoryPadding, plot, series, seriesPadding, xAxis, yAxis } = props;

  return useMemo(
    () =>
      createMultiBarChartModel({
        categoryPadding,
        plot,
        series,
        seriesPadding,
        xAxis,
        yAxis,
      }),
    [categoryPadding, plot, series, seriesPadding, xAxis, yAxis],
  );
}

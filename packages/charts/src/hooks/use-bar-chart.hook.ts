import { useMemo } from "react";

import { ChartXValue, UseBarChartProps, UseBarChartResult } from "../types";
import { createBarChartModel } from "../utils";

export function useBarChart<X extends ChartXValue = string>(
  props: UseBarChartProps<X>,
): UseBarChartResult<X> {
  const { categoryPadding, data, plot, xAxis, yAxis } = props;

  return useMemo(
    () => createBarChartModel({ categoryPadding, data, plot, xAxis, yAxis }),
    [categoryPadding, data, plot, xAxis, yAxis],
  );
}

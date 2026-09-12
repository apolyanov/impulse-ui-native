import { useMemo } from "react";

import { ChartXValue, UseLineChartProps, UseLineChartResult } from "../types";
import { createLineChartModel } from "../utils";

export function useLineChart<X extends ChartXValue = number>(
  props: UseLineChartProps<X>,
): UseLineChartResult<X> {
  const { data, plot, xAxis, xScaleType, yAxis } = props;

  return useMemo(
    () => createLineChartModel({ data, plot, xAxis, xScaleType, yAxis }),
    [data, plot, xAxis, xScaleType, yAxis],
  );
}

import { useMemo } from "react";

import { UsePieChartProps, UsePieChartResult } from "../types";
import { createPieChartModel } from "../utils";

export function usePieChart(props: UsePieChartProps): UsePieChartResult {
  const {
    data,
    endAngle,
    innerRadius,
    outerRadius,
    padAngle,
    plot,
    startAngle,
  } = props;

  return useMemo(
    () =>
      createPieChartModel({
        data,
        endAngle,
        innerRadius,
        outerRadius,
        padAngle,
        plot,
        startAngle,
      }),
    [data, endAngle, innerRadius, outerRadius, padAngle, plot, startAngle],
  );
}

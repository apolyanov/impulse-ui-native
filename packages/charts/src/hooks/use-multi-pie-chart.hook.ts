import { useMemo } from "react";

import { UseMultiPieChartProps, UseMultiPieChartResult } from "../types";
import { createMultiPieChartModel } from "../utils";

export function useMultiPieChart(
  props: UseMultiPieChartProps,
): UseMultiPieChartResult {
  const {
    endAngle,
    innerRadius,
    outerRadius,
    padAngle,
    plot,
    ringPadding,
    series,
    startAngle,
  } = props;

  return useMemo(
    () =>
      createMultiPieChartModel({
        endAngle,
        innerRadius,
        outerRadius,
        padAngle,
        plot,
        ringPadding,
        series,
        startAngle,
      }),
    [
      endAngle,
      innerRadius,
      outerRadius,
      padAngle,
      plot,
      ringPadding,
      series,
      startAngle,
    ],
  );
}

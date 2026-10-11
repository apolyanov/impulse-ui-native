import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { UseMultiPieChartProps, UseMultiPieChartResult } from "../types";
import { createMultiPieChartModel } from "../utils";

export function useMultiPieChart(
  props: UseMultiPieChartProps,
  tokens: ChartsTokens = DefaultChartsTokens,
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
      createMultiPieChartModel(
        {
          endAngle,
          innerRadius,
          outerRadius,
          padAngle,
          plot,
          ringPadding,
          series,
          startAngle,
        },
        tokens,
      ),
    [
      endAngle,
      innerRadius,
      outerRadius,
      padAngle,
      plot,
      ringPadding,
      series,
      startAngle,
      tokens,
    ],
  );
}

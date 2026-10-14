import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { UseMultiPieChartProps, UseMultiPieChartResult } from "../types";
import { createMultiPieChartModel } from "../utils";
import { normalizeChartNumber } from "../utils/chart-number.util";

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
    series,
    startAngle,
  } = props;

  const ringPadding = normalizeChartNumber(
    props.ringPadding,
    tokens.pie.ringPadding,
  );

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

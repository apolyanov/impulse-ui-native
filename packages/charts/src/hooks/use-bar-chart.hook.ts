import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { ChartXValue, UseBarChartProps, UseBarChartResult } from "../types";
import { createBarChartModel } from "../utils";

export function useBarChart<X extends ChartXValue = string>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseBarChartResult<X> {
  const { categoryPadding, data, plot, xAxis, yAxis } = props;

  return useMemo(
    () =>
      createBarChartModel(
        { categoryPadding, data, plot, xAxis, yAxis },
        tokens,
      ),
    [categoryPadding, data, plot, xAxis, yAxis, tokens],
  );
}

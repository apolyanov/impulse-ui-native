import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import {
  ChartXValue,
  UseMultiBarChartProps,
  UseMultiBarChartResult,
} from "../types";
import { createMultiBarChartModel } from "../utils";

export function useMultiBarChart<X extends ChartXValue = string>(
  props: UseMultiBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiBarChartResult<X> {
  const { categoryPadding, plot, series, seriesPadding, xAxis, yAxis } = props;

  return useMemo(
    () =>
      createMultiBarChartModel(
        {
          categoryPadding,
          plot,
          series,
          seriesPadding,
          xAxis,
          yAxis,
        },
        tokens,
      ),
    [categoryPadding, plot, series, seriesPadding, xAxis, yAxis, tokens],
  );
}

import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type {
  ChartXValue,
  UseMultiBarChartProps,
  UseMultiBarChartResult,
} from "../types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import { normalizeBarChartPadding } from "../utils/bar-chart.util";
import { createMultiBarChartModel } from "../utils/multi-bar-chart.util";

export function useMultiBarChart<X extends ChartXValue = string>(
  props: UseMultiBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiBarChartResult<X> {
  const { series, plot, orientation, mode } = props;
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    tokens.bar.categoryPadding,
  );
  const seriesPadding = normalizeBarChartPadding(
    props.seriesPadding,
    tokens.bar.seriesPadding,
  );
  const xTickCount = props.xAxis?.tickCount;
  const yTickCount = props.yAxis?.tickCount;
  const yDomain = props.yAxis?.domain;

  return useMemo(
    () =>
      createMultiBarChartModel({
        series,
        plot,
        orientation,
        mode,
        categoryPadding,
        seriesPadding,
        xAxis: { tickCount: xTickCount },
        yAxis: { tickCount: yTickCount, domain: yDomain },
      }),
    [
      series,
      plot,
      orientation,
      mode,
      categoryPadding,
      seriesPadding,
      xTickCount,
      yTickCount,
      yDomain,
    ],
  );
}

import { useMemo } from "react";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type {
  ChartXValue,
  UseBarChartProps,
  UseBarChartResult,
} from "../types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import {
  createBarChartModel,
  normalizeBarChartPadding,
} from "../utils/bar-chart.util";

export function useBarChart<X extends ChartXValue = string>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseBarChartResult<X> {
  const { data, plot, orientation } = props;
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    tokens.bar.categoryPadding,
  );
  const xTickCount = props.xAxis?.tickCount;
  const yTickCount = props.yAxis?.tickCount;
  const yDomain = props.yAxis?.domain;

  return useMemo(
    () =>
      createBarChartModel({
        data,
        plot,
        orientation,
        categoryPadding,
        xAxis: { tickCount: xTickCount },
        yAxis: { tickCount: yTickCount, domain: yDomain },
      }),
    [data, plot, orientation, categoryPadding, xTickCount, yTickCount, yDomain],
  );
}

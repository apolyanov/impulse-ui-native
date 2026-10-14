import { useMemo } from "react";

import type {
  ChartCartesianScaleModel,
  ChartXValue,
  UseLineChartProps,
} from "../types";
import { createLineChartScaleModel } from "../utils/line-chart.util";

export function useLineChartScale<X extends ChartXValue>(
  props: UseLineChartProps<X>,
): ChartCartesianScaleModel<X> {
  const { data, plot, xScaleType } = props;
  const xTickCount = props.xAxis?.tickCount;
  const yTickCount = props.yAxis?.tickCount;
  const yDomain = props.yAxis?.domain;

  return useMemo(
    () =>
      createLineChartScaleModel({
        data,
        plot,
        xScaleType,
        xAxis: { tickCount: xTickCount },
        yAxis: { tickCount: yTickCount, domain: yDomain },
      }),
    [data, plot, xScaleType, xTickCount, yTickCount, yDomain],
  );
}

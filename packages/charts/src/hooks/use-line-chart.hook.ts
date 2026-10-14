import { useMemo } from "react";

import type {
  ChartXValue,
  UseLineChartProps,
  UseLineChartResult,
} from "../types";
import { createLineChartCoordinates } from "../utils/line-chart.util";
import { useLineChartScale } from "./use-line-chart-scale.hook";

export function useLineChart<X extends ChartXValue = number>(
  props: UseLineChartProps<X>,
): UseLineChartResult<X> {
  const model = useLineChartScale(props);
  const { data } = props;
  const coordinates = useMemo(
    () => createLineChartCoordinates(data, model.xScale, model.yScale),
    [data, model.xScale, model.yScale],
  );

  return useMemo(() => ({ ...model, coordinates }), [model, coordinates]);
}

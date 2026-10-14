import { useMemo } from "react";

import {
  ChartXValue,
  UseMultiLineChartProps,
  UseMultiLineChartResult,
} from "../types";
import { createLineChartCoordinates } from "../utils/line-chart.util";
import { useLineChartScale } from "./use-line-chart-scale.hook";

export function useMultiLineChart<X extends ChartXValue = number>(
  props: UseMultiLineChartProps<X>,
): UseMultiLineChartResult<X> {
  const { plot, series, xAxis, xScaleType, yAxis } = props;

  const data = useMemo(
    () => series.flatMap((currentSeries) => currentSeries.data),
    [series],
  );

  const { xDomain, xScale, xTicks, yDomain, yScale, yTicks } =
    useLineChartScale({ data, plot, xAxis, xScaleType, yAxis });

  const seriesModels = useMemo(
    () =>
      series.map((currentSeries) => ({
        ...currentSeries,
        coordinates: createLineChartCoordinates(
          currentSeries.data,
          xScale,
          yScale,
        ),
      })),
    [series, xScale, yScale],
  );

  return useMemo(
    () => ({
      series: seriesModels,
      xDomain,
      xScale,
      xTicks,
      yDomain,
      yScale,
      yTicks,
    }),
    [seriesModels, xDomain, xScale, xTicks, yDomain, yScale, yTicks],
  );
}

import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { ChartRect, ChartXValue, MultiLineChartSeriesModel } from "../types";
import { getChartColor } from "./chart-color.util";

export function createDrawableMultiLineChartSeries<X extends ChartXValue>(
  series: MultiLineChartSeriesModel<X>,
  _index: number,
  _plot: ChartRect,
  tokens: ChartsTokens = DefaultChartsTokens,
): MultiLineChartSeriesModel<X> {
  const width = series.line?.width ?? tokens.line.width;

  return {
    ...series,
    coordinates: series.coordinates,
    line: {
      ...series.line,
      width,
      color: series.line?.color ?? getChartColor(series.id, tokens.palette),
    },
  };
}

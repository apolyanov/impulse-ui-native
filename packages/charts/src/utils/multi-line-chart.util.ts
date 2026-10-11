import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import { ChartRect, ChartXValue, MultiLineChartSeriesModel } from "../types";
import { createInsetRect } from "./chart-layout.util";
import { fitLineCoordinatesToRect } from "./line.util";

export function createDrawableMultiLineChartSeries<X extends ChartXValue>(
  series: MultiLineChartSeriesModel<X>,
  index: number,
  plot: ChartRect,
  tokens: ChartsTokens = DefaultChartsTokens,
): MultiLineChartSeriesModel<X> {
  const width = series.line?.width ?? tokens.line.width;
  const linePlot = createInsetRect(plot, width / 2);

  return {
    ...series,
    coordinates: fitLineCoordinatesToRect(series.coordinates, plot, linePlot),
    line: {
      ...series.line,
      width,
      color:
        series.line?.color ??
        tokens.palette[index % tokens.palette.length] ??
        tokens.palette[0],
    },
  };
}

import {
  LineDefaultColor,
  LineDefaultColors,
  LineDefaultWidth,
} from "../constants";
import { ChartRect, ChartXValue, MultiLineChartSeriesModel } from "../types";
import { createInsetRect } from "./chart-layout.util";
import { fitLineCoordinatesToRect } from "./line.util";

export function createDrawableMultiLineChartSeries<X extends ChartXValue>(
  series: MultiLineChartSeriesModel<X>,
  index: number,
  plot: ChartRect,
): MultiLineChartSeriesModel<X> {
  const width = series.line?.width ?? LineDefaultWidth;
  const linePlot = createInsetRect(plot, width / 2);

  return {
    ...series,
    coordinates: fitLineCoordinatesToRect(series.coordinates, plot, linePlot),
    line: {
      ...series.line,
      color:
        series.line?.color ??
        LineDefaultColors[index % LineDefaultColors.length] ??
        LineDefaultColor,
    },
  };
}

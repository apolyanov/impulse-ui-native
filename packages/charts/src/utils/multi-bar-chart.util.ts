import { scaleBand } from "d3-scale";

import { MultiBarChartDefaultSeriesPadding } from "../constants/bar-chart.constants";
import { BarDefaultColor, BarDefaultColors } from "../constants/bar.constants";
import {
  ChartXValue,
  MultiBarChartSeriesModel,
  UseMultiBarChartProps,
  UseMultiBarChartResult,
} from "../types";
import {
  createBarChartCoordinates,
  createBarChartScaleModel,
  normalizeBarChartPadding,
} from "./bar-chart.util";

export function createMultiBarChartModel<X extends ChartXValue>(
  props: UseMultiBarChartProps<X>,
): UseMultiBarChartResult<X> {
  const data = props.series.flatMap((series) => series.data);
  const model = createBarChartScaleModel({
    data,
    plot: props.plot,
    xAxis: props.xAxis,
    yAxis: props.yAxis,
    categoryPadding: props.categoryPadding,
  });
  const seriesScale = scaleBand<number>()
    .domain(props.series.map((_, index) => index))
    .range([0, model.bandwidth])
    .paddingInner(
      normalizeBarChartPadding(
        props.seriesPadding,
        MultiBarChartDefaultSeriesPadding,
      ),
    );
  const seriesBandwidth = seriesScale.bandwidth();
  const series: MultiBarChartSeriesModel<X>[] = props.series.map(
    (currentSeries, index) => ({
      ...currentSeries,
      coordinates: createBarChartCoordinates(
        currentSeries.data,
        model.xStartScale,
        model.yScale,
        model.baseline,
        seriesBandwidth,
        seriesScale(index) ?? 0,
      ),
    }),
  );

  return {
    series,
    xDomain: model.xDomain,
    yDomain: model.yDomain,
    xTicks: model.xTicks,
    yTicks: model.yTicks,
    xScale: model.xScale,
    yScale: model.yScale,
    bandwidth: model.bandwidth,
  };
}

export function createDrawableMultiBarChartSeries<X extends ChartXValue>(
  series: MultiBarChartSeriesModel<X>,
  index: number,
): MultiBarChartSeriesModel<X> {
  return {
    ...series,
    bar: {
      ...series.bar,
      color:
        series.bar?.color ??
        BarDefaultColors[index % BarDefaultColors.length] ??
        BarDefaultColor,
    },
  };
}

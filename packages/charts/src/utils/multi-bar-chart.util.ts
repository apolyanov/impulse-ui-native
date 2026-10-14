import { scaleBand } from "d3-scale";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type { BarChartStackOffsets } from "../types/bar-stack.types";
import { DefaultChartsTokens } from "../constants/charts.constants";
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
import {
  createStackedBarCoordinates,
  createStackedBarDomainData,
} from "./bar-stack.util";
import { getChartColor } from "./chart-color.util";

export function createMultiBarChartModel<X extends ChartXValue>(
  props: UseMultiBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiBarChartResult<X> {
  const data = props.series.flatMap((series) => series.data);
  const domainData =
    props.mode === "stacked" ? createStackedBarDomainData(data) : data;
  const model = createBarChartScaleModel(
    {
      data: domainData,
      plot: props.plot,
      xAxis: props.xAxis,
      yAxis: props.yAxis,
      categoryPadding: props.categoryPadding,
      orientation: props.orientation,
    },
    tokens,
  );
  const seriesScale = scaleBand<number>()
    .domain(props.series.map((_, index) => index))
    .range([0, model.bandwidth])
    .paddingInner(
      normalizeBarChartPadding(props.seriesPadding, tokens.bar.seriesPadding),
    );
  const seriesBandwidth = seriesScale.bandwidth();
  const stackOffsets: BarChartStackOffsets = new Map();
  const series: MultiBarChartSeriesModel<X>[] = props.series.map(
    (currentSeries, index) => ({
      ...currentSeries,
      coordinates:
        props.mode === "stacked"
          ? createStackedBarCoordinates(
              currentSeries.data,
              model,
              stackOffsets,
              props.orientation,
            )
          : createBarChartCoordinates(
              currentSeries.data,
              model.xStartScale,
              model.yScale,
              model.baseline,
              seriesBandwidth,
              seriesScale(index) ?? 0,
              props.orientation,
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
  _index: number,
  tokens: ChartsTokens = DefaultChartsTokens,
): MultiBarChartSeriesModel<X> {
  return {
    ...series,
    bar: {
      ...series.bar,
      color: series.bar?.color ?? getChartColor(series.id, tokens.palette),
    },
  };
}

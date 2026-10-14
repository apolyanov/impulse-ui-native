import { extent } from "d3-array";
import { scaleBand } from "d3-scale";

import type { ChartsTokens } from "@impulse-ui-native/theme";

import type { BarChartScaleModel } from "../types/chart-scale.types";
import { DefaultChartsTokens } from "../constants/charts.constants";
import { LineChartDefaultNumericDomain } from "../constants/line-chart.constants";
import {
  BarChartCoordinate,
  BarChartOrientation,
  BarChartPoint,
  ChartNumericDomain,
  ChartXValue,
  LineChartScale,
  UseBarChartProps,
  UseBarChartResult,
} from "../types";
import { createBarChartRectangle } from "./bar-geometry.util";
import {
  isFiniteChartCoordinate,
  normalizeChartNumber,
} from "./chart-number.util";
import { createChartNumericScale } from "./chart-scale.util";
import { getChartTickCount, selectChartTicks } from "./chart-ticks.util";
import {
  isValidChartXValue,
  normalizeNumericDomain,
} from "./numeric-domain.util";

export type { BarChartScaleModel } from "../types/chart-scale.types";

export function createBarChartModel<X extends ChartXValue>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseBarChartResult<X> {
  const model = createBarChartScaleModel(props, tokens);

  return {
    xDomain: model.xDomain,
    yDomain: model.yDomain,
    xTicks: model.xTicks,
    yTicks: model.yTicks,
    xScale: model.xScale,
    yScale: model.yScale,
    bandwidth: model.bandwidth,
    coordinates: createBarChartCoordinates(
      props.data,
      model.xStartScale,
      model.yScale,
      model.baseline,
      model.bandwidth,
      0,
      props.orientation,
    ),
  };
}

export function createBarChartCoordinates<X extends ChartXValue>(
  data: readonly BarChartPoint<X>[],
  xStartScale: LineChartScale<X>,
  yScale: LineChartScale<number>,
  baseline: number,
  width: number,
  offset = 0,
  orientation: BarChartOrientation = "vertical",
): BarChartCoordinate<X>[] {
  const baselineY = yScale(baseline);

  if (!isFiniteChartCoordinate(baselineY) || width <= 0) {
    return [];
  }

  return data.reduce<BarChartCoordinate<X>[]>((coordinates, datum, index) => {
    const x = xStartScale(datum.x);
    const valueY = datum.y === null ? undefined : yScale(datum.y);

    if (!isFiniteChartCoordinate(x) || !isFiniteChartCoordinate(valueY)) {
      return coordinates;
    }

    coordinates.push(
      createBarChartRectangle(
        datum,
        index,
        x + offset,
        baselineY,
        valueY,
        width,
        orientation,
      ),
    );

    return coordinates;
  }, []);
}

export function createBarChartScaleModel<X extends ChartXValue>(
  props: UseBarChartProps<X>,
  tokens: ChartsTokens = DefaultChartsTokens,
): BarChartScaleModel<X> {
  const xTickCount = getChartTickCount(props.xAxis?.tickCount);
  const yTickCount = getChartTickCount(props.yAxis?.tickCount);
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    tokens.bar.categoryPadding,
  );
  const xBandScale = scaleBand<X>()
    .domain(
      props.data
        .map((point) => point.x)
        .filter((value) => isValidChartXValue(value)),
    )
    .range(
      props.orientation === "horizontal"
        ? [props.plot.y, props.plot.y + props.plot.height]
        : [props.plot.x, props.plot.x + props.plot.width],
    )
    .paddingInner(categoryPadding)
    .paddingOuter(categoryPadding / 2);
  const xDomain = xBandScale.domain();
  const bandwidth = xDomain.length === 0 ? 0 : xBandScale.bandwidth();

  const xStartScale: LineChartScale<X> = (value) => xBandScale(value);

  const xScale: LineChartScale<X> = (value) => {
    const start = xBandScale(value);

    return start === undefined ? undefined : start + bandwidth / 2;
  };

  const values = props.data.reduce<number[]>((result, point) => {
    if (
      point.y !== null &&
      Number.isFinite(point.y) &&
      isValidChartXValue(point.x)
    ) {
      result.push(point.y);
    }

    return result;
  }, []);
  const yDomain = normalizeNumericDomain(
    props.yAxis?.domain ?? getBarNumericDomain(values),
  );
  const numeric = createChartNumericScale(
    yDomain,
    props.orientation === "horizontal"
      ? [props.plot.x, props.plot.x + props.plot.width]
      : [props.plot.y + props.plot.height, props.plot.y],
    yTickCount,
    !props.yAxis?.domain,
  );

  return {
    xDomain,
    yDomain: numeric.domain,
    xTicks: selectChartTicks(xDomain, xTickCount),
    yTicks: numeric.ticks,
    xScale,
    xStartScale,
    yScale: numeric.scale,
    bandwidth,
    baseline: getBaseline(numeric.domain),
  };
}

function getBarNumericDomain(values: readonly number[]): ChartNumericDomain {
  const [minimum, maximum] = extent(values);

  if (minimum === undefined || maximum === undefined) {
    return LineChartDefaultNumericDomain;
  }

  const domain = [Math.min(0, minimum), Math.max(0, maximum)] as const;

  return domain[0] === domain[1] ? LineChartDefaultNumericDomain : domain;
}

function getBaseline(domain: ChartNumericDomain): number {
  const minimum = Math.min(...domain);
  const maximum = Math.max(...domain);

  if (minimum > 0) {
    return minimum;
  }

  if (maximum < 0) {
    return maximum;
  }

  return 0;
}

export function normalizeBarChartPadding(
  value: number | undefined,
  fallback: number,
): number {
  return normalizeChartNumber(value, fallback, 0, 1);
}

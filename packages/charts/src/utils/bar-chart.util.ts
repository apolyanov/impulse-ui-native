import { extent } from "d3-array";
import { scaleBand, scaleLinear } from "d3-scale";

import { BarChartDefaultCategoryPadding } from "../constants/bar-chart.constants";
import {
  LineChartDefaultNumericDomain,
  LineChartDefaultTickCount,
} from "../constants/line-chart.constants";
import {
  BarChartCoordinate,
  BarChartPoint,
  ChartNumericDomain,
  ChartXValue,
  LineChartScale,
  UseBarChartProps,
  UseBarChartResult,
} from "../types";

export interface BarChartScaleModel<X extends ChartXValue> {
  xDomain: readonly X[];
  yDomain: ChartNumericDomain;
  xTicks: readonly X[];
  yTicks: readonly number[];
  xScale: LineChartScale<X>;
  xStartScale: LineChartScale<X>;
  yScale: LineChartScale<number>;
  bandwidth: number;
  baseline: number;
}

export function createBarChartModel<X extends ChartXValue>(
  props: UseBarChartProps<X>,
): UseBarChartResult<X> {
  const model = createBarChartScaleModel(props);

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
): BarChartCoordinate<X>[] {
  const baselineY = yScale(baseline);

  if (!isFiniteCoordinate(baselineY) || width <= 0) {
    return [];
  }

  return data.reduce<BarChartCoordinate<X>[]>((coordinates, datum, index) => {
    const x = xStartScale(datum.x);
    const valueY = datum.y === null ? undefined : yScale(datum.y);

    if (!isFiniteCoordinate(x) || !isFiniteCoordinate(valueY)) {
      return coordinates;
    }

    coordinates.push({
      datum,
      index,
      x: x + offset,
      y: Math.min(valueY, baselineY),
      width,
      height: Math.abs(baselineY - valueY),
    });

    return coordinates;
  }, []);
}

export function createBarChartScaleModel<X extends ChartXValue>(
  props: UseBarChartProps<X>,
): BarChartScaleModel<X> {
  const xTickCount = getTickCount(props.xAxis?.tickCount);
  const yTickCount = getTickCount(props.yAxis?.tickCount);
  const categoryPadding = normalizeBarChartPadding(
    props.categoryPadding,
    BarChartDefaultCategoryPadding,
  );
  const xBandScale = scaleBand<X>()
    .domain(
      props.data
        .map((point) => point.x)
        .filter((value) => isValidXValue(value)),
    )
    .range([props.plot.x, props.plot.x + props.plot.width])
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
    if (point.y !== null && Number.isFinite(point.y)) {
      result.push(point.y);
    }

    return result;
  }, []);
  const yDomain = props.yAxis?.domain ?? getBarNumericDomain(values);
  const d3YScale = scaleLinear()
    .domain(yDomain)
    .range([props.plot.y + props.plot.height, props.plot.y]);

  if (!props.yAxis?.domain && yTickCount > 0) {
    d3YScale.nice(yTickCount);
  }

  const resolvedYDomain = d3YScale.domain() as [number, number];
  const yScale: LineChartScale<number> = (value) => d3YScale(value);

  return {
    xDomain,
    yDomain: resolvedYDomain,
    xTicks: selectTicks(xDomain, xTickCount),
    yTicks: d3YScale.ticks(yTickCount),
    xScale,
    xStartScale,
    yScale,
    bandwidth,
    baseline: getBaseline(resolvedYDomain),
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

function getTickCount(tickCount: number | undefined): number {
  return tickCount === undefined || !Number.isFinite(tickCount)
    ? LineChartDefaultTickCount
    : Math.max(0, Math.floor(tickCount));
}

export function normalizeBarChartPadding(
  value: number | undefined,
  fallback: number,
): number {
  const padding =
    value === undefined || !Number.isFinite(value) ? fallback : value;

  return Math.min(1, Math.max(0, padding));
}

function selectTicks<X>(values: readonly X[], tickCount: number): X[] {
  if (tickCount <= 0 || values.length === 0) {
    return [];
  }

  if (values.length <= tickCount) {
    return [...values];
  }

  if (tickCount === 1) {
    return [values[0]!];
  }

  const lastIndex = values.length - 1;

  return Array.from(
    { length: tickCount },
    (_, index) => values[Math.round((index * lastIndex) / (tickCount - 1))]!,
  );
}

function isFiniteCoordinate(value: number | undefined): value is number {
  return value !== undefined && Number.isFinite(value);
}

function isValidXValue<X extends ChartXValue>(value: X): boolean {
  return value instanceof Date
    ? Number.isFinite(value.getTime())
    : typeof value === "string" || Number.isFinite(value);
}

import { extent } from "d3-array";
import { scaleLinear, scalePoint, scaleTime } from "d3-scale";

import {
  LineChartDefaultNumericDomain,
  LineChartDefaultTickCount,
} from "../constants";
import {
  ChartNumericDomain,
  ChartXValue,
  LineChartCoordinate,
  LineChartPoint,
  LineChartScale,
  LineChartXScaleModel,
  UseLineChartProps,
  UseLineChartResult,
} from "../types";

export function createLineChartModel<X extends ChartXValue>(
  props: UseLineChartProps<X>,
): UseLineChartResult<X> {
  const xTickCount = getTickCount(props.xAxis?.tickCount);
  const yTickCount = getTickCount(props.yAxis?.tickCount);
  const xRange: ChartNumericDomain = [
    props.plot.x,
    props.plot.x + props.plot.width,
  ];
  const yRange: ChartNumericDomain = [
    props.plot.y + props.plot.height,
    props.plot.y,
  ];

  const xModel = createXScale(
    props.data.map((point) => point.x),
    props.xScaleType ?? "linear",
    xRange,
    xTickCount,
  );

  const yValues = props.data.reduce<number[]>((values, point) => {
    if (point.y !== null && Number.isFinite(point.y)) {
      values.push(point.y);
    }

    return values;
  }, []);
  const yDomain = props.yAxis?.domain ?? getNumericDomain(yValues);
  const d3YScale = scaleLinear().domain(yDomain).range(yRange);

  if (!props.yAxis?.domain && yTickCount > 0) {
    d3YScale.nice(yTickCount);
  }

  const resolvedYDomain = d3YScale.domain() as [number, number];
  const yScale: LineChartScale<number> = (value) => d3YScale(value);
  const coordinates = createLineChartCoordinates(
    props.data,
    xModel.scale,
    yScale,
  );

  return {
    xDomain: xModel.domain,
    yDomain: resolvedYDomain,
    xTicks: xModel.ticks,
    yTicks: d3YScale.ticks(yTickCount),
    coordinates,
    xScale: xModel.scale,
    yScale,
  };
}

export function createLineChartCoordinates<X extends ChartXValue>(
  data: readonly LineChartPoint<X>[],
  xScale: LineChartScale<X>,
  yScale: LineChartScale<number>,
): LineChartCoordinate<X>[] {
  return data.map((datum, index) => {
    const x = xScale(datum.x);
    const y = datum.y === null ? undefined : yScale(datum.y);

    return {
      datum,
      index,
      x: isFiniteCoordinate(x) ? x : null,
      y: isFiniteCoordinate(y) ? y : null,
    };
  });
}

function createXScale<X extends ChartXValue>(
  values: readonly X[],
  scaleType: UseLineChartProps<X>["xScaleType"],
  range: ChartNumericDomain,
  tickCount: number,
): LineChartXScaleModel<X> {
  if (scaleType === "point") {
    const d3Scale = scalePoint<X>().domain(values).range(range);
    const domain = d3Scale.domain();

    return {
      domain,
      ticks: selectPointTicks(domain, tickCount),
      scale: (value) => d3Scale(value),
    };
  }

  if (scaleType === "time") {
    const dates = values.filter(
      (value): value is Extract<X, Date> =>
        value instanceof Date && Number.isFinite(value.getTime()),
    );
    const [minimum, maximum] = extent(dates);
    const domain =
      minimum && maximum
        ? ([minimum, maximum] as const)
        : ([new Date(0), new Date(1)] as const);
    const d3Scale = scaleTime().domain(domain).range(range);

    if (tickCount > 0) {
      d3Scale.nice(tickCount);
    }

    return {
      domain: d3Scale.domain() as X[],
      ticks: d3Scale.ticks(tickCount) as X[],
      scale: (value) =>
        value instanceof Date && Number.isFinite(value.getTime())
          ? d3Scale(value)
          : undefined,
    };
  }

  const numbers = values.filter(
    (value): value is Extract<X, number> =>
      typeof value === "number" && Number.isFinite(value),
  );
  const d3Scale = scaleLinear().domain(getNumericDomain(numbers)).range(range);

  if (tickCount > 0) {
    d3Scale.nice(tickCount);
  }

  return {
    domain: d3Scale.domain() as X[],
    ticks: d3Scale.ticks(tickCount) as X[],
    scale: (value) =>
      typeof value === "number" && Number.isFinite(value)
        ? d3Scale(value)
        : undefined,
  };
}

function getNumericDomain(values: readonly number[]): ChartNumericDomain {
  const [minimum, maximum] = extent(values);

  return minimum === undefined || maximum === undefined
    ? LineChartDefaultNumericDomain
    : [minimum, maximum];
}

function getTickCount(tickCount: number | undefined): number {
  return tickCount === undefined || !Number.isFinite(tickCount)
    ? LineChartDefaultTickCount
    : Math.max(0, Math.floor(tickCount));
}

function selectPointTicks<X>(values: readonly X[], tickCount: number): X[] {
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

  return Array.from({ length: tickCount }, (_, index) => {
    const valueIndex = Math.round((index * lastIndex) / (tickCount - 1));

    return values[valueIndex]!;
  });
}

function isFiniteCoordinate(value: number | undefined): value is number {
  return value !== undefined && Number.isFinite(value);
}

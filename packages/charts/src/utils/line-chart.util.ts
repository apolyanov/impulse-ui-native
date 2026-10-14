import { extent } from "d3-array";
import { scalePoint, scaleTime } from "d3-scale";

import { LineChartDefaultNumericDomain } from "../constants/line-chart.constants";
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
import { isFiniteChartCoordinate } from "./chart-number.util";
import { createChartNumericScale } from "./chart-scale.util";
import { getChartTickCount, selectChartTicks } from "./chart-ticks.util";
import {
  isValidChartXValue,
  normalizeNumericDomain,
} from "./numeric-domain.util";

export function createLineChartScaleModel<X extends ChartXValue>(
  props: UseLineChartProps<X>,
): Omit<UseLineChartResult<X>, "coordinates"> {
  const xTickCount = getChartTickCount(props.xAxis?.tickCount);
  const yTickCount = getChartTickCount(props.yAxis?.tickCount);
  const xRange: ChartNumericDomain = [
    props.plot.x,
    props.plot.x + props.plot.width,
  ];
  const yRange: ChartNumericDomain = [
    props.plot.y + props.plot.height,
    props.plot.y,
  ];

  const xValues = props.data.map((point) => point.x);
  const xModel = createXScale(
    xValues,
    props.xScaleType ?? inferChartScaleType(xValues),
    xRange,
    xTickCount,
  );

  const yValues = props.data.reduce<number[]>((values, point) => {
    if (
      point.y !== null &&
      Number.isFinite(point.y) &&
      Number.isFinite(xModel.scale(point.x))
    ) {
      values.push(point.y);
    }

    return values;
  }, []);
  const yDomain = normalizeNumericDomain(
    props.yAxis?.domain ?? getNumericDomain(yValues),
  );
  const numeric = createChartNumericScale(
    yDomain,
    yRange,
    yTickCount,
    !props.yAxis?.domain,
  );

  return {
    xDomain: xModel.domain,
    yDomain: numeric.domain,
    xTicks: xModel.ticks,
    yTicks: numeric.ticks,
    xScale: xModel.scale,
    yScale: numeric.scale,
  };
}

export function createLineChartModel<X extends ChartXValue>(
  props: UseLineChartProps<X>,
): UseLineChartResult<X> {
  const model = createLineChartScaleModel(props);

  return {
    ...model,
    coordinates: createLineChartCoordinates(
      props.data,
      model.xScale,
      model.yScale,
    ),
  };
}

export function inferChartScaleType(
  values: readonly ChartXValue[],
): "linear" | "point" | "time" {
  const first = values.find(isValidChartXValue);

  if (typeof first === "string") {
    return "point";
  }

  return first instanceof Date ? "time" : "linear";
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
      x: isFiniteChartCoordinate(x) ? x : null,
      y: isFiniteChartCoordinate(y) ? y : null,
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
    const d3Scale = scalePoint<X>()
      .domain(values.filter(isValidChartXValue))
      .range(range);
    const domain = d3Scale.domain();

    return {
      domain,
      ticks: selectChartTicks(domain, tickCount),
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
        ? minimum.getTime() === maximum.getTime()
          ? ([
              new Date(minimum.getTime() - 1),
              new Date(maximum.getTime() + 1),
            ] as const)
          : ([minimum, maximum] as const)
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
  const numeric = createChartNumericScale(
    getNumericDomain(numbers),
    range,
    tickCount,
    true,
  );

  return {
    domain: [...numeric.domain] as X[],
    ticks: numeric.ticks as readonly X[],
    scale: (value) =>
      typeof value === "number" ? numeric.scale(value) : undefined,
  };
}

function getNumericDomain(values: readonly number[]): ChartNumericDomain {
  const [minimum, maximum] = extent(values);

  return normalizeNumericDomain(
    minimum === undefined || maximum === undefined
      ? LineChartDefaultNumericDomain
      : [minimum, maximum],
  );
}

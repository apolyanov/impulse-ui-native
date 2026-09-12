import { pie } from "d3-shape";

import {
  PieDefaultEndAngle,
  PieDefaultInnerRadius,
  PieDefaultOuterRadius,
  PieDefaultPadAngle,
  PieDefaultStartAngle,
} from "../constants/pie.constants";
import {
  ChartRect,
  PieChartCoordinate,
  PieChartModel,
  PieChartPoint,
  UsePieChartProps,
} from "../types";

const DegreesToRadians = Math.PI / 180;

export function createPieChartModel(props: UsePieChartProps): PieChartModel {
  const data = props.data.filter(isValidPieChartPoint);
  const total = data.reduce((sum, datum) => sum + datum.value, 0);
  const { center, innerRadius, outerRadius } = createPieChartRadii(
    props.plot,
    props.innerRadius,
    props.outerRadius,
  );

  if (data.length === 0 || outerRadius <= 0) {
    return { coordinates: [], total: 0 };
  }

  const startAngle = degreesToRadians(
    normalizeAngle(props.startAngle, PieDefaultStartAngle),
  );
  const endAngle = degreesToRadians(
    normalizeAngle(props.endAngle, PieDefaultEndAngle),
  );
  const padAngle = Math.max(
    0,
    degreesToRadians(normalizeAngle(props.padAngle, PieDefaultPadAngle)),
  );
  const arcs = pie<PieChartPoint>()
    .value((datum) => datum.value)
    .sort(null)
    .startAngle(startAngle)
    .endAngle(endAngle)
    .padAngle(padAngle)(data);
  const coordinates: PieChartCoordinate[] = arcs.map((currentArc) => ({
    datum: currentArc.data,
    index: currentArc.index,
    center,
    startAngle: currentArc.startAngle,
    endAngle: currentArc.endAngle,
    padAngle: currentArc.padAngle,
    padRadius: outerRadius,
    innerRadius,
    outerRadius,
  }));

  return { coordinates, total };
}

export function createPieChartRadii(
  plot: ChartRect,
  innerRadiusRatio = PieDefaultInnerRadius,
  outerRadiusRatio = PieDefaultOuterRadius,
) {
  const maximumRadius = Math.max(0, Math.min(plot.width, plot.height) / 2);
  const resolvedOuterRatio = normalizeRadiusRatio(
    Number.isFinite(outerRadiusRatio)
      ? outerRadiusRatio
      : PieDefaultOuterRadius,
  );
  const resolvedInnerRatio = Math.min(
    normalizeRadiusRatio(
      Number.isFinite(innerRadiusRatio)
        ? innerRadiusRatio
        : PieDefaultInnerRadius,
    ),
    resolvedOuterRatio,
  );

  return {
    center: {
      x: plot.x + plot.width / 2,
      y: plot.y + plot.height / 2,
    },
    innerRadius: maximumRadius * resolvedInnerRatio,
    outerRadius: maximumRadius * resolvedOuterRatio,
  };
}

export function normalizeRadiusRatio(value: number): number {
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
}

function degreesToRadians(value: number): number {
  return value * DegreesToRadians;
}

function normalizeAngle(value: number | undefined, fallback: number): number {
  return value === undefined || !Number.isFinite(value) ? fallback : value;
}

function isValidPieChartPoint(datum: PieChartPoint): boolean {
  return Number.isFinite(datum.value) && datum.value > 0;
}

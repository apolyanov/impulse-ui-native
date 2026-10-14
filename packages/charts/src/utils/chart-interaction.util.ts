import type {
  BarChartCoordinate,
  ChartHitTarget,
  ChartLegendItem,
  ChartPoint,
  ChartRect,
  ChartSelection,
  ChartXValue,
  LineChartCoordinate,
  PieChartCoordinate,
} from "../types";
import { getChartColor } from "./chart-color.util";
import { formatChartTargetLabel } from "./chart-format.util";

export { formatChartXValue } from "./chart-format.util";

export function isSameChartSelection(
  left: ChartSelection | null,
  right: ChartSelection | null,
): boolean {
  return (
    left === right ||
    (left !== null &&
      right !== null &&
      left.seriesId === right.seriesId &&
      left.datumIndex === right.datumIndex)
  );
}

export function getChartCategoryKey(value: ChartXValue): string {
  return value instanceof Date
    ? `date:${value.getTime()}`
    : `${typeof value}:${value}`;
}

export function isPointInChartRect(
  point: ChartPoint,
  rect: ChartRect,
): boolean {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
}

export function findChartHitTarget(
  point: ChartPoint,
  targets: readonly ChartHitTarget[],
  plot: ChartRect,
): ChartHitTarget | null {
  if (plot.width <= 0 || plot.height <= 0 || !isPointInChartRect(point, plot)) {
    return null;
  }

  let nearest: ChartHitTarget | null = null;
  let distance = Infinity;

  for (const target of targets) {
    if (target.rect) {
      if (isPointInChartRect(point, target.rect)) {
        return target;
      }

      continue;
    }

    if (target.arc) {
      const arc = target.arc;
      const dx = point.x - arc.center.x;
      const dy = point.y - arc.center.y;
      const radius = Math.hypot(dx, dy);
      const direction = arc.endAngle >= arc.startAngle ? 1 : -1;
      const turn = Math.PI * 2;
      const angle = Math.atan2(dx, -dy);
      const offset =
        (((direction * (angle - arc.startAngle)) % turn) + turn) % turn;
      const span = Math.min(turn, Math.abs(arc.endAngle - arc.startAngle));
      const edgePadding =
        span >= turn - 1e-8
          ? 0
          : Math.asin(
              Math.min(
                1,
                (arc.padRadius / radius) * Math.sin(arc.padAngle / 2),
              ),
            );

      if (
        radius >= arc.innerRadius &&
        radius <= arc.outerRadius &&
        offset >= edgePadding &&
        offset <= span - edgePadding
      ) {
        return target;
      }

      continue;
    }

    if (!isPointInChartRect(target, plot)) {
      continue;
    }

    const currentDistance = Math.hypot(point.x - target.x, point.y - target.y);

    if (currentDistance < distance) {
      distance = currentDistance;
      nearest = target;
    }
  }

  return nearest;
}

export function createLineChartHitTargets<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  color: string,
  seriesId?: string,
  label?: string,
  formatX?: (value: X) => string,
): ChartHitTarget[] {
  return coordinates.flatMap((coordinate) => {
    if (
      coordinate.x === null ||
      coordinate.y === null ||
      coordinate.datum.y === null
    ) {
      return [];
    }

    return [
      {
        selection: { seriesId, datumIndex: coordinate.index },
        x: coordinate.x,
        y: coordinate.y,
        value: coordinate.datum.y,
        color,
        categoryKey: getChartCategoryKey(coordinate.datum.x),
        label: formatChartTargetLabel(coordinate.datum.x, label, formatX),
      },
    ];
  });
}

export function createBarChartHitTargets<X extends ChartXValue>(
  coordinates: readonly BarChartCoordinate<X>[],
  color: string,
  seriesId?: string,
  label?: string,
  plot?: ChartRect,
  formatX?: (value: X) => string,
): ChartHitTarget[] {
  return coordinates.flatMap((coordinate) => {
    const left = Math.max(coordinate.x, plot?.x ?? coordinate.x);
    const right = Math.min(
      coordinate.x + coordinate.width,
      plot ? plot.x + plot.width : Infinity,
    );
    const top = Math.max(coordinate.y, plot?.y ?? coordinate.y);
    const bottom = Math.min(
      coordinate.y + coordinate.height,
      plot ? plot.y + plot.height : Infinity,
    );

    if (coordinate.datum.y === null || right <= left || bottom <= top) {
      return [];
    }

    return [
      {
        selection: { seriesId, datumIndex: coordinate.index },
        x: (left + right) / 2,
        y: (top + bottom) / 2,
        rect: coordinate,
        value: coordinate.datum.y,
        color,
        label: formatChartTargetLabel(coordinate.datum.x, label, formatX),
      },
    ];
  });
}

export function createPieChartHitTargets(
  coordinates: readonly PieChartCoordinate[],
  colors: readonly string[],
  seriesId?: string,
  label?: string,
): ChartHitTarget[] {
  return coordinates
    .filter((coordinate) => coordinate.outerRadius > coordinate.innerRadius)
    .map((coordinate) => {
      const angle = (coordinate.startAngle + coordinate.endAngle) / 2;
      const radius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      const name = coordinate.datum.label ?? coordinate.datum.id;

      return {
        selection: { seriesId, datumIndex: coordinate.index },
        x: coordinate.center.x + Math.sin(angle) * radius,
        y: coordinate.center.y - Math.cos(angle) * radius,
        arc: coordinate,
        value: coordinate.datum.value,
        color:
          coordinate.datum.color ?? getChartColor(coordinate.datum.id, colors),
        label: label ? `${label}: ${name}` : name,
      };
    });
}

export function createPieChartLegend(
  data: readonly { id: string; label?: string; color?: string }[],
  colors: readonly string[],
): ChartLegendItem[] {
  return data.map((datum) => ({
    id: datum.id,
    label: datum.label ?? datum.id,
    color: datum.color ?? getChartColor(datum.id, colors),
  }));
}

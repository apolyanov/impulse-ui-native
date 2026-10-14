import type { ChartXValue, LineChartCoordinate } from "../types";

export function isDrawableLineCoordinate<X extends ChartXValue>(
  coordinate: LineChartCoordinate<X> | undefined,
): boolean {
  return (
    coordinate !== undefined &&
    coordinate.x !== null &&
    coordinate.y !== null &&
    Number.isFinite(coordinate.x) &&
    Number.isFinite(coordinate.y)
  );
}

export function isIsolatedLineCoordinate<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  index: number,
): boolean {
  return (
    isDrawableLineCoordinate(coordinates[index]) &&
    !isDrawableLineCoordinate(coordinates[index - 1]) &&
    !isDrawableLineCoordinate(coordinates[index + 1])
  );
}

export function getIsolatedLineCoordinates<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
): LineChartCoordinate<X>[] {
  return coordinates.filter((_, index) =>
    isIsolatedLineCoordinate(coordinates, index),
  );
}

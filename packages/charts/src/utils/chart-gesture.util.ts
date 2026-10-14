import type { ChartPoint } from "../types";
import { ChartSelectionTapSlop } from "../constants/chart-interaction.constants";

export interface ChartGestureState {
  origin: ChartPoint;
  hasHit: boolean;
  dragged: boolean;
}

export function updateChartGestureState(
  previous: ChartGestureState | null,
  point: ChartPoint,
  hit: boolean,
): ChartGestureState {
  const origin = previous?.origin ?? point;
  const distance = Math.hypot(point.x - origin.x, point.y - origin.y);

  return {
    origin,
    hasHit: (previous?.hasHit ?? false) || hit,
    dragged: (previous?.dragged ?? false) || distance > ChartSelectionTapSlop,
  };
}

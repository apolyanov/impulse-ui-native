import type { ChartHitTarget, ChartRect, ChartSelection } from "../types";
import type { ChartHitIndex } from "../types/chart-selection.types";
import {
  isPointInChartRect,
  isSameChartSelection,
} from "./chart-interaction.util";

export function createChartHitIndex(
  targets: readonly ChartHitTarget[],
  plot: ChartRect,
): ChartHitIndex {
  const bySeries = new Map<string | undefined, Map<number, ChartHitTarget>>();
  const byCategory = new Map<string, ChartHitTarget[]>();
  let visibleCount = 0;

  if (plot.width <= 0 || plot.height <= 0) {
    return { bySeries, byCategory, visibleCount };
  }

  for (const target of targets) {
    if (!isPointInChartRect(target, plot)) {
      continue;
    }

    const series =
      bySeries.get(target.selection.seriesId) ??
      new Map<number, ChartHitTarget>();
    series.set(target.selection.datumIndex, target);
    bySeries.set(target.selection.seriesId, series);

    if (target.categoryKey !== undefined) {
      const category = byCategory.get(target.categoryKey) ?? [];
      category.push(target);
      byCategory.set(target.categoryKey, category);
    }

    visibleCount += 1;
  }

  return { bySeries, byCategory, visibleCount };
}

export function getChartSelectedTargets(
  index: ChartHitIndex,
  selection: ChartSelection | null,
): readonly ChartHitTarget[] {
  if (selection === null) {
    return [];
  }

  const target = index.bySeries
    .get(selection.seriesId)
    ?.get(selection.datumIndex);

  if (!target) {
    return [];
  }

  return target.categoryKey === undefined
    ? [target]
    : (index.byCategory.get(target.categoryKey) ?? []);
}

export function isChartTargetSelected(
  target: ChartHitTarget | null,
  selected: readonly ChartHitTarget[],
): boolean {
  return (
    target !== null &&
    selected.some((entry) =>
      isSameChartSelection(entry.selection, target.selection),
    )
  );
}

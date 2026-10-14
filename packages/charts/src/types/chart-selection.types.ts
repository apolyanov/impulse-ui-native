import type { ChartHitTarget } from "./chart-interaction.types";

export interface ChartHitIndex {
  bySeries: ReadonlyMap<
    string | undefined,
    ReadonlyMap<number, ChartHitTarget>
  >;
  byCategory: ReadonlyMap<string, readonly ChartHitTarget[]>;
  visibleCount: number;
}

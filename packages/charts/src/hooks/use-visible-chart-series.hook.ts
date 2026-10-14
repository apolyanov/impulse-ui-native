import { useMemo } from "react";

import type {
  ChartSeriesStyleKey,
  ChartVisibleSeries,
} from "../types/chart-series.types";

export function useVisibleChartSeries<Series extends ChartVisibleSeries>(
  series: readonly Series[],
  hidden: ReadonlySet<string>,
  styleKey: ChartSeriesStyleKey,
): readonly Series[] {
  return useMemo(
    () =>
      series.filter(
        (item) => !hidden.has(item.id) && item[styleKey]?.visible !== false,
      ),
    [series, hidden, styleKey],
  );
}

import { useMemo } from "react";

import { ChartInsets, ChartLayout, ChartSize } from "../types";
import { createChartLayout } from "../utils/chart-layout.util";

export function useChartLayout(
  size: ChartSize,
  insets?: Partial<ChartInsets>,
): ChartLayout {
  return useMemo(() => createChartLayout(size, insets), [insets, size]);
}

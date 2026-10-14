import type { ReactNode } from "react";

import type { useChartFrame } from "../hooks/use-chart-frame.hook";
import type {
  ChartHitTarget,
  ChartLegendItem,
} from "./chart-interaction.types";

export interface ChartSurfaceProps {
  frame: ReturnType<typeof useChartFrame>;
  children: ReactNode;
  targets: readonly ChartHitTarget[];
  legendItems?: readonly ChartLegendItem[];
}

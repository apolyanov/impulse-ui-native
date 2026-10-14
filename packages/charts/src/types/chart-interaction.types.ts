import type { ReactNode } from "react";

import type { ChartPoint, ChartRect } from "./common.types";
import type { PieChartCoordinate } from "./pie-chart.types";

export interface ChartSelection {
  seriesId?: string;
  datumIndex: number;
}

export interface ChartSelectionDetails {
  selection: ChartSelection;
  label: string;
  value: number;
  color: string;
}

export interface ChartHitTarget extends ChartSelectionDetails, ChartPoint {
  categoryKey?: string;
  rect?: ChartRect;
  arc?: PieChartCoordinate;
}

export interface ChartLegendItem {
  id: string;
  label: string;
  color: string;
  colors?: readonly string[];
}

export interface ChartLegendProps {
  items: readonly ChartLegendItem[];
  hiddenIds?: readonly string[];
  onToggle?: (id: string) => void;
}

export interface ChartTooltipProps {
  details: readonly ChartSelectionDetails[];
}

export interface ChartPresentationProps {
  /** Enables native tap and drag selection. Off by default. */
  interactive?: boolean;
  selection?: ChartSelection | null;
  defaultSelection?: ChartSelection | null;
  onSelectionChange?: (selection: ChartSelection | null) => void;
  /** Displays selected details by default. A renderer can replace the tooltip. */
  tooltip?:
    | boolean
    | ((details: readonly ChartSelectionDetails[]) => ReactNode);
  legend?: boolean;
  /** Series IDs for multi charts; datum IDs for PieChart. */
  hiddenIds?: readonly string[];
  defaultHiddenIds?: readonly string[];
  onHiddenIdsChange?: (ids: readonly string[]) => void;
  emptyContent?: ReactNode;
}

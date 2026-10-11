import type { ChartColorPalette } from "./chart.types";

export interface ChartsTokens {
  palette: ChartColorPalette;
  insets: { top: number; right: number; bottom: number; left: number };
  axis: { width: number; tickLength: number; labelGap: number };
  grid: { width: number };
  line: { width: number };
  bar: { categoryPadding: number; seriesPadding: number };
  pie: { ringPadding: number };
}

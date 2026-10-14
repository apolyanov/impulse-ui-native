import type { DimensionValue } from "react-native";

import type { ChartColorPalette } from "./chart.types";
import type { FontWeightValue } from "./tokens.types";

export interface ChartsLabelTokens {
  color: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: FontWeightValue;
}

export interface ChartsTokens {
  palette: ChartColorPalette;
  insets: { top: number; right: number; bottom: number; left: number };
  axis: { width: number; tickLength: number; labelGap: number };
  grid: { width: number };
  line: { width: number };
  bar: { categoryPadding: number; seriesPadding: number; radius?: number };
  pie: { ringPadding: number; cornerRadius?: number };
  /** Optional for compatibility with existing full token objects. */
  label?: ChartsLabelTokens;
  selection?: { radius: number; width: number };
  legend?: {
    gap: number;
    padding: number;
    swatchSize: number;
    swatchRadius: number;
  };
  tooltip?: { offset: number; maxWidth: DimensionValue };
}

import type { ChartsTokens, PrimitiveThemeTokens } from "../types";
import { ChartColorTokens } from "./chart-color-tokens";

export function createChartsTokens(tokens: PrimitiveThemeTokens): ChartsTokens {
  return {
    palette: ChartColorTokens,
    insets: {
      top: tokens.space.md,
      right: tokens.space.md,
      bottom: tokens.space.md,
      left: tokens.space.md,
    },
    axis: {
      width: tokens.borderSize.sm,
      tickLength: tokens.space.xxs,
      labelGap: tokens.space.xxs,
    },
    grid: { width: tokens.borderSize.sm },
    line: { width: tokens.borderSize.md },
    bar: { categoryPadding: 0.2, seriesPadding: 0.1 },
    pie: { ringPadding: tokens.borderSize.md },
  };
}

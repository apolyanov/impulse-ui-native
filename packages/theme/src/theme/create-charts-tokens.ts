import type {
  ChartsLabelTokens,
  ChartsTokens,
  PrimitiveThemeTokens,
} from "../types";
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
    bar: { categoryPadding: 0.2, seriesPadding: 0.1, radius: tokens.radii.sm },
    pie: { ringPadding: tokens.borderSize.md, cornerRadius: tokens.radii.sm },
    label: createChartsLabelTokens(tokens),
    selection: { radius: tokens.space.xxs, width: tokens.borderSize.md },
    legend: {
      gap: tokens.space.xs,
      padding: tokens.space.xs,
      swatchSize: tokens.space.mxs,
      swatchRadius: tokens.radii.sm,
    },
    tooltip: { offset: tokens.space.xs, maxWidth: "90%" },
  };
}

export function createChartsLabelTokens(
  tokens: PrimitiveThemeTokens,
): ChartsLabelTokens {
  return {
    color: tokens.colors.text.secondary,
    fontSize: tokens.fontSize.xs,
    fontFamily: tokens.fontFamily.normal[tokens.fontWeight.regular],
    fontWeight: tokens.fontWeight.regular,
  };
}

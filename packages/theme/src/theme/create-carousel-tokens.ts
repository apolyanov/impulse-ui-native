import type { CarouselTokens, PrimitiveThemeTokens } from "../types";

export function createCarouselTokens(
  tokens: PrimitiveThemeTokens,
): CarouselTokens {
  return {
    gap: tokens.space.sm,
    slideGap: tokens.space.mxs,
    borderRadius: tokens.radii.lg,
    indicatorGap: tokens.space.xs,
    indicator: {
      borderRadius: tokens.radii.round,
      targetSize: tokens.space.lg,
      variants: {
        dots: { width: tokens.space.xs, height: tokens.space.xs },
        segments: { width: tokens.space.md, height: tokens.space.xxs },
      },
      states: {
        unselected: { backgroundColor: tokens.colors.border.strong.value },
        selected: { backgroundColor: tokens.colors.primary.value },
        disabledUnselected: { backgroundColor: tokens.colors.text.disabled },
        disabledSelected: { backgroundColor: tokens.colors.text.secondary },
      },
    },
    counter: {
      states: {
        default: { color: tokens.colors.text.primary },
        disabled: { color: tokens.colors.text.disabled },
      },
    },
  };
}

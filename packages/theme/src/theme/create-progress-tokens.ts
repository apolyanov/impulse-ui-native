import type { PrimitiveThemeTokens, ProgressTokens } from "../types";

export function createProgressTokens(
  tokens: PrimitiveThemeTokens,
): ProgressTokens {
  return {
    animationDuration: 1000,
    borderRadius: tokens.radii.round,
    indeterminateLinearWidth: 0.4,
    sizes: {
      small: {
        linearHeight: 4,
        circularSize: 24,
        circularStrokeWidth: 3,
      },
      medium: {
        linearHeight: 6,
        circularSize: 32,
        circularStrokeWidth: 4,
      },
      large: {
        linearHeight: 8,
        circularSize: 40,
        circularStrokeWidth: 5,
      },
    },
    colors: {
      primary: {
        indicatorColor: tokens.colors.primary.value,
        trackColor: tokens.colors.secondary.value,
      },
      secondary: {
        indicatorColor: tokens.colors.text.secondary,
        trackColor: tokens.colors.border.subtle.value,
      },
      neutral: {
        indicatorColor: tokens.colors.neutral["7"],
        trackColor: tokens.colors.neutral["4"],
      },
      inverse: {
        indicatorColor: tokens.colors.text.inverse,
        trackColor: tokens.colors.neutral["9"],
      },
    },
  };
}

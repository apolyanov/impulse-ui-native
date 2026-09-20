import type { PrimitiveThemeTokens, SpinnerTokens } from "../types";

export function createSpinnerTokens(
  tokens: PrimitiveThemeTokens,
): SpinnerTokens {
  return {
    baseSize: 20,
    sizes: {
      small: 16,
      medium: 20,
      large: 24,
    },
    colors: {
      primary: tokens.colors.primary.value,
      secondary: tokens.colors.secondary.value,
      neutral: tokens.colors.text.secondary,
      inverse: tokens.colors.text.inverse,
    },
  };
}

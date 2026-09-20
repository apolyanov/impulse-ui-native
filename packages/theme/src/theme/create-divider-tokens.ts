import type { DividerTokens, PrimitiveThemeTokens } from "../types";

export function createDividerTokens(
  tokens: PrimitiveThemeTokens,
): DividerTokens {
  return {
    colors: {
      subtle: tokens.colors.border.subtle.value,
      default: tokens.colors.border.default.value,
      strong: tokens.colors.border.strong.value,
      primary: tokens.colors.primary.value,
      inverse: tokens.colors.text.inverse,
    },
    inset: tokens.space.sm,
    thickness: tokens.borderSize.sm,
  };
}

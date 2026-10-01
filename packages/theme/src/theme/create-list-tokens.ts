import type { ListTokens, PrimitiveThemeTokens } from "../types";

export function createListTokens(tokens: PrimitiveThemeTokens): ListTokens {
  return {
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    item: { gap: tokens.space.mxs, padding: tokens.space.sm },
    content: { gap: tokens.space.xxs },
  };
}

import type { CardTokens, PrimitiveThemeTokens } from "../types";

export function createCardTokens(tokens: PrimitiveThemeTokens): CardTokens {
  return {
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderRadius: tokens.radii.lg,
    borderWidth: tokens.borderSize.sm,
    header: {
      gap: tokens.space.xxs,
      padding: tokens.space.sm,
    },
    content: {
      gap: tokens.space.xs,
      padding: tokens.space.sm,
    },
    footer: {
      gap: tokens.space.xs,
      padding: tokens.space.sm,
    },
    mediaBackgroundColor: tokens.colors.surface.secondary.value,
  };
}

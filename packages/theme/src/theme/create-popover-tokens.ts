import type { PopoverTokens, PrimitiveThemeTokens } from "../types";

export function createPopoverTokens(
  tokens: PrimitiveThemeTokens,
): PopoverTokens {
  return {
    zIndexBase: 3000,
    gap: tokens.space.xs,
    edgeOffset: tokens.space.sm,
    arrowSize: 6,
    maxWidth: 320,
    actionMinSize: tokens.space.md,

    titleFontSize: tokens.fontSize.sm,
    titleLineHeight: tokens.lineHeight.sm,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    titleColor: tokens.colors.text.primary,
    descriptionColor: tokens.colors.text.secondary,

    surfaces: {
      elevated: {
        ...tokens.colors.surface.elevated,
        borderColor: tokens.colors.border.subtle.value,
        borderWidth: tokens.borderSize.sm,
        borderRadius: tokens.radii.lg,
        paddingHorizontal: tokens.space.sm,
        paddingVertical: tokens.space.sm,
      },

      inverse: {
        ...tokens.colors.surface.inverse,
        borderColor: tokens.colors.surface.inverse.value,
        borderWidth: 0,
        borderRadius: tokens.radii.md,
        paddingHorizontal: tokens.space.mxs,
        paddingVertical: tokens.space.xs,
      },
    },
  };
}

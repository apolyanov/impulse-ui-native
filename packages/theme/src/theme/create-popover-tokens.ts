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

    backgroundColor: tokens.colors.surface.secondary.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    paddingHorizontal: tokens.space.sm,
    paddingVertical: tokens.space.sm,

    tooltip: {
      backgroundColor: tokens.colors.surface.inverse.value,
      color: tokens.colors.surface.inverse.contrast,
      borderRadius: tokens.radii.md,
      paddingHorizontal: tokens.space.mxs,
      paddingVertical: tokens.space.xs,
    },
  };
}

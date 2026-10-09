import type { ModalTokens, PrimitiveThemeTokens } from "../types";

export function createModalTokens(tokens: PrimitiveThemeTokens): ModalTokens {
  return {
    zIndexBase: 100,
    overlayColor: tokens.colors.text.tertiary,
    overlayVisibleOpacity: 0.4,
    viewportPadding: tokens.space.sm,
    closedScale: 0.96,
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    padding: tokens.space.sm,
    gap: tokens.space.sm,
    headerGap: tokens.space.xs,
    footerGap: tokens.space.xs,
    titleColor: tokens.colors.text.primary,
    titleFontSize: tokens.fontSize.lg,
    titleLineHeight: tokens.lineHeight.lg,
    descriptionColor: tokens.colors.text.secondary,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    sizes: {
      small: { maxWidth: 320 },
      medium: { maxWidth: 440 },
      large: { maxWidth: 640 },
    },
  };
}

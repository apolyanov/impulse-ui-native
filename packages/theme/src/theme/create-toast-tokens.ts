import type { PrimitiveThemeTokens, ToastTokens } from "../types";

export function createToastTokens(tokens: PrimitiveThemeTokens): ToastTokens {
  return {
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    padding: tokens.space.sm,
    gap: tokens.space.xs,
    contentGap: tokens.space.xxs,
    edgeOffset: tokens.space.sm,
    topOffset: tokens.space.xs,
    iconSize: 24,
    iconContainerSize: tokens.space.md,
    actionMinSize: tokens.space.md,
    titleColor: tokens.colors.text.primary,
    descriptionColor: tokens.colors.text.secondary,
    actionColor: tokens.colors.primary.value,
    disabledColor: tokens.colors.text.disabled,
    titleFontSize: tokens.fontSize.sm,
    titleLineHeight: tokens.lineHeight.sm,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    zIndexBase: 2000,
    tones: { ...tokens.colors.feedback },
  };
}

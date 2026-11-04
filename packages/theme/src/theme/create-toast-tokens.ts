import type { PrimitiveThemeTokens, ToastTokens } from "../types";

export function createToastTokens(tokens: PrimitiveThemeTokens): ToastTokens {
  return {
    enterDuration: 260,
    exitDuration: 220,
    stackDuration: 220,
    actionFontWeight: tokens.fontWeight.semiBold,
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    padding: tokens.space.sm,
    gap: tokens.space.xs,
    stackLimit: 5,
    stackScaleStep: 0.04,
    contentGap: tokens.space.xxs,
    edgeOffset: tokens.space.sm,
    topOffset: tokens.space.xs,
    iconSize: 24,
    closeIconSize: 18,
    closeColor: tokens.colors.text.tertiary,
    iconContainerSize: tokens.space.md,
    actionMinSize: tokens.space.md,
    titleColor: tokens.colors.text.primary,
    descriptionColor: tokens.colors.text.secondary,
    disabledColor: tokens.colors.text.disabled,
    titleFontSize: tokens.fontSize.sm,
    titleLineHeight: tokens.lineHeight.sm,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    zIndexBase: 2000,
    tones: {
      success: {
        value: tokens.colors.feedback.success.value,
        contrast: tokens.colors.feedback.success.contrast,
        actionColor: tokens.colors.feedback.success.value,
      },
      info: {
        value: tokens.colors.feedback.info.value,
        contrast: tokens.colors.feedback.info.contrast,
        actionColor: tokens.colors.feedback.info.value,
      },
      warning: {
        value: tokens.colors.feedback.warning.value,
        contrast: tokens.colors.feedback.warning.contrast,
        actionColor: tokens.colors.feedback.warning.value,
      },
      error: {
        value: tokens.colors.feedback.error.value,
        contrast: tokens.colors.feedback.error.contrast,
        actionColor: tokens.colors.feedback.error.value,
      },
    },
  };
}

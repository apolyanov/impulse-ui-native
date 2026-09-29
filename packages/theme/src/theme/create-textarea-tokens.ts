import type { PrimitiveThemeTokens, TextareaTokens } from "../types";

export function createTextareaTokens(
  tokens: PrimitiveThemeTokens,
): TextareaTokens {
  return {
    counterFontSize: tokens.fontSize.xs,
    footerGap: tokens.space.xs,
    footerMarginTop: tokens.space.xxs,
    sizes: {
      small: {
        lineHeight: tokens.lineHeight.xs,
        paddingVertical: tokens.space.xs,
      },
      medium: {
        lineHeight: tokens.lineHeight.xsm,
        paddingVertical: tokens.space.xs,
      },
      large: {
        lineHeight: tokens.lineHeight.sm,
        paddingVertical: tokens.space.xs,
      },
    },
    states: {
      default: { counterColor: tokens.colors.text.tertiary },
      error: { counterColor: tokens.colors.feedback.error.value },
      disabled: { counterColor: tokens.colors.text.disabled },
      disabledError: { counterColor: tokens.colors.text.disabled },
    },
  };
}

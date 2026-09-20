import type { PrimitiveThemeTokens, TextareaTokens } from "../types";

export function createTextareaTokens(
  tokens: PrimitiveThemeTokens,
): TextareaTokens {
  return {
    counterColor: tokens.colors.text.tertiary,
    counterFontSize: tokens.fontSize.xs,
    disabledCounterColor: tokens.colors.text.disabled,
    errorCounterColor: tokens.colors.feedback.error.value,
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
  };
}

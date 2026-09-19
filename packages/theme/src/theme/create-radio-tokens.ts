import type { PrimitiveThemeTokens, RadioTokens } from "../types";

export function createRadioTokens(tokens: PrimitiveThemeTokens): RadioTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  return {
    borderWidth: tokens.borderSize.md,
    borderRadius: tokens.radii.round,
    uncheckedBackgroundColor: "transparent",
    uncheckedBorderColor: tokens.colors.border.strong.value,
    disabledBackgroundColor: tokens.colors.neutral["3"],
    disabledBorderColor: tokens.colors.neutral["5"],
    disabledColor: tokens.colors.text.disabled,

    sizes: {
      small: {
        size: 20,
        indicatorSize: 8,
        hitSlop: 12,
      },
      medium: {
        size: 24,
        indicatorSize: 10,
        hitSlop: 10,
      },
      large: {
        size: 28,
        indicatorSize: 12,
        hitSlop: 8,
      },
    },

    variants: {
      filled: {
        backgroundColor: primary,
        borderColor: primary,
        color: primaryContrast,
      },
      outlined: {
        backgroundColor: "transparent",
        borderColor: primary,
        color: primary,
      },
      soft: {
        backgroundColor: secondary,
        borderColor: secondary,
        color: secondaryContrast,
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: primary,
      },
      plain: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: primary,
      },
    },
  };
}

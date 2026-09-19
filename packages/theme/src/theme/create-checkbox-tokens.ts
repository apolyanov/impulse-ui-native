import type { CheckboxTokens, PrimitiveThemeTokens } from "../types";

export function createCheckboxTokens(
  tokens: PrimitiveThemeTokens,
): CheckboxTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  return {
    borderWidth: tokens.borderSize.md,
    borderRadius: tokens.radii.sm,
    uncheckedBackgroundColor: "transparent",
    uncheckedBorderColor: tokens.colors.border.strong.value,
    disabledBackgroundColor: tokens.colors.neutral["3"],
    disabledBorderColor: tokens.colors.neutral["5"],
    disabledColor: tokens.colors.text.disabled,

    sizes: {
      small: {
        size: 20,
        iconSize: 14,
        hitSlop: 12,
      },
      medium: {
        size: 24,
        iconSize: 18,
        hitSlop: 10,
      },
      large: {
        size: 28,
        iconSize: 22,
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

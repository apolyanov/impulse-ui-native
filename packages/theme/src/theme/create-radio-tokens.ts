import type { PrimitiveThemeTokens, RadioTokens } from "../types";

export function createRadioTokens(tokens: PrimitiveThemeTokens): RadioTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  return {
    borderWidth: tokens.borderSize.md,
    borderRadius: tokens.radii.round,

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
        unselected: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.border.strong.value,
          color: primaryContrast,
        },
        selected: {
          backgroundColor: primary,
          borderColor: primary,
          color: primaryContrast,
        },
        disabledUnselected: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.neutral["5"],
          color: tokens.colors.text.disabled,
        },
        disabledSelected: {
          backgroundColor: tokens.colors.neutral["3"],
          borderColor: tokens.colors.neutral["5"],
          color: tokens.colors.text.disabled,
        },
      },
      outlined: {
        unselected: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.border.strong.value,
          color: primary,
        },
        selected: {
          backgroundColor: "transparent",
          borderColor: primary,
          color: primary,
        },
        disabledUnselected: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.neutral["5"],
          color: tokens.colors.text.disabled,
        },
        disabledSelected: {
          backgroundColor: tokens.colors.neutral["3"],
          borderColor: tokens.colors.neutral["5"],
          color: tokens.colors.text.disabled,
        },
      },
      soft: {
        unselected: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.border.strong.value,
          color: secondaryContrast,
        },
        selected: {
          backgroundColor: secondary,
          borderColor: secondary,
          color: secondaryContrast,
        },
        disabledUnselected: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.neutral["5"],
          color: tokens.colors.text.disabled,
        },
        disabledSelected: {
          backgroundColor: tokens.colors.neutral["3"],
          borderColor: tokens.colors.neutral["5"],
          color: tokens.colors.text.disabled,
        },
      },
    },
  };
}

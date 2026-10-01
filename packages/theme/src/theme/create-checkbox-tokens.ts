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
          borderColor: tokens.colors.border.default.value,
          color: tokens.colors.text.disabled,
        },
        disabledSelected: {
          backgroundColor: tokens.colors.surface.primary.value,
          borderColor: tokens.colors.border.default.value,
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
          borderColor: tokens.colors.border.default.value,
          color: tokens.colors.text.disabled,
        },
        disabledSelected: {
          backgroundColor: tokens.colors.surface.primary.value,
          borderColor: tokens.colors.border.default.value,
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
          borderColor: tokens.colors.border.default.value,
          color: tokens.colors.text.disabled,
        },
        disabledSelected: {
          backgroundColor: tokens.colors.surface.primary.value,
          borderColor: tokens.colors.border.default.value,
          color: tokens.colors.text.disabled,
        },
      },
    },
  };
}

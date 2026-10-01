import { ButtonTokens, PrimitiveThemeTokens } from "../types";

export function createButtonTokens(tokens: PrimitiveThemeTokens): ButtonTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;

  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  const disabledColor = tokens.colors.text.disabled;

  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.md,

    sizes: {
      small: {
        height: 32,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: tokens.fontSize.xsm,
      },
      medium: {
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: tokens.fontSize.sm,
      },
      large: {
        height: 48,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: tokens.fontSize.sm,
      },
    },

    variants: {
      filled: {
        default: {
          backgroundColor: primary,
          borderColor: primary,
          color: primaryContrast,
        },
        loading: {
          backgroundColor: primary,
          borderColor: primary,
          color: primaryContrast,
        },
        disabled: {
          backgroundColor: tokens.colors.surface.primary.value,
          borderColor: tokens.colors.border.default.value,
          color: disabledColor,
        },
      },

      outlined: {
        default: {
          backgroundColor: "transparent",
          borderColor: primary,
          color: primary,
        },
        loading: {
          backgroundColor: "transparent",
          borderColor: primary,
          color: primary,
        },
        disabled: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.border.default.value,
          color: disabledColor,
        },
      },

      soft: {
        default: {
          backgroundColor: secondary,
          borderColor: secondary,
          color: secondaryContrast,
        },
        loading: {
          backgroundColor: secondary,
          borderColor: secondary,
          color: secondaryContrast,
        },
        disabled: {
          backgroundColor: tokens.colors.surface.primary.value,
          borderColor: tokens.colors.border.subtle.value,
          color: disabledColor,
        },
      },

      ghost: {
        default: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: primary,
        },
        loading: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: primary,
        },
        disabled: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: disabledColor,
        },
      },
    },
  };
}

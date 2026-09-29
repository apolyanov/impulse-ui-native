import { IconButtonTokens, PrimitiveThemeTokens } from "../types";

export function createIconButtonTokens(
  tokens: PrimitiveThemeTokens,
): IconButtonTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;

  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  const neutral = tokens.colors.neutral;
  const disabledColor = tokens.colors.text.disabled;

  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.md,

    sizes: {
      small: {
        size: 32,
        padding: 6,
      },
      medium: {
        size: 40,
        padding: 8,
      },
      large: {
        size: 48,
        padding: 10,
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
          backgroundColor: neutral["5"],
          borderColor: neutral["5"],
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
          borderColor: neutral["5"],
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
          backgroundColor: neutral["3"],
          borderColor: neutral["3"],
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

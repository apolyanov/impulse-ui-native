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
        backgroundColor: primary,
        borderColor: primary,
        color: primaryContrast,

        disabledBackgroundColor: neutral["5"],
        disabledBorderColor: neutral["5"],
        disabledColor,
      },

      outlined: {
        backgroundColor: "transparent",
        borderColor: primary,
        color: primary,

        disabledBackgroundColor: "transparent",
        disabledBorderColor: neutral["5"],
        disabledColor,
      },

      soft: {
        backgroundColor: secondary,
        borderColor: secondary,
        color: secondaryContrast,

        disabledBackgroundColor: neutral["3"],
        disabledBorderColor: neutral["3"],
        disabledColor,
      },

      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: primary,

        disabledBackgroundColor: "transparent",
        disabledBorderColor: "transparent",
        disabledColor,
      },

      plain: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: primary,

        disabledBackgroundColor: "transparent",
        disabledBorderColor: "transparent",
        disabledColor,
      },
    },
  };
}

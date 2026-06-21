import { ButtonTokens, PrimitiveThemeTokens } from "../types";

export function createButtonTokens(tokens: PrimitiveThemeTokens): ButtonTokens {
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

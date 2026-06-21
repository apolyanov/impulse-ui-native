import { PrimitiveThemeTokens, TagTokens } from "../types";

export function createTagTokens(tokens: PrimitiveThemeTokens): TagTokens {
  const neutral = tokens.colors.neutral;
  const disabledColor = tokens.colors.text.disabled;

  const createVariants = (value: string, contrast: string) => ({
    filled: {
      backgroundColor: value,
      borderColor: value,
      color: contrast,

      disabledBackgroundColor: neutral["4"],
      disabledBorderColor: neutral["6"],
      disabledColor,
    },

    outlined: {
      backgroundColor: "transparent",
      borderColor: value,
      color: value,

      disabledBackgroundColor: "transparent",
      disabledBorderColor: neutral["6"],
      disabledColor,
    },

    soft: {
      backgroundColor: contrast,
      borderColor: contrast,
      color: value,

      disabledBackgroundColor: neutral["3"],
      disabledBorderColor: neutral["3"],
      disabledColor,
    },

    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: value,

      disabledBackgroundColor: "transparent",
      disabledBorderColor: "transparent",
      disabledColor,
    },

    plain: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: value,

      disabledBackgroundColor: "transparent",
      disabledBorderColor: "transparent",
      disabledColor,
    },
  });

  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.round,
    gap: tokens.space.xxs,
    iconMarginLeft: tokens.borderSize.md,

    sizes: {
      small: {
        height: 24,
        paddingHorizontal: tokens.space.xs,
        minWidth: tokens.space.xl,
        fontSize: tokens.fontSize.xs,
      },

      medium: {
        height: 28,
        paddingHorizontal: tokens.space.xs,
        minWidth: tokens.space.xxl,
        fontSize: tokens.fontSize.xsm,
      },

      large: {
        height: 32,
        paddingHorizontal: tokens.space.mxs,
        minWidth: tokens.space.xxl,
        fontSize: tokens.fontSize.xsm,
      },
    },

    colors: {
      primary: createVariants(
        tokens.colors.primary.value,
        tokens.colors.primary.contrast,
      ),

      secondary: createVariants(
        tokens.colors.secondary.value,
        tokens.colors.secondary.contrast,
      ),

      error: createVariants(
        tokens.colors.feedback.error.value,
        tokens.colors.feedback.error.contrast,
      ),

      warning: createVariants(
        tokens.colors.feedback.warning.value,
        tokens.colors.feedback.warning.contrast,
      ),

      success: createVariants(
        tokens.colors.feedback.success.value,
        tokens.colors.feedback.success.contrast,
      ),

      info: createVariants(
        tokens.colors.feedback.info.value,
        tokens.colors.feedback.info.contrast,
      ),
    },
  };
}

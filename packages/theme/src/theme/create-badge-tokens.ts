import type { BadgeTokens, PrimitiveThemeTokens } from "../types";

export function createBadgeTokens(tokens: PrimitiveThemeTokens): BadgeTokens {
  const createVariants = (
    value: string,
    contrast: string,
    softBackgroundColor = contrast,
    softColor = value,
  ) => ({
    filled: {
      backgroundColor: value,
      borderColor: value,
      color: contrast,
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: value,
      color: value,
    },
    soft: {
      backgroundColor: softBackgroundColor,
      borderColor: softBackgroundColor,
      color: softColor,
    },
    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: value,
    },
    plain: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: value,
    },
  });

  return {
    addonHitSlop: tokens.space.xs,
    borderRadius: tokens.radii.round,
    borderWidth: tokens.borderSize.sm,
    fontFamily: tokens.fontFamily.normal[tokens.fontWeight.semiBold],
    gap: tokens.space.xxs,
    sizes: {
      small: {
        fontSize: tokens.fontSize.xxs,
        height: 20,
        iconSize: 12,
        lineHeight: tokens.lineHeight.xxs,
        minWidth: 20,
        paddingHorizontal: tokens.space.xxs,
      },
      medium: {
        fontSize: tokens.fontSize.xs,
        height: 24,
        iconSize: 14,
        lineHeight: tokens.lineHeight.xs,
        minWidth: 24,
        paddingHorizontal: tokens.space.xs,
      },
      large: {
        fontSize: tokens.fontSize.xsm,
        height: 28,
        iconSize: 16,
        lineHeight: tokens.lineHeight.xsm,
        minWidth: 28,
        paddingHorizontal: tokens.space.mxs,
      },
    },
    colors: {
      primary: createVariants(
        tokens.colors.primary.value,
        tokens.colors.primary.contrast,
        tokens.colors.secondary.value,
      ),
      secondary: createVariants(
        tokens.colors.secondary.value,
        tokens.colors.secondary.contrast,
        tokens.colors.secondary.value,
        tokens.colors.secondary.contrast,
      ),
      neutral: createVariants(
        tokens.colors.neutral["8"],
        tokens.colors.white,
        tokens.colors.neutral["2"],
        tokens.colors.text.primary,
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

import type { BadgeTokens, PrimitiveThemeTokens } from "../types";

export function createBadgeTokens(tokens: PrimitiveThemeTokens): BadgeTokens {
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
      neutral: {
        filled: {
          backgroundColor: tokens.colors.text.secondary,
          borderColor: tokens.colors.text.secondary,
          color: tokens.colors.text.inverse,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.text.secondary,
          color: tokens.colors.text.secondary,
        },
        soft: {
          backgroundColor: tokens.colors.surface.subtle.value,
          borderColor: tokens.colors.surface.subtle.value,
          color: tokens.colors.text.primary,
        },
      },
      primary: {
        filled: {
          backgroundColor: tokens.colors.primary.value,
          borderColor: tokens.colors.primary.value,
          color: tokens.colors.primary.contrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.primary.value,
          color: tokens.colors.primary.value,
        },
        soft: {
          backgroundColor: tokens.colors.secondary.value,
          borderColor: tokens.colors.secondary.value,
          color: tokens.colors.secondary.contrast,
        },
      },
      secondary: {
        filled: {
          backgroundColor: tokens.colors.secondary.value,
          borderColor: tokens.colors.secondary.value,
          color: tokens.colors.secondary.contrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.secondary.contrast,
          color: tokens.colors.secondary.contrast,
        },
        soft: {
          backgroundColor: tokens.colors.subtle.value,
          borderColor: tokens.colors.subtle.value,
          color: tokens.colors.secondary.contrast,
        },
      },
      error: {
        filled: {
          backgroundColor: tokens.colors.feedback.error.value,
          borderColor: tokens.colors.feedback.error.value,
          color: tokens.colors.feedback.error.contrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.feedback.error.value,
          color: tokens.colors.feedback.error.value,
        },
        soft: {
          backgroundColor: tokens.colors.feedback.error.contrast,
          borderColor: tokens.colors.feedback.error.contrast,
          color: tokens.colors.feedback.error.value,
        },
      },
      warning: {
        filled: {
          backgroundColor: tokens.colors.feedback.warning.value,
          borderColor: tokens.colors.feedback.warning.value,
          color: tokens.colors.feedback.warning.contrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.feedback.warning.value,
          color: tokens.colors.feedback.warning.value,
        },
        soft: {
          backgroundColor: tokens.colors.feedback.warning.contrast,
          borderColor: tokens.colors.feedback.warning.contrast,
          color: tokens.colors.feedback.warning.value,
        },
      },
      success: {
        filled: {
          backgroundColor: tokens.colors.feedback.success.value,
          borderColor: tokens.colors.feedback.success.value,
          color: tokens.colors.feedback.success.contrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.feedback.success.value,
          color: tokens.colors.feedback.success.value,
        },
        soft: {
          backgroundColor: tokens.colors.feedback.success.contrast,
          borderColor: tokens.colors.feedback.success.contrast,
          color: tokens.colors.feedback.success.value,
        },
      },
      info: {
        filled: {
          backgroundColor: tokens.colors.feedback.info.value,
          borderColor: tokens.colors.feedback.info.value,
          color: tokens.colors.feedback.info.contrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.feedback.info.value,
          color: tokens.colors.feedback.info.value,
        },
        soft: {
          backgroundColor: tokens.colors.feedback.info.contrast,
          borderColor: tokens.colors.feedback.info.contrast,
          color: tokens.colors.feedback.info.value,
        },
      },
    },
  };
}

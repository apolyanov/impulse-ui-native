import type { AvatarTokens, PrimitiveThemeTokens } from "../types";

export function createAvatarTokens(tokens: PrimitiveThemeTokens): AvatarTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  const neutral = tokens.colors.text.secondary;
  const neutralContrast = tokens.colors.text.inverse;
  const neutralSoft = tokens.colors.surface.subtle.value;
  const neutralSoftContrast = tokens.colors.text.primary;
  const subtle = tokens.colors.subtle.value;

  return {
    borderWidth: tokens.borderSize.sm,
    fontFamily: tokens.fontFamily.normal[tokens.fontWeight.semiBold],
    sizes: {
      small: {
        fontSize: tokens.fontSize.xs,
        size: 32,
        statusBorderWidth: tokens.borderSize.sm,
        statusSize: 8,
      },
      medium: {
        fontSize: tokens.fontSize.xsm,
        size: 40,
        statusBorderWidth: tokens.borderSize.md,
        statusSize: 10,
      },
      large: {
        fontSize: tokens.fontSize.sm,
        size: 48,
        statusBorderWidth: tokens.borderSize.md,
        statusSize: 12,
      },
    },
    statusBorderColor: tokens.colors.surface.elevated.value,
    statusColors: {
      online: tokens.colors.feedback.success.value,
      offline: tokens.colors.text.disabled,
      away: tokens.colors.feedback.warning.value,
      busy: tokens.colors.feedback.error.value,
    },
    colors: {
      neutral: {
        filled: {
          backgroundColor: neutral,
          borderColor: neutral,
          color: neutralContrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: neutral,
          color: neutral,
        },
        soft: {
          backgroundColor: neutralSoft,
          borderColor: neutralSoft,
          color: neutralSoftContrast,
        },
      },
      primary: {
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
      },
      secondary: {
        filled: {
          backgroundColor: secondary,
          borderColor: secondary,
          color: secondaryContrast,
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: secondaryContrast,
          color: secondaryContrast,
        },
        soft: {
          backgroundColor: subtle,
          borderColor: subtle,
          color: secondaryContrast,
        },
      },
    },
  };
}

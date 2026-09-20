import type { AvatarTokens, PrimitiveThemeTokens } from "../types";

export function createAvatarTokens(tokens: PrimitiveThemeTokens): AvatarTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

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
      offline: tokens.colors.neutral["6"],
      away: tokens.colors.feedback.warning.value,
      busy: tokens.colors.feedback.error.value,
    },
    variants: {
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
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: primary,
      },
      plain: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: primary,
      },
    },
  };
}

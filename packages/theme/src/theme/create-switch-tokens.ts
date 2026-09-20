import type { PrimitiveThemeTokens, SwitchTokens } from "../types";

export function createSwitchTokens(tokens: PrimitiveThemeTokens): SwitchTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  return {
    animationDuration: 180,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.round,
    thumbBorderRadius: tokens.radii.round,
    uncheckedBackgroundColor: tokens.colors.surface.primary.value,
    uncheckedBorderColor: tokens.colors.border.strong.value,
    uncheckedThumbColor: tokens.colors.surface.elevated.value,
    disabledBackgroundColor: tokens.colors.neutral["3"],
    disabledBorderColor: tokens.colors.neutral["5"],
    disabledThumbColor: tokens.colors.neutral["7"],
    loadingIndicatorColor: tokens.colors.surface.elevated.value,

    sizes: {
      small: {
        width: 36,
        height: 20,
        thumbSize: 16,
        trackPadding: 1,
        loadingIndicatorScale: 0.5,
        hitSlop: 12,
      },
      medium: {
        width: 44,
        height: 24,
        thumbSize: 20,
        trackPadding: 1,
        loadingIndicatorScale: 0.6,
        hitSlop: 10,
      },
      large: {
        width: 52,
        height: 28,
        thumbSize: 24,
        trackPadding: 1,
        loadingIndicatorScale: 0.7,
        hitSlop: 8,
      },
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

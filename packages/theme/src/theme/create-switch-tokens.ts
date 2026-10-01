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
    loadingIndicatorColor: tokens.colors.text.primary,

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
        default: {
          activeBackgroundColor: primary,
          activeBorderColor: primary,
          activeThumbColor: primaryContrast,
          inactiveBackgroundColor: tokens.colors.surface.primary.value,
          inactiveBorderColor: tokens.colors.border.strong.value,
          inactiveThumbColor: tokens.colors.text.secondary,
        },
        disabled: {
          activeBackgroundColor: tokens.colors.surface.primary.value,
          activeBorderColor: tokens.colors.border.default.value,
          activeThumbColor: tokens.colors.text.disabled,
          inactiveBackgroundColor: tokens.colors.surface.primary.value,
          inactiveBorderColor: tokens.colors.border.default.value,
          inactiveThumbColor: tokens.colors.text.disabled,
        },
      },
      outlined: {
        default: {
          activeBackgroundColor: "transparent",
          activeBorderColor: primary,
          activeThumbColor: primary,
          inactiveBackgroundColor: tokens.colors.surface.primary.value,
          inactiveBorderColor: tokens.colors.border.strong.value,
          inactiveThumbColor: tokens.colors.text.secondary,
        },
        disabled: {
          activeBackgroundColor: tokens.colors.surface.primary.value,
          activeBorderColor: tokens.colors.border.default.value,
          activeThumbColor: tokens.colors.text.disabled,
          inactiveBackgroundColor: tokens.colors.surface.primary.value,
          inactiveBorderColor: tokens.colors.border.default.value,
          inactiveThumbColor: tokens.colors.text.disabled,
        },
      },
      soft: {
        default: {
          activeBackgroundColor: secondary,
          activeBorderColor: secondary,
          activeThumbColor: secondaryContrast,
          inactiveBackgroundColor: tokens.colors.surface.primary.value,
          inactiveBorderColor: tokens.colors.border.strong.value,
          inactiveThumbColor: tokens.colors.text.secondary,
        },
        disabled: {
          activeBackgroundColor: tokens.colors.surface.primary.value,
          activeBorderColor: tokens.colors.border.default.value,
          activeThumbColor: tokens.colors.text.disabled,
          inactiveBackgroundColor: tokens.colors.surface.primary.value,
          inactiveBorderColor: tokens.colors.border.default.value,
          inactiveThumbColor: tokens.colors.text.disabled,
        },
      },
    },
  };
}

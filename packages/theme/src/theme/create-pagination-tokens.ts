import type { PaginationTokens, PrimitiveThemeTokens } from "../types";

export function createPaginationTokens(
  tokens: PrimitiveThemeTokens,
): PaginationTokens {
  return {
    borderRadius: tokens.radii.md,
    borderWidth: tokens.borderSize.sm,
    ellipsisColor: tokens.colors.text.tertiary,
    gap: tokens.space.xs,
    sizes: {
      small: {
        compactMinWidth: 112,
        controlSize: 32,
        fontSize: tokens.fontSize.xsm,
        hitSlop: 6,
        iconSize: 16,
        paddingHorizontal: tokens.space.mxs,
      },
      medium: {
        compactMinWidth: 144,
        controlSize: 40,
        fontSize: tokens.fontSize.sm,
        hitSlop: 2,
        iconSize: 18,
        paddingHorizontal: tokens.space.sm,
      },
      large: {
        compactMinWidth: 176,
        controlSize: 48,
        fontSize: tokens.fontSize.sm,
        hitSlop: 0,
        iconSize: 20,
        paddingHorizontal: tokens.space.msm,
      },
    },
    states: {
      default: {
        backgroundColor: tokens.colors.surface.elevated.value,
        borderColor: tokens.colors.border.default.value,
        color: tokens.colors.text.primary,
      },
      current: {
        backgroundColor: tokens.colors.primary.value,
        borderColor: tokens.colors.primary.value,
        color: tokens.colors.primary.contrast,
      },
      disabled: {
        backgroundColor: tokens.colors.surface.primary.value,
        borderColor: tokens.colors.border.subtle.value,
        color: tokens.colors.text.disabled,
      },
    },
  };
}

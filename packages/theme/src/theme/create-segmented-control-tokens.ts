import type { PrimitiveThemeTokens, SegmentedControlTokens } from "../types";

export function createSegmentedControlTokens(
  tokens: PrimitiveThemeTokens,
): SegmentedControlTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;
  const transparent = "transparent";

  return {
    borderRadius: tokens.radii.md,
    borderWidth: tokens.borderSize.sm,
    itemBorderRadius: tokens.radii.md,
    itemBorderWidth: tokens.borderSize.sm,
    rootBackgroundColor: tokens.colors.surface.primary.value,
    rootBorderColor: tokens.colors.border.default.value,
    rootGap: tokens.space.none,
    rootPadding: tokens.space.none,
    sizes: {
      small: {
        fontSize: tokens.fontSize.xsm,
        gap: tokens.space.xxs,
        height: 32,
        hitSlop: 6,
        iconSize: 16,
        minItemWidth: 64,
        paddingHorizontal: tokens.space.xs,
        stackedPaddingVertical: tokens.space.xxs,
      },
      medium: {
        fontSize: tokens.fontSize.sm,
        gap: tokens.space.xxs,
        height: 40,
        hitSlop: 2,
        iconSize: 18,
        minItemWidth: 80,
        paddingHorizontal: tokens.space.mxs,
        stackedPaddingVertical: tokens.space.xs,
      },
      large: {
        fontSize: tokens.fontSize.sm,
        gap: tokens.space.xxs,
        height: 48,
        hitSlop: 0,
        iconSize: 20,
        minItemWidth: 96,
        paddingHorizontal: tokens.space.sm,
        stackedPaddingVertical: 10,
      },
    },
    variants: {
      filled: {
        states: {
          unselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.secondary,
          },
          selected: {
            backgroundColor: primary,
            borderColor: primary,
            color: primaryContrast,
          },
          disabledUnselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      outlined: {
        states: {
          unselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.secondary,
          },
          selected: {
            backgroundColor: tokens.colors.surface.elevated.value,
            borderColor: primary,
            color: primary,
          },
          disabledUnselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: transparent,
            borderColor: tokens.colors.neutral["5"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      soft: {
        states: {
          unselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.secondary,
          },
          selected: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          disabledUnselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
    },
  };
}

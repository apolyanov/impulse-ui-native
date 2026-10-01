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
        height: 32,
        hitSlop: 6,
        iconSize: 16,
        layouts: {
          inline: {
            flexDirection: "row",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.none,
          },
          stacked: {
            flexDirection: "column",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.xxs,
          },
        },
        minItemWidth: 64,
        paddingHorizontal: tokens.space.xs,
      },
      medium: {
        fontSize: tokens.fontSize.sm,
        height: 40,
        hitSlop: 2,
        iconSize: 18,
        layouts: {
          inline: {
            flexDirection: "row",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.none,
          },
          stacked: {
            flexDirection: "column",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.xs,
          },
        },
        minItemWidth: 80,
        paddingHorizontal: tokens.space.mxs,
      },
      large: {
        fontSize: tokens.fontSize.sm,
        height: 48,
        hitSlop: 0,
        iconSize: 20,
        layouts: {
          inline: {
            flexDirection: "row",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.none,
          },
          stacked: {
            flexDirection: "column",
            gap: tokens.space.xxs,
            paddingVertical: 10,
          },
        },
        minItemWidth: 96,
        paddingHorizontal: tokens.space.sm,
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
            backgroundColor: tokens.colors.surface.primary.value,
            borderColor: tokens.colors.border.subtle.value,
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
            borderColor: tokens.colors.border.default.value,
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
            backgroundColor: tokens.colors.surface.primary.value,
            borderColor: tokens.colors.border.subtle.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
    },
  };
}

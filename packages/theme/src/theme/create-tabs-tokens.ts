import type { PrimitiveThemeTokens, TabsTokens } from "../types";

export function createTabsTokens(tokens: PrimitiveThemeTokens): TabsTokens {
  return {
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    indicatorHeight: tokens.borderSize.md,
    panelGap: tokens.space.msm,
    states: {
      unselected: {
        color: tokens.colors.text.secondary,
        indicatorColor: tokens.colors.primary.value,
        indicatorOpacity: 0,
      },
      selected: {
        color: tokens.colors.primary.value,
        indicatorColor: tokens.colors.primary.value,
        indicatorOpacity: 1,
      },
      disabledUnselected: {
        color: tokens.colors.text.disabled,
        indicatorColor: tokens.colors.text.disabled,
        indicatorOpacity: 0,
      },
      disabledSelected: {
        color: tokens.colors.text.disabled,
        indicatorColor: tokens.colors.text.disabled,
        indicatorOpacity: 1,
      },
    },
    sizes: {
      small: {
        fontSize: tokens.fontSize.xsm,
        minHeight: 32,
        hitSlop: 6,
        paddingHorizontal: tokens.space.xs,
        paddingVertical: tokens.space.xxs,
      },
      medium: {
        fontSize: tokens.fontSize.sm,
        minHeight: 40,
        hitSlop: 2,
        paddingHorizontal: tokens.space.mxs,
        paddingVertical: tokens.space.xs,
      },
      large: {
        fontSize: tokens.fontSize.sm,
        minHeight: 48,
        hitSlop: 0,
        paddingHorizontal: tokens.space.sm,
        paddingVertical: tokens.space.mxs,
      },
    },
  };
}

import { PrimitiveThemeTokens, SelectTokens } from "../types";

export function createSelectTokens(tokens: PrimitiveThemeTokens): SelectTokens {
  return {
    flyoutHeight: 300,
    multiValueGap: tokens.space.xxs,
    multiValueMarginHorizontal: tokens.space.xxs,

    option: {
      height: 56,
      padding: tokens.space.sm,
      colors: {
        neutral: {
          unselected: {
            iconColor: tokens.colors.text.secondary,
            iconOpacity: 0,
          },
          selected: { iconColor: tokens.colors.text.secondary, iconOpacity: 1 },
          disabledUnselected: {
            iconColor: tokens.colors.text.disabled,
            iconOpacity: 0,
          },
          disabledSelected: {
            iconColor: tokens.colors.text.disabled,
            iconOpacity: 1,
          },
        },
        primary: {
          unselected: {
            iconColor: tokens.colors.primary.value,
            iconOpacity: 0,
          },
          selected: { iconColor: tokens.colors.primary.value, iconOpacity: 1 },
          disabledUnselected: {
            iconColor: tokens.colors.text.disabled,
            iconOpacity: 0,
          },
          disabledSelected: {
            iconColor: tokens.colors.text.disabled,
            iconOpacity: 1,
          },
        },
        secondary: {
          unselected: {
            iconColor: tokens.colors.secondary.contrast,
            iconOpacity: 0,
          },
          selected: {
            iconColor: tokens.colors.secondary.contrast,
            iconOpacity: 1,
          },
          disabledUnselected: {
            iconColor: tokens.colors.text.disabled,
            iconOpacity: 0,
          },
          disabledSelected: {
            iconColor: tokens.colors.text.disabled,
            iconOpacity: 1,
          },
        },
      },
    },
  };
}

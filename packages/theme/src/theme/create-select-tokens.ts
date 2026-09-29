import { PrimitiveThemeTokens, SelectTokens } from "../types";

export function createSelectTokens(tokens: PrimitiveThemeTokens): SelectTokens {
  return {
    flyoutHeight: 300,
    multiValueGap: tokens.space.xxs,
    multiValueMarginHorizontal: tokens.space.xxs,

    option: {
      padding: tokens.space.sm,
      states: {
        default: {
          iconColor: tokens.colors.primary.value,
          iconOpacity: 0,
        },
        selected: {
          iconColor: tokens.colors.primary.value,
          iconOpacity: 1,
        },
      },
    },
  };
}

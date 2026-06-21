import { PrimitiveThemeTokens, SelectTokens } from "../types";

export function createSelectTokens(tokens: PrimitiveThemeTokens): SelectTokens {
  return {
    option: {
      padding: tokens.space.sm,
      selectedIconColor: tokens.colors.primary.value,
      selectedIconVisibleOpacity: 1,
      selectedIconHiddenOpacity: 0,
    },
  };
}

import { DataStateTokens, PrimitiveThemeTokens } from "../types";

export function createDataStateTokens(
  tokens: PrimitiveThemeTokens,
): DataStateTokens {
  return {
    details: {
      gap: 10,
      iconSize: 150,
      iconColor: tokens.colors.primary.value,
    },

    actionsFooter: {
      gap: 10,
    },

    content: {
      zIndex: 1,
    },

    loading: {
      transitionDuration: 250,
      loaderZIndex: 1,
    },
  };
}

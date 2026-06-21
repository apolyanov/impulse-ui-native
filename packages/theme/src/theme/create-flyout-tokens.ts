import { FlyoutTokens, PrimitiveThemeTokens } from "../types";

export function createFlyoutTokens(tokens: PrimitiveThemeTokens): FlyoutTokens {
  return {
    zIndexBase: 100,

    maxHeightRatio: 0.7,

    overlayColor: tokens.colors.black,
    overlayVisibleOpacity: 0.4,

    backgroundColor: tokens.colors.surface.secondary.value,
    contentPaddingHorizontal: tokens.space.md,

    borderRadius: tokens.radii.xl,

    hiddenOpacity: 0,

    title: {
      paddingVertical: tokens.space.msm,
      paddingHorizontal: tokens.space.md,
    },

    handle: {
      containerHeight: 32,
      width: "25%",
      height: 6,
      borderRadius: tokens.radii.round,
      backgroundColor: tokens.colors.surface.primary.value,
    },
  };
}

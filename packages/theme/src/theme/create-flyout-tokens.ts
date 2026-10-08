import { FlyoutTokens, PrimitiveThemeTokens } from "../types";

export function createFlyoutTokens(tokens: PrimitiveThemeTokens): FlyoutTokens {
  const borderRadius = tokens.radii.xl;
  const handleContainerHeight = 32;

  return {
    zIndexBase: 100,

    maxHeightRatio: 0.7,

    overlayColor: tokens.colors.text.tertiary,
    overlayVisibleOpacity: 0.4,

    backgroundColor: tokens.colors.surface.secondary.value,
    contentPaddingHorizontal: tokens.space.md,

    hiddenOpacity: 0,

    title: {
      paddingVertical: tokens.space.msm,
      paddingHorizontal: tokens.space.md,
    },

    handle: {
      width: "25%",
      height: 6,
      borderRadius: tokens.radii.round,
      backgroundColor: tokens.colors.border.default.value,
    },

    placements: {
      top: {
        container: {
          top: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        },
        handleContainer: {
          bottom: -handleContainerHeight,
          height: handleContainerHeight,
        },
      },
      bottom: {
        container: {
          bottom: 0,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        handleContainer: {
          top: -handleContainerHeight,
          height: handleContainerHeight,
        },
      },
    },
  };
}

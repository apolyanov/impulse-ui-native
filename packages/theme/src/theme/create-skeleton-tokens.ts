import { PrimitiveThemeTokens, SkeletonTokens } from "../types";

export function createSkeletonTokens(
  tokens: PrimitiveThemeTokens,
): SkeletonTokens {
  const boneColor = tokens.colors.neutral["5"];

  return {
    bone: {
      backgroundColor: boneColor,
      borderColor: boneColor,
      initialOpacity: 1,
      animatedOpacity: 0.4,
      animationDuration: 1000,
    },

    text: {
      alignSelf: "flex-start",
      textTransform: "uppercase",
      opacity: 0,
    },
  };
}

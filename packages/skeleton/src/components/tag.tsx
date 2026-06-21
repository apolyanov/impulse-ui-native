import { memo, useMemo } from "react";
import { ViewStyle } from "react-native";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import { SkeletonTagProps } from "../types";
import { Bone } from "./bone";

export const Tag = memo(function Tag(props: SkeletonTagProps) {
  const { size, ...rest } = props;

  const tagTokens = useComponentsTokens().tag;
  const sizeTokens = tagTokens.sizes[size];

  const style = useMemo<ViewStyle>(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",

      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,
      minWidth: sizeTokens.minWidth,
      borderRadius: tagTokens.borderRadius,
      borderWidth: tagTokens.borderWidth,
    }),
    [sizeTokens, tagTokens.borderRadius, tagTokens.borderWidth],
  );

  return <Bone style={style} {...rest} />;
});

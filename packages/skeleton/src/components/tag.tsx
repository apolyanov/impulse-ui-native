import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonTagProps } from "../types";
import { Bone } from "./bone";

export const Tag = memo(function Tag(props: SkeletonTagProps) {
  const { size = "medium", ...rest } = props;
  const tokens = useComponentsTokens().tag;
  const sizeTokens = tokens.sizes[size];

  return (
    <Bone
      alignItems="center"
      alignSelf="flex-start"
      borderRadius={tokens.borderRadius}
      borderWidth={tokens.borderWidth}
      flexDirection="row"
      height={sizeTokens.height}
      justifyContent="center"
      minWidth={sizeTokens.minWidth}
      paddingHorizontal={sizeTokens.paddingHorizontal}
      {...rest}
    />
  );
});

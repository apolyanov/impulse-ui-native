import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonControlProps } from "../types";
import { Bone } from "./bone";

export const Control = memo(function Control({
  size = "medium",
  ...props
}: SkeletonControlProps) {
  const tokens = useComponentsTokens().controlContainer;
  const sizeTokens = tokens.sizes[size];

  return (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.height}
      width="100%"
      {...props}
    />
  );
});

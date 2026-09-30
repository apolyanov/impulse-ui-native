import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonBadgeProps } from "../types";
import { Bone } from "./bone";

export const Badge = memo(function Badge({
  size = "medium",
  ...props
}: SkeletonBadgeProps) {
  const tokens = useComponentsTokens().badge;
  const sizeTokens = tokens.sizes[size];

  return (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.height}
      minWidth={sizeTokens.minWidth}
      {...props}
    />
  );
});

import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonProgressProps } from "../types";
import { Bone } from "./bone";

export const Progress = memo(function Progress({
  size = "medium",
  variant = "linear",
  ...props
}: SkeletonProgressProps) {
  const tokens = useComponentsTokens().progress;
  const sizeTokens = tokens.sizes[size];

  return variant === "circular" ? (
    <Bone
      borderRadius={sizeTokens.circularSize / 2}
      height={sizeTokens.circularSize}
      width={sizeTokens.circularSize}
      {...props}
    />
  ) : (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.linearHeight}
      width="100%"
      {...props}
    />
  );
});

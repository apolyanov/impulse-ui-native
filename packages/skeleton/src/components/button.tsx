import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonButtonProps } from "../types";
import { Bone } from "./bone";

export const Button = memo(function Button({
  size = "medium",
  ...props
}: SkeletonButtonProps) {
  const tokens = useComponentsTokens().button;
  const sizeTokens = tokens.sizes[size];

  return (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.height}
      minWidth={sizeTokens.height * 2}
      {...props}
    />
  );
});

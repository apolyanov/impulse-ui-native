import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonIconButtonProps } from "../types";
import { Bone } from "./bone";

export const IconButton = memo(function IconButton({
  size = "medium",
  ...props
}: SkeletonIconButtonProps) {
  const tokens = useComponentsTokens().iconButton;
  const sizeTokens = tokens.sizes[size];

  return (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.size}
      width={sizeTokens.size}
      {...props}
    />
  );
});

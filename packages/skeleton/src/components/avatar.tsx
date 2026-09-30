import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonAvatarProps } from "../types";
import { Bone } from "./bone";

export const Avatar = memo(function Avatar({
  size = "medium",
  ...props
}: SkeletonAvatarProps) {
  const sizeTokens = useComponentsTokens().avatar.sizes[size];

  return (
    <Bone
      borderRadius={sizeTokens.size / 2}
      height={sizeTokens.size}
      width={sizeTokens.size}
      {...props}
    />
  );
});

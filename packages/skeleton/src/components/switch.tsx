import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonSwitchProps } from "../types";
import { Bone } from "./bone";

export const Switch = memo(function Switch({
  size = "medium",
  ...props
}: SkeletonSwitchProps) {
  const sizeTokens = useComponentsTokens().switch.sizes[size];

  return (
    <Bone
      borderRadius={sizeTokens.height / 2}
      height={sizeTokens.height}
      width={sizeTokens.width}
      {...props}
    />
  );
});

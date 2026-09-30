import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonSliderProps } from "../types";
import { Bone } from "./bone";

export const Slider = memo(function Slider({
  size = "medium",
  ...props
}: SkeletonSliderProps) {
  const tokens = useComponentsTokens().slider;
  const sizeTokens = tokens.sizes[size];

  return (
    <Bone
      borderRadius={tokens.thumbBorderRadius}
      height={sizeTokens.thumbSize}
      width="100%"
      {...props}
    />
  );
});

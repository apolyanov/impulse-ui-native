import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonRadioProps } from "../types";
import { Bone } from "./bone";

export const Radio = memo(function Radio({
  size = "medium",
  ...props
}: SkeletonRadioProps) {
  const sizeTokens = useComponentsTokens().radio.sizes[size];

  return (
    <Bone
      borderRadius={sizeTokens.size / 2}
      height={sizeTokens.size}
      width={sizeTokens.size}
      {...props}
    />
  );
});

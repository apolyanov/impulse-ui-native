import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonCheckboxProps } from "../types";
import { Bone } from "./bone";

export const Checkbox = memo(function Checkbox({
  size = "medium",
  ...props
}: SkeletonCheckboxProps) {
  const tokens = useComponentsTokens().checkbox;
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

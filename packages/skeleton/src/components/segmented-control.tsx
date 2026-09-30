import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonSegmentedControlProps } from "../types";
import { normalizeSkeletonCount } from "../utils";
import { Bone } from "./bone";

export const SegmentedControl = memo(function SegmentedControl({
  itemCount = 3,
  size = "medium",
  ...props
}: SkeletonSegmentedControlProps) {
  const tokens = useComponentsTokens().segmentedControl;
  const sizeTokens = tokens.sizes[size];
  const normalizedItemCount = normalizeSkeletonCount(itemCount, 3);
  const width =
    normalizedItemCount * sizeTokens.minItemWidth +
    (normalizedItemCount - 1) * tokens.rootGap +
    tokens.rootPadding * 2 +
    tokens.borderWidth * 2;

  return (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.height}
      width={width}
      {...props}
    />
  );
});

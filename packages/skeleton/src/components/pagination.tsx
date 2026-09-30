import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonPaginationProps } from "../types";
import { normalizeSkeletonCount } from "../utils";
import { Bone } from "./bone";

export const Pagination = memo(function Pagination({
  itemCount = 5,
  size = "medium",
  ...props
}: SkeletonPaginationProps) {
  const tokens = useComponentsTokens().pagination;
  const sizeTokens = tokens.sizes[size];
  const totalItemCount = normalizeSkeletonCount(itemCount, 5) + 2;
  const width =
    totalItemCount * sizeTokens.controlSize + (totalItemCount - 1) * tokens.gap;

  return (
    <Bone
      borderRadius={tokens.borderRadius}
      height={sizeTokens.controlSize}
      width={width}
      {...props}
    />
  );
});

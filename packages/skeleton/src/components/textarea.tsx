import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonTextareaProps } from "../types";
import { normalizeSkeletonCount } from "../utils";
import { Bone } from "./bone";

export const Textarea = memo(function Textarea({
  rows = 3,
  size = "medium",
  ...props
}: SkeletonTextareaProps) {
  const tokens = useComponentsTokens();
  const controlTokens = tokens.controlContainer;
  const sizeTokens = tokens.textarea.sizes[size];
  const normalizedRows = normalizeSkeletonCount(rows, 3);
  const height =
    sizeTokens.lineHeight * normalizedRows +
    sizeTokens.paddingVertical * 2 +
    controlTokens.borderWidth * 2;

  return (
    <Bone
      borderRadius={controlTokens.borderRadius}
      height={height}
      width="100%"
      {...props}
    />
  );
});

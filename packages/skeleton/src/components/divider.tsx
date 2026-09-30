import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SkeletonDividerProps } from "../types";
import { Bone } from "./bone";

export const Divider = memo(function Divider({
  orientation = "horizontal",
  ...props
}: SkeletonDividerProps) {
  const layoutTokens = useComponentsTokens().divider.layouts[orientation].none;

  return (
    <Bone
      alignSelf="stretch"
      height={layoutTokens.height}
      width={layoutTokens.width}
      {...props}
    />
  );
});

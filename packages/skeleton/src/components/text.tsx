import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import { SkeletonTextProps } from "../types";
import { Bone } from "./bone";

export const Text = memo(function Text(props: SkeletonTextProps) {
  const { text, Component, ...rest } = props;
  const tokens = useComponentsTokens().skeleton.text;

  return (
    <Bone alignSelf={tokens.alignSelf} {...rest}>
      <Component textTransform={tokens.textTransform} opacity={tokens.opacity}>
        {text}
      </Component>
    </Bone>
  );
});

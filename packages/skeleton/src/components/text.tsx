import { memo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import { SkeletonTextProps } from "../types";
import { Bone } from "./bone";

export const Text = memo(function Text(props: SkeletonTextProps) {
  const { text, Component, ...rest } = props;
  const tokens = useComponentsTokens();
  const textTokens = tokens.skeleton.text;

  return (
    <Bone alignSelf={textTokens.alignSelf} {...rest}>
      <Component
        textTransform={textTokens.textTransform}
        opacity={textTokens.opacity}
      >
        {text}
      </Component>
    </Bone>
  );
});

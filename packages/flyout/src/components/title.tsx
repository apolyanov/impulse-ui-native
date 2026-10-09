import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutTitleProps } from "../types";

export const FlyoutTitle = memo(function FlyoutTitle(props: FlyoutTitleProps) {
  const tokens = useComponentsTokens().flyout.title;

  return (
    <Typography.Title4
      color={tokens.color}
      fontSize={tokens.fontSize}
      lineHeight={tokens.lineHeight}
      flexShrink={1}
      {...props}
    />
  );
});

import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverTitleProps } from "../types";

export const PopoverTitle = memo(function PopoverTitle(
  props: PopoverTitleProps,
) {
  const tokens = useComponentsTokens().popover;

  return (
    <Typography.Title6
      color={tokens.titleColor}
      fontSize={tokens.titleFontSize}
      lineHeight={tokens.titleLineHeight}
      flexShrink={1}
      {...props}
    />
  );
});

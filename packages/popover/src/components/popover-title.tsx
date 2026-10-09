import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverTitleProps } from "../types";
import { usePopoverContext } from "../hooks/use-popover-context.hook";

export const PopoverTitle = memo(function PopoverTitle(
  props: PopoverTitleProps,
) {
  const { surface } = usePopoverContext();
  const tokens = useComponentsTokens().popover;

  return (
    <Typography.Title6
      color={
        surface === "inverse"
          ? tokens.surfaces.inverse.contrast
          : tokens.titleColor
      }
      fontSize={tokens.titleFontSize}
      lineHeight={tokens.titleLineHeight}
      flexShrink={1}
      {...props}
    />
  );
});

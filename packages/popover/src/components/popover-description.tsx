import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverDescriptionProps } from "../types";
import { usePopoverContext } from "../hooks/use-popover-context.hook";

export const PopoverDescription = memo(function PopoverDescription(
  props: PopoverDescriptionProps,
) {
  const { surface } = usePopoverContext();
  const tokens = useComponentsTokens().popover;

  return (
    <Typography.BodySmall
      color={
        surface === "inverse"
          ? tokens.surfaces.inverse.contrast
          : tokens.descriptionColor
      }
      fontSize={tokens.descriptionFontSize}
      lineHeight={tokens.descriptionLineHeight}
      {...props}
    />
  );
});

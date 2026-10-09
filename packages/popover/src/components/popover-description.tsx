import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverDescriptionProps } from "../types";

export const PopoverDescription = memo(function PopoverDescription(
  props: PopoverDescriptionProps,
) {
  const tokens = useComponentsTokens().popover;

  return (
    <Typography.BodySmall
      color={tokens.descriptionColor}
      fontSize={tokens.descriptionFontSize}
      lineHeight={tokens.descriptionLineHeight}
      {...props}
    />
  );
});

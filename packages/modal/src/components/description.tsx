import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ModalDescriptionProps } from "../types";

export const ModalDescription = memo(function ModalDescription(
  props: ModalDescriptionProps,
) {
  const tokens = useComponentsTokens().modal;

  return (
    <Typography.BodySmall
      color={tokens.descriptionColor}
      fontSize={tokens.descriptionFontSize}
      lineHeight={tokens.descriptionLineHeight}
      {...props}
    />
  );
});

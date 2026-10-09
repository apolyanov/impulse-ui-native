import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ModalTitleProps } from "../types";

export const ModalTitle = memo(function ModalTitle(props: ModalTitleProps) {
  const tokens = useComponentsTokens().modal;

  return (
    <Typography.Title4
      color={tokens.titleColor}
      fontSize={tokens.titleFontSize}
      lineHeight={tokens.titleLineHeight}
      flexShrink={1}
      {...props}
    />
  );
});

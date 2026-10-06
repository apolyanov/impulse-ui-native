import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ToastDescriptionProps } from "../types";
import { useToastContext } from "../hooks/use-toast-context.hook";

export const ToastDescription = memo(function ToastDescription(
  props: ToastDescriptionProps,
) {
  useToastContext();

  const tokens = useComponentsTokens().toast;

  return (
    <Typography.BodySmall
      color={tokens.descriptionColor}
      fontSize={tokens.descriptionFontSize}
      lineHeight={tokens.descriptionLineHeight}
      {...props}
    />
  );
});

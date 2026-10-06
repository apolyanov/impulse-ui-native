import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ToastTitleProps } from "../types";
import { useToastContext } from "../hooks/use-toast-context.hook";

export const ToastTitle = memo(function ToastTitle(props: ToastTitleProps) {
  useToastContext();

  const tokens = useComponentsTokens().toast;

  return (
    <Typography.Title6
      color={tokens.titleColor}
      fontSize={tokens.titleFontSize}
      lineHeight={tokens.titleLineHeight}
      {...props}
    />
  );
});

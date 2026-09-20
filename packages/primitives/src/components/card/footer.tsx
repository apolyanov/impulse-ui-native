import { memo, useMemo } from "react";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { CardFooterProps } from "../../types";
import { View } from "../atoms/view";

export const CardFooter = memo(function CardFooter({
  style,
  ...props
}: CardFooterProps) {
  const tokens = useComponentsTokens().card.footer;
  const extractedStyleProps = useStyleProps(props);
  const footerStyle = useMemo(
    () => [
      {
        gap: tokens.gap,
        padding: tokens.padding,
      },
      extractedStyleProps,
      style,
    ],
    [extractedStyleProps, style, tokens],
  );

  return <View {...props} style={footerStyle} />;
});

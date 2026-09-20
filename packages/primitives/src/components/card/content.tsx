import { memo, useMemo } from "react";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { CardContentProps } from "../../types";
import { View } from "../atoms/view";

export const CardContent = memo(function CardContent({
  style,
  ...props
}: CardContentProps) {
  const tokens = useComponentsTokens().card.content;
  const extractedStyleProps = useStyleProps(props);
  const contentStyle = useMemo(
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

  return <View {...props} style={contentStyle} />;
});

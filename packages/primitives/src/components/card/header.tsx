import { memo, useMemo } from "react";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { CardHeaderProps } from "../../types";
import { View } from "../atoms/view";

export const CardHeader = memo(function CardHeader({
  style,
  ...props
}: CardHeaderProps) {
  const tokens = useComponentsTokens().card.header;
  const extractedStyleProps = useStyleProps(props);
  const headerStyle = useMemo(
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

  return <View {...props} style={headerStyle} />;
});

import { memo, useMemo } from "react";

import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardRootProps } from "../../types";
import { View } from "../atoms/view";
import { cardRootStyles } from "./root.styles";

export const CardRoot = memo(function CardRoot({
  style,
  ...props
}: CardRootProps) {
  const styles = useThemedStyles(cardRootStyles);
  const extractedStyleProps = useStyleProps(props);
  const rootStyle = useMemo(
    () => [styles.root, extractedStyleProps, style],
    [extractedStyleProps, style, styles.root],
  );

  return <View {...props} style={rootStyle} />;
});

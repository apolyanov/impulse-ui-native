import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardMediaProps } from "../../types";
import { View } from "../atoms/view";

export const CardMedia = memo(function CardMedia({
  style,
  ...props
}: CardMediaProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);
  const mediaStyle = useMemo(
    () => [styles.media, extractedStyleProps, style],
    [extractedStyleProps, style, styles.media],
  );

  return <View {...props} style={mediaStyle} />;
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    media: {
      backgroundColor: theme.components.card.mediaBackgroundColor,
      overflow: "hidden",
      width: "100%",
    },
  });
}

import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { CardMediaProps } from "../../types";
import { View } from "../atoms/view";

export const CardMedia = memo(function CardMedia({
  style,
  ...props
}: CardMediaProps) {
  const tokens = useComponentsTokens().card;
  const extractedStyleProps = useStyleProps(props);
  const mediaStyle = useMemo(
    () => [
      styles.media,
      { backgroundColor: tokens.mediaBackgroundColor },
      extractedStyleProps,
      style,
    ],
    [extractedStyleProps, style, tokens.mediaBackgroundColor],
  );

  return <View {...props} style={mediaStyle} />;
});

const styles = StyleSheet.create({
  media: {
    overflow: "hidden",
    width: "100%",
  },
});

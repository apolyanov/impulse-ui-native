import { memo, useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutContentProps } from "../types";
import type { FlyoutContentThemeProps } from "../types/flyout-theme.types";

export const FlyoutContent = memo(function FlyoutContent({
  style,
  ...props
}: FlyoutContentProps) {
  const { height } = useWindowDimensions();
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, { height }, [height]);

  const contentStyle = useMemo(
    () => [styles.content, extractedStyleProps, style],
    [styles.content, extractedStyleProps, style],
  );

  return <View {...props} style={contentStyle} />;
});

function themedStyles(theme: AppTheme, { height }: FlyoutContentThemeProps) {
  const tokens = theme.components.flyout;

  return StyleSheet.create({
    content: {
      paddingHorizontal: tokens.contentPaddingHorizontal,
      maxHeight: height * tokens.maxHeightRatio,
    },
  });
}

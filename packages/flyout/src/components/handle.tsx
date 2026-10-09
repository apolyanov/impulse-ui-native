import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import {
  getFlyoutTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { FlyoutHandleProps } from "../types";

export const FlyoutHandle = memo(function FlyoutHandle({
  placement = "bottom",
  style,
  ...props
}: FlyoutHandleProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, { placement }, [placement]);

  const handleStyle = useMemo(
    () => [styles.flyoutHandleContainer, extractedStyleProps, style],
    [styles.flyoutHandleContainer, extractedStyleProps, style],
  );

  return (
    <Animated.View {...props} style={handleStyle}>
      <View style={styles.flyoutHandle} />
    </Animated.View>
  );
});

function themedStyles(
  theme: AppTheme,
  { placement }: { placement: "top" | "bottom" },
) {
  const flyoutTokens = getFlyoutTokens(theme.components.flyout, { placement });
  const handleTokens = flyoutTokens.handle;

  return StyleSheet.create({
    flyoutHandle: {
      alignSelf: "center",
      backgroundColor: handleTokens.backgroundColor,
      width: handleTokens.width,
      height: handleTokens.height,
      borderRadius: handleTokens.borderRadius,
    },
    flyoutHandleContainer: {
      position: "absolute",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      ...flyoutTokens.handleContainer,
    },
  });
}

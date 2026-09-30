import { memo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { View } from "@impulse-ui-native/primitives";
import {
  AppTheme,
  getFlyoutTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

interface FlyoutHandleProps {
  placement: "top" | "bottom";
}

export const FlyoutHandle = memo(function FlyoutHandle(
  props: FlyoutHandleProps,
) {
  const styles = useThemedStyles(themedStyles, props, [props.placement]);

  return (
    <Animated.View style={styles.flyoutHandleContainer}>
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

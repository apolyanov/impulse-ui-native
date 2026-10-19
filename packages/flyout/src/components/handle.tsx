import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import {
  getFlyoutTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { FlyoutHandleProps } from "../types";
import type { FlyoutPlacementThemeProps } from "../types/flyout-theme.types";
import { useFlyoutDragContext } from "../hooks";

export const FlyoutHandle = memo(function FlyoutHandle({
  placement = "bottom",
  style,
  ...props
}: FlyoutHandleProps) {
  const dragGesture = useFlyoutDragContext();
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, { placement }, [placement]);

  const handleStyle = useMemo(
    () => [styles.flyoutHandleContainer, extractedStyleProps, style],
    [styles.flyoutHandleContainer, extractedStyleProps, style],
  );

  return (
    <GestureDetector gesture={dragGesture}>
      <Animated.View {...props} collapsable={false} style={handleStyle}>
        <View style={styles.flyoutHandle} />
      </Animated.View>
    </GestureDetector>
  );
});

function themedStyles(
  theme: AppTheme,
  { placement }: FlyoutPlacementThemeProps,
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
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: flyoutTokens.handleContainer.height,
    },
  });
}

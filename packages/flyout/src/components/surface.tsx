import { memo, useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFlyoutTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutSurfaceProps } from "../types/flyout-surface.types";
import type { FlyoutSurfaceThemeProps } from "../types/flyout-theme.types";
import { FlyoutDragContext } from "../contexts/flyout-drag.context";
import { FlyoutContext } from "../contexts/flyout.context";
import { FlyoutBackdrop } from "./backdrop";

export const FlyoutSurface = memo(function FlyoutSurface({
  children,
  placement,
  layer,
  style,
  offset,
  lifecycle,
}: FlyoutSurfaceProps) {
  const insets = useSafeAreaInsets();
  const { height: screenHeight } = useWindowDimensions();
  const styles = useThemedStyles(
    themedStyles,
    { placement, offset, screenHeight, layer, insets },
    [placement, offset, screenHeight, layer, insets],
  );

  const {
    close,
    closingHeight,
    dragGesture,
    dragGestureConfig,
    hasMeasured,
    measuredHeight,
    interactive,
    onLayout,
    opacity,
    translateY,
  } = lifecycle;

  const authoredHeight = StyleSheet.flatten([style])?.height;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    height: closingHeight.value > 0 ? closingHeight.value : authoredHeight,
  }));
  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  const containerStyle = useMemo(
    () => [
      styles.container,
      style,
      !hasMeasured && styles.hidden,
      animatedStyle,
    ],
    [styles.container, styles.hidden, style, hasMeasured, animatedStyle],
  );
  const overlayStyle = useMemo(
    () => [styles.backdrop, backdropStyle],
    [styles.backdrop, backdropStyle],
  );
  const context = useMemo(
    () => ({
      placement,
      offset,
      screenHeight,
      measuredHeight,
      closingHeight,
      maxHeight: styles.container.maxHeight,
    }),
    [
      placement,
      offset,
      screenHeight,
      measuredHeight,
      closingHeight,
      styles.container.maxHeight,
    ],
  );
  const dragContext = useMemo(
    () => ({ dragGesture, dragGestureConfig, placement }),
    [dragGesture, dragGestureConfig, placement],
  );
  const pointerEvents = interactive ? "auto" : "none";

  return (
    <FlyoutContext.Provider value={context}>
      <FlyoutDragContext.Provider value={dragContext}>
        <FlyoutBackdrop
          onPress={close}
          pointerEvents={pointerEvents}
          style={overlayStyle}
        />
        <Animated.View
          onLayout={onLayout}
          pointerEvents={pointerEvents}
          style={containerStyle}
        >
          {children}
        </Animated.View>
      </FlyoutDragContext.Provider>
    </FlyoutContext.Provider>
  );
});

function themedStyles(
  theme: AppTheme,
  { placement, offset, screenHeight, layer, insets }: FlyoutSurfaceThemeProps,
) {
  const tokens = getFlyoutTokens(theme.components.flyout, { placement });
  const zIndex = tokens.zIndexBase + layer;
  const oppositeInset = placement === "bottom" ? insets.top : insets.bottom;
  const availableHeight = screenHeight - oppositeInset - offset;
  const maxHeight = Math.max(
    0,
    Math.min(screenHeight * tokens.maxHeightRatio, availableHeight),
  );

  return StyleSheet.create({
    container: {
      ...tokens.container,
      position: "absolute",
      left: 0,
      right: 0,
      zIndex,
      [placement]: offset,
      maxHeight,
      paddingBottom: placement === "bottom" ? insets.bottom : 0,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingTop: placement === "top" ? insets.top : 0,
      backgroundColor: tokens.backgroundColor,
    },
    backdrop: {
      ...StyleSheet.absoluteFill,
      zIndex,
      backgroundColor: tokens.overlayColor,
    },
    hidden: { opacity: tokens.hiddenOpacity },
  });
}

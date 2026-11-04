import { memo, useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFlyoutTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutRootProps } from "../types";
import type { FlyoutRootThemeProps } from "../types/flyout-theme.types";
import { FlyoutContext } from "../contexts/flyout.context";
import { useFlyoutLifecycle } from "../hooks";
import { FlyoutBackdrop } from "./backdrop";

export const FlyoutRoot = memo(function FlyoutRoot({
  children,
  placement = "bottom",
  layer = 0,
  style,
  topOffset = 0,
  bottomOffset = 0,
  ...lifecycleProps
}: FlyoutRootProps) {
  const insets = useSafeAreaInsets();
  const { height: screenHeight } = useWindowDimensions();
  const offset = placement === "top" ? topOffset : bottomOffset;
  const styles = useThemedStyles(
    themedStyles,
    { placement, offset, screenHeight, layer, insets },
    [placement, offset, screenHeight, layer, insets],
  );

  const {
    close,
    dragGesture,
    hasMeasured,
    measuredHeight,
    interactive,
    mounted,
    onLayout,
    opacity,
    translateY,
  } = useFlyoutLifecycle({
    ...lifecycleProps,
    placement,
    offset,
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
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
      dragGesture,
      placement,
      offset,
      screenHeight,
      measuredHeight,
      maxHeight: styles.container.maxHeight,
    }),
    [
      dragGesture,
      placement,
      offset,
      screenHeight,
      measuredHeight,
      styles.container.maxHeight,
    ],
  );
  const pointerEvents = interactive ? "auto" : "none";

  if (!mounted) {
    return null;
  }

  return (
    <FlyoutContext.Provider value={context}>
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
    </FlyoutContext.Provider>
  );
});

function themedStyles(
  theme: AppTheme,
  { placement, offset, screenHeight, layer, insets }: FlyoutRootThemeProps,
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

import type { Edge } from "react-native-safe-area-context";
import { Fragment, memo, useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Pressable } from "@impulse-ui-native/primitives";
import {
  getFlyoutTokens,
  useTheme,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { FlyoutRootProps } from "../types";
import { useFlyoutLifecycle } from "../hooks";

export const FlyoutRoot = memo(function FlyoutRoot(props: FlyoutRootProps) {
  const {
    id,
    children,
    placement = "bottom",
    layer = 0,
    style,
    open,
    topOffset,
    bottomOffset,
    onCloseFinished,
    onClose,
    onOpen,
    onOpenFinished,
  } = props;

  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const windowDimensions = useWindowDimensions();

  const flyoutTokens = getFlyoutTokens(theme.components.flyout, { placement });

  const placementOffset = placement === "top" ? topOffset : bottomOffset;
  const screenHeight = windowDimensions.height;
  const zIndex = flyoutTokens.zIndexBase + layer;

  const styles = useThemedStyles(themedStyles, { placement }, [placement]);

  const {
    close,
    dragGesture,
    hasMeasured,
    isTouchable,
    mounted,
    onLayout,
    opacity,
    translateY,
  } = useFlyoutLifecycle({
    id,
    open,
    placement,
    screenHeight,
    safeAreaInset: insets[placement],
    overlayVisibleOpacity: flyoutTokens.overlayVisibleOpacity,
    onClose,
    onCloseFinished,
    onOpen,
    onOpenFinished,
  });

  const animatedStyle = useAnimatedStyle(() => {
    const offset =
      placement === "bottom" ? -(placementOffset ?? 0) : (placementOffset ?? 0);

    return {
      transform: [{ translateY: translateY.value + offset }],
      zIndex,
    };
  });

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    zIndex,
    backgroundColor: flyoutTokens.overlayColor,
  }));

  const edges = useMemo<Edge[]>(() => {
    return [placement, "left", "right"];
  }, [placement]);

  const overlayContainerStyle = useMemo(
    () => [StyleSheet.absoluteFill, overlayStyle],
    [overlayStyle],
  );

  const containerStyle = useMemo(
    () => [
      styles.container,
      style,
      !hasMeasured && styles.hidden,
      animatedStyle,
    ],
    [animatedStyle, hasMeasured, style, styles.container, styles.hidden],
  );

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <Animated.View
        pointerEvents={isTouchable ? "auto" : "none"}
        style={overlayContainerStyle}
      >
        <Pressable onPress={close} style={StyleSheet.absoluteFill} />
      </Animated.View>

      <GestureDetector gesture={dragGesture}>
        <Animated.View onLayout={onLayout} style={containerStyle}>
          <SafeAreaView edges={edges}>{children}</SafeAreaView>
        </Animated.View>
      </GestureDetector>
    </Fragment>
  );
});

interface FlyoutThemeProps {
  placement: "top" | "bottom";
}

function themedStyles(theme: AppTheme, props: FlyoutThemeProps) {
  const { placement } = props;
  const flyoutTokens = getFlyoutTokens(theme.components.flyout, { placement });

  return StyleSheet.create({
    container: {
      position: "absolute",
      left: 0,
      right: 0,
      backgroundColor: flyoutTokens.backgroundColor,
      ...flyoutTokens.container,
    },
    hidden: {
      opacity: flyoutTokens.hiddenOpacity,
    },
  });
}

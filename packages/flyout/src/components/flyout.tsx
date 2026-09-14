import { Fragment, memo, PropsWithChildren, useMemo } from "react";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import {
  Edge,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { View } from "@impulse-ui-native/primitives";
import { AppTheme, useTheme } from "@impulse-ui-native/theme";

import { useFlyoutLifecycle } from "../hooks";
import { FlyoutProps } from "../types";
import { FlyoutHandle } from "./flyout-handle";
import { FlyoutTitle } from "./flyout-title";

export const Flyout = memo(function Flyout(
  props: PropsWithChildren<FlyoutProps>,
) {
  const {
    id,
    children,
    placement = "bottom",
    layer = 0,
    title,
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

  const flyoutTokens = theme.components.flyout;

  const placementOffset = placement === "top" ? topOffset : bottomOffset;
  const screenHeight = windowDimensions.height;
  const maxHeight = screenHeight * flyoutTokens.maxHeightRatio;
  const zIndex = flyoutTokens.zIndexBase + layer;

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

  const styles = useMemo(() => {
    return themedStyles(theme, placement, maxHeight);
  }, [theme, placement, maxHeight]);

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <Animated.View
        pointerEvents={isTouchable ? "auto" : "none"}
        style={[StyleSheet.absoluteFill, overlayStyle]}
      >
        <Pressable onPress={close} style={StyleSheet.absoluteFill} />
      </Animated.View>

      <GestureDetector gesture={dragGesture}>
        <Animated.View
          onLayout={onLayout}
          style={[
            styles.container,
            !hasMeasured && styles.hidden,
            animatedStyle,
          ]}
        >
          <SafeAreaView edges={edges}>
            {placement === "bottom" ? (
              <FlyoutHandle placement={placement} />
            ) : null}

            {title ? <FlyoutTitle title={title} /> : null}

            <View style={styles.content}>{children}</View>

            {placement === "top" ? (
              <FlyoutHandle placement={placement} />
            ) : null}
          </SafeAreaView>
        </Animated.View>
      </GestureDetector>
    </Fragment>
  );
});

function themedStyles(
  theme: AppTheme,
  placement: "top" | "bottom",
  maxHeight: number,
) {
  const flyoutTokens = theme.components.flyout;

  return StyleSheet.create({
    container: {
      position: "absolute",
      [placement]: 0,
      left: 0,
      right: 0,
      backgroundColor: flyoutTokens.backgroundColor,
      borderTopLeftRadius:
        placement === "bottom" ? flyoutTokens.borderRadius : 0,
      borderTopRightRadius:
        placement === "bottom" ? flyoutTokens.borderRadius : 0,
      borderBottomLeftRadius:
        placement === "top" ? flyoutTokens.borderRadius : 0,
      borderBottomRightRadius:
        placement === "top" ? flyoutTokens.borderRadius : 0,
    },
    content: {
      paddingHorizontal: flyoutTokens.contentPaddingHorizontal,
      maxHeight,
    },
    hidden: {
      opacity: flyoutTokens.hiddenOpacity,
    },
  });
}

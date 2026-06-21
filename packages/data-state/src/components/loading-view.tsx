import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { LoadingViewProps } from "../types";

export const LoadingView = memo(function LoadingView(props: LoadingViewProps) {
  const {
    loading,
    children,
    LoadingComponent,
    contentContainerStyle,
    style,
    ...rest
  } = props;

  const tokens = useComponentsTokens().dataState.loading;

  const [shouldMountLoader, setShouldMountLoader] = useState(loading);
  const [loaderHeight, setLoaderHeight] = useState(0);

  const loaderOpacity = useSharedValue(loading ? 1 : 0);
  const childrenOpacity = useSharedValue(loading ? 0 : 1);

  const onLoaderLayout = useCallback((event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;

    setLoaderHeight((prev) => {
      if (prev === height) {
        return prev;
      }

      return height;
    });
  }, []);

  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        position: "relative",
        minHeight: shouldMountLoader ? loaderHeight : undefined,
      },
      style,
    ],
    [loaderHeight, shouldMountLoader, style],
  );

  const loaderStyles = useAnimatedStyle(() => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: tokens.loaderZIndex,
    opacity: loaderOpacity.value,
  }));

  const childrenStyles = useAnimatedStyle(() => ({
    opacity: childrenOpacity.value,
  }));

  const childrenContainerStyles = useMemo(
    () => [contentContainerStyle, childrenStyles],
    [contentContainerStyle, childrenStyles],
  );

  useEffect(() => {
    if (loading) {
      setShouldMountLoader(true);

      loaderOpacity.value = 1;
      childrenOpacity.value = 0;

      return;
    }

    loaderOpacity.value = withTiming(
      0,
      {
        duration: tokens.transitionDuration,
        easing: Easing.linear,
      },
      (finished) => {
        if (finished) {
          scheduleOnRN(setShouldMountLoader, false);
        }
      },
    );

    childrenOpacity.value = withTiming(1, {
      duration: tokens.transitionDuration,
      easing: Easing.linear,
    });
  }, [loading, loaderOpacity, childrenOpacity, tokens.transitionDuration]);

  return (
    <View {...rest} style={containerStyle}>
      <Animated.View style={childrenContainerStyles}>{children}</Animated.View>

      {shouldMountLoader ? (
        <Animated.View style={loaderStyles} pointerEvents="auto">
          <View onLayout={onLoaderLayout}>
            <LoadingComponent />
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
});

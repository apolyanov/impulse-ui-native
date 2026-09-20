import type { ColorValue, LayoutChangeEvent, ViewProps } from "react-native";
import { memo, useCallback, useMemo, useState } from "react";
import { Animated, I18nManager, StyleSheet, View } from "react-native";

import { useIndeterminateProgressAnimation } from "../../hooks/use-indeterminate-progress-animation.hook";

interface LinearProgressProps extends ViewProps {
  animationDuration: number;
  borderRadius: number;
  fraction: number;
  indicatorColor: ColorValue;
  indeterminate: boolean;
  indeterminateWidth: number;
  trackColor: ColorValue;
  trackHeight: number;
}

export const LinearProgress = memo(function LinearProgress({
  animationDuration,
  borderRadius,
  fraction,
  indicatorColor,
  indeterminate,
  indeterminateWidth,
  onLayout,
  style,
  trackColor,
  trackHeight,
  ...props
}: LinearProgressProps) {
  const [trackWidth, setTrackWidth] = useState(0);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setTrackWidth(event.nativeEvent.layout.width);
      onLayout?.(event);
    },
    [onLayout],
  );

  const trackStyle = useMemo(
    () => [
      styles.track,
      {
        backgroundColor: trackColor,
        borderRadius,
        height: trackHeight,
      },
      style,
    ],
    [borderRadius, style, trackColor, trackHeight],
  );

  const determinateIndicatorStyle = useMemo(
    () => ({
      alignSelf: I18nManager.isRTL
        ? ("flex-end" as const)
        : ("flex-start" as const),
      backgroundColor: indicatorColor,
      borderRadius,
      height: trackHeight,
      width: `${fraction * 100}%` as const,
    }),
    [borderRadius, fraction, indicatorColor, trackHeight],
  );

  return (
    <View {...props} onLayout={handleLayout} style={trackStyle}>
      {indeterminate ? (
        <LinearIndeterminateIndicator
          animationDuration={animationDuration}
          borderRadius={borderRadius}
          color={indicatorColor}
          ratio={indeterminateWidth}
          trackHeight={trackHeight}
          trackWidth={trackWidth}
        />
      ) : (
        <View style={determinateIndicatorStyle} />
      )}
    </View>
  );
});

interface LinearIndeterminateIndicatorProps {
  animationDuration: number;
  borderRadius: number;
  color: ColorValue;
  ratio: number;
  trackHeight: number;
  trackWidth: number;
}

const LinearIndeterminateIndicator = memo(
  function LinearIndeterminateIndicator({
    animationDuration,
    borderRadius,
    color,
    ratio,
    trackHeight,
    trackWidth,
  }: LinearIndeterminateIndicatorProps) {
    const progress = useIndeterminateProgressAnimation(animationDuration);
    const indicatorWidth = trackWidth * ratio;
    const translateX = progress.interpolate({
      inputRange: [0, 1],
      outputRange: I18nManager.isRTL
        ? [trackWidth, -indicatorWidth]
        : [-indicatorWidth, trackWidth],
    });

    const indicatorStyle = useMemo(
      () => ({
        backgroundColor: color,
        borderRadius,
        height: trackHeight,
        transform: [{ translateX }],
        width: `${ratio * 100}%` as const,
      }),
      [borderRadius, color, ratio, trackHeight, translateX],
    );

    return <Animated.View style={indicatorStyle} />;
  },
);

const styles = StyleSheet.create({
  track: {
    overflow: "hidden",
    width: "100%",
  },
});

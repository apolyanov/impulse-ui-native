import type { ColorValue, LayoutChangeEvent, ViewProps } from "react-native";
import { memo, useCallback, useState } from "react";
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

  return (
    <View
      {...props}
      onLayout={handleLayout}
      style={[
        styles.track,
        {
          backgroundColor: trackColor,
          borderRadius,
          height: trackHeight,
        },
        style,
      ]}
    >
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
        <View
          style={{
            alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start",
            backgroundColor: indicatorColor,
            borderRadius,
            height: trackHeight,
            width: `${fraction * 100}%`,
          }}
        />
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

    return (
      <Animated.View
        style={{
          backgroundColor: color,
          borderRadius,
          height: trackHeight,
          transform: [{ translateX }],
          width: `${ratio * 100}%`,
        }}
      />
    );
  },
);

const styles = StyleSheet.create({
  track: {
    overflow: "hidden",
    width: "100%",
  },
});

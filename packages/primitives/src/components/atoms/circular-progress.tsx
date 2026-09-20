import type { ColorValue, ViewProps } from "react-native";
import { memo } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

import { useIndeterminateProgressAnimation } from "../../hooks/use-indeterminate-progress-animation.hook";

interface CircularProgressProps extends ViewProps {
  animationDuration: number;
  fraction: number;
  indicatorColor: ColorValue;
  indeterminate: boolean;
  strokeWidth: number;
  trackColor: ColorValue;
  width: number;
}

export const CircularProgress = memo(function CircularProgress({
  animationDuration,
  fraction,
  indicatorColor,
  indeterminate,
  strokeWidth,
  style,
  trackColor,
  width,
  ...props
}: CircularProgressProps) {
  return (
    <View {...props} style={[styles.root, { height: width, width }, style]}>
      {indeterminate ? (
        <CircularIndeterminateIndicator
          animationDuration={animationDuration}
          color={indicatorColor}
          strokeWidth={strokeWidth}
          trackColor={trackColor}
          width={width}
        />
      ) : (
        <ProgressCircle
          color={indicatorColor}
          fraction={fraction}
          strokeWidth={strokeWidth}
          trackColor={trackColor}
          width={width}
        />
      )}
    </View>
  );
});

interface ProgressCircleProps {
  color: ColorValue;
  fraction: number;
  strokeWidth: number;
  trackColor: ColorValue;
  width: number;
}

const ProgressCircle = memo(function ProgressCircle({
  color,
  fraction,
  strokeWidth,
  trackColor,
  width,
}: ProgressCircleProps) {
  const center = width / 2;
  const radius = (width - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <Svg accessible={false} height={width} width={width}>
      <Circle
        cx={center}
        cy={center}
        fill="none"
        r={radius}
        stroke={trackColor}
        strokeWidth={strokeWidth}
      />
      <G origin={`${center}, ${center}`} rotation={-90}>
        <Circle
          cx={center}
          cy={center}
          fill="none"
          r={radius}
          stroke={color}
          strokeDasharray={[circumference, circumference]}
          strokeDashoffset={circumference * (1 - fraction)}
          strokeLinecap={fraction === 0 ? "butt" : "round"}
          strokeWidth={strokeWidth}
        />
      </G>
    </Svg>
  );
});

interface CircularIndeterminateIndicatorProps {
  animationDuration: number;
  color: ColorValue;
  strokeWidth: number;
  trackColor: ColorValue;
  width: number;
}

const CircularIndeterminateIndicator = memo(
  function CircularIndeterminateIndicator({
    animationDuration,
    color,
    strokeWidth,
    trackColor,
    width,
  }: CircularIndeterminateIndicatorProps) {
    const progress = useIndeterminateProgressAnimation(animationDuration);
    const rotation = progress.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    const center = width / 2;
    const radius = (width - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Svg accessible={false} height={width} width={width}>
          <Circle
            cx={center}
            cy={center}
            fill="none"
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          <Circle
            cx={center}
            cy={center}
            fill="none"
            r={radius}
            stroke={color}
            strokeDasharray={[circumference * 0.25, circumference * 0.75]}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
});

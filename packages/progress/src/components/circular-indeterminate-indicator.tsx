import { memo, useMemo } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

import type { CircularIndeterminateIndicatorProps } from "../types/progress-internal.types";
import { useIndeterminateProgressAnimation } from "../hooks/use-indeterminate-progress-animation.hook";

export const CircularIndeterminateIndicator = memo(
  function CircularIndeterminateIndicator({
    animationDuration,
    color,
    strokeWidth,
    trackColor,
    width,
  }: CircularIndeterminateIndicatorProps) {
    const progress = useIndeterminateProgressAnimation(animationDuration);

    const center = width / 2;
    const radius = (width - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: progress.value * 360 + "deg" }],
    }));
    const strokeDasharray = useMemo(
      () => [circumference * 0.25, circumference * 0.75],
      [circumference],
    );

    return (
      <Animated.View style={animatedStyle}>
        <Svg height={width} width={width}>
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
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </Animated.View>
    );
  },
);

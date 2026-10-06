import { memo, useMemo } from "react";
import { I18nManager } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import type { LinearIndeterminateIndicatorProps } from "../types/progress-internal.types";
import { useIndeterminateProgressAnimation } from "../hooks/use-indeterminate-progress-animation.hook";

export const LinearIndeterminateIndicator = memo(
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
    const direction = I18nManager.isRTL;
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: direction
            ? trackWidth - progress.value * (trackWidth + indicatorWidth)
            : -indicatorWidth + progress.value * (trackWidth + indicatorWidth),
        },
      ],
    }));

    const indicatorStyle = useMemo(
      () => ({
        backgroundColor: color,
        borderRadius,
        height: trackHeight,
        width: `${ratio * 100}%` as const,
      }),
      [borderRadius, color, ratio, trackHeight],
    );

    const composedStyle = useMemo(
      () => [indicatorStyle, animatedStyle],
      [indicatorStyle, animatedStyle],
    );

    return <Animated.View style={composedStyle} />;
  },
);

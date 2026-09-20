import { useEffect } from "react";
import { I18nManager } from "react-native";
import {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import type { SwitchSizeTokens } from "@impulse-ui-native/theme";

import type { SwitchAnimationColors } from "./use-switch-tokens.hook";

interface UseSwitchAnimationOptions {
  animationDuration: number;
  borderWidth: number;
  checked: boolean;
  colors: SwitchAnimationColors;
  sizeTokens: SwitchSizeTokens[keyof SwitchSizeTokens];
}

export function useSwitchAnimation({
  animationDuration,
  borderWidth,
  checked,
  colors,
  sizeTokens,
}: UseSwitchAnimationOptions) {
  const reduceMotion = useReducedMotion();
  const progress = useSharedValue(checked ? 1 : 0);

  const thumbTravel =
    sizeTokens.width -
    sizeTokens.thumbSize -
    sizeTokens.trackPadding * 2 -
    borderWidth * 2;
  const direction = I18nManager.isRTL ? -1 : 1;

  const trackStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [colors.inactiveBackgroundColor, colors.activeBackgroundColor],
      ),
      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        [colors.inactiveBorderColor, colors.activeBorderColor],
      ),
    }),
    [colors],
  );

  const thumbStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [colors.inactiveThumbColor, colors.activeThumbColor],
      ),
      transform: [
        {
          translateX: progress.value * thumbTravel * direction,
        },
      ],
    }),
    [colors, direction, thumbTravel],
  );

  useEffect(() => {
    // Reanimated shared values are mutable handles updated from React effects.
    // eslint-disable-next-line react-hooks/immutability
    progress.value = withTiming(checked ? 1 : 0, {
      duration: reduceMotion ? 0 : animationDuration,
      easing: Easing.out(Easing.cubic),
    });
  }, [animationDuration, checked, progress, reduceMotion]);

  return { thumbStyle, trackStyle };
}

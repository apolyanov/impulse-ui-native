import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export function useIndeterminateProgressAnimation(duration: number) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.stopAnimation();
    progress.setValue(0);

    const animation = Animated.loop(
      Animated.timing(progress, {
        duration,
        easing: Easing.linear,
        toValue: 1,
        useNativeDriver: true,
      }),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [duration, progress]);

  return progress;
}

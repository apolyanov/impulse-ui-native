import { useEffect } from "react";
import {
  cancelAnimation,
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export function useIndeterminateProgressAnimation(duration: number) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
    progress.value = withRepeat(
      withTiming(1, { duration, easing: Easing.linear }),
      -1,
      false,
    );

    return () => cancelAnimation(progress);
  }, [duration, progress]);

  return progress;
}

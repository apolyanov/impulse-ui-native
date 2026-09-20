import { useEffect } from "react";
import {
  Easing,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import type { AccordionAnimationOptions } from "./accordion-animation.types";

const accordionEasing = Easing.out(Easing.cubic);

export function useAccordionAnimationProgress({
  duration,
  open,
}: AccordionAnimationOptions) {
  const reduceMotion = useReducedMotion();
  const progress = useSharedValue(open ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(open ? 1 : 0, {
      duration: reduceMotion ? 0 : duration,
      easing: accordionEasing,
    });
  }, [duration, open, progress, reduceMotion]);

  return progress;
}

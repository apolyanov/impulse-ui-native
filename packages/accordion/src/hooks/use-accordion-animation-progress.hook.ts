import { useEffect } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import type { AccordionAnimationOptions } from "../types/accordion-animation.types";
import { AccordionEasing } from "../constants/accordion-animation.constants";

export function useAccordionAnimationProgress({
  duration,
  open,
}: AccordionAnimationOptions) {
  const progress = useSharedValue(open ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(open ? 1 : 0, {
      duration,
      easing: AccordionEasing,
    });

    return () => cancelAnimation(progress);
  }, [duration, open, progress]);

  return progress;
}

import { useAnimatedStyle } from "react-native-reanimated";

import type { AccordionAnimationOptions } from "./accordion-animation.types";
import { useAccordionAnimationProgress } from "./use-accordion-animation-progress.hook";

export function useAccordionIndicatorAnimation({
  duration,
  open,
}: AccordionAnimationOptions) {
  const progress = useAccordionAnimationProgress({ duration, open });

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));

  return indicatorStyle;
}

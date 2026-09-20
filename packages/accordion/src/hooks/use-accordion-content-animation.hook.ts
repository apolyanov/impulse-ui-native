import { useCallback, useMemo } from "react";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import type { AccordionAnimationOptions } from "./accordion-animation.types";
import { useAccordionAnimationProgress } from "./use-accordion-animation-progress.hook";

export function useAccordionContentAnimation({
  duration,
  open,
}: AccordionAnimationOptions) {
  const measuredHeight = useSharedValue(0);
  const progress = useAccordionAnimationProgress({ duration, open });

  const contentStyle = useAnimatedStyle(() => ({
    height: measuredHeight.value * progress.value,
    opacity: progress.value,
  }));

  const setContentHeight = useCallback(
    (height: number) => {
      measuredHeight.value = height;
    },
    [measuredHeight],
  );

  return useMemo(
    () => ({ contentStyle, setContentHeight }),
    [contentStyle, setContentHeight],
  );
}

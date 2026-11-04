import { useEffect, useMemo } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type {
  OverlayTimingOptions,
  OverlayTransitionCompletion,
  OverlayTransitionHandler,
} from "../types";
import type {
  OverlayAnimation,
  OverlayAnimationKind,
} from "../types/overlay-animation.types";

/** Shared progress, cancellation and completion handling for layer transitions. */
export function useOverlayAnimation(
  { enterDuration, exitDuration }: OverlayTimingOptions,
  kind: OverlayAnimationKind,
): OverlayAnimation {
  const progress = useSharedValue(0);
  const animate = useEventCallback(
    (
      target: number,
      duration: number,
      transitionId: number,
      complete: OverlayTransitionCompletion,
    ) => {
      const onComplete = (finished?: boolean) => {
        "worklet";
        if (finished) scheduleOnRN(complete, transitionId);
      };
      const animation =
        kind === "spring"
          ? withSpring(target, { duration, dampingRatio: 1 }, onComplete)
          : withTiming(target, { duration }, onComplete);
      progress.set(animation);
    },
  );
  const enter = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) =>
      animate(1, enterDuration, transitionId, complete),
  );
  const exit = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) =>
      animate(0, exitDuration, transitionId, complete),
  );
  const options = useMemo(
    () => ({ onEnter: enter, onExit: exit }),
    [enter, exit],
  );

  useEffect(() => () => cancelAnimation(progress), [progress]);

  return useMemo(() => ({ options, progress }), [options, progress]);
}

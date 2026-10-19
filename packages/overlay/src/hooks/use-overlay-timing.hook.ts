import { useEffect, useMemo } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { OverlayTimingOptions, OverlayTransitionHandler } from "../types";

export function useOverlayTiming({
  enterDuration,
  exitDuration,
}: OverlayTimingOptions) {
  const progress = useSharedValue(0);

  const enter = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      progress.set(
        withTiming(1, { duration: enterDuration }, (finished) => {
          if (finished) {
            scheduleOnRN(complete, transitionId);
          }
        }),
      );
    },
  );
  const exit = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      progress.set(
        withTiming(0, { duration: exitDuration }, (finished) => {
          if (finished) {
            scheduleOnRN(complete, transitionId);
          }
        }),
      );
    },
  );
  const options = useMemo(
    () => ({ onEnter: enter, onExit: exit }),
    [enter, exit],
  );

  useEffect(() => () => cancelAnimation(progress), [progress]);

  return useMemo(() => ({ options, progress }), [options, progress]);
}

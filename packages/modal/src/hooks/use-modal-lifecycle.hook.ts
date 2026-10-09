import { useEffect, useMemo } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import type { OverlayTransitionHandler } from "@impulse-ui-native/overlay";
import { useEventCallback } from "@impulse-ui-native/core";
import { useOverlayLifecycle } from "@impulse-ui-native/overlay";

import type { ModalLifecycleProps } from "../types";
import { EnterDuration, ExitDuration } from "../constants/modal.constants";

export function useModalLifecycle(props: ModalLifecycleProps) {
  const progress = useSharedValue(0);

  const enter = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      progress.set(
        withTiming(1, { duration: EnterDuration }, (finished) => {
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
        withTiming(0, { duration: ExitDuration }, (finished) => {
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
  const lifecycle = useOverlayLifecycle(props, options);

  useEffect(() => () => cancelAnimation(progress), [progress]);

  return useMemo(() => ({ ...lifecycle, progress }), [lifecycle, progress]);
}

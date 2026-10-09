import { useEffect, useMemo } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import type { OverlayTransitionHandler } from "@impulse-ui-native/overlay";
import { useEventCallback, useTimer } from "@impulse-ui-native/core";
import {
  useOverlayContext,
  useOverlayLifecycle,
} from "@impulse-ui-native/overlay";

import type { ToastRootProps } from "../types";
import { EnterDuration, ExitDuration } from "../constants/toast.constants";

export function useToastLifecycle(props: ToastRootProps, duration: number) {
  const { id, open = true } = props;
  const { store } = useOverlayContext();

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
  const lifecycleProps = useMemo(() => ({ ...props, open }), [props, open]);
  const lifecycle = useOverlayLifecycle(lifecycleProps, options);
  const close = useEventCallback(() => store.close(id));

  useTimer({
    enabled: lifecycle.status === "open" && open,
    duration,
    callback: close,
    pauseOnBackground: true,
  });

  useEffect(() => () => cancelAnimation(progress), [progress]);

  return useMemo(
    () => ({ ...lifecycle, progress, close }),
    [lifecycle, progress, close],
  );
}

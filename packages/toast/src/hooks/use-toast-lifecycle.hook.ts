import { useMemo } from "react";

import { useEventCallback, useTimer } from "@impulse-ui-native/core";
import {
  useOverlayContext,
  useOverlayLifecycle,
  useOverlayTiming,
} from "@impulse-ui-native/overlay";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ToastRootProps } from "../types";

export function useToastLifecycle(props: ToastRootProps, duration: number) {
  const { id, open = true } = props;
  const { store } = useOverlayContext();
  const tokens = useComponentsTokens().toast;
  const { options, progress } = useOverlayTiming(tokens);
  const lifecycle = useOverlayLifecycle({ ...props, open }, options);
  const close = useEventCallback(() => store.close(id));

  useTimer({
    enabled: lifecycle.status === "open" && open,
    duration,
    callback: close,
    pauseOnBackground: true,
  });

  return useMemo(
    () => ({ ...lifecycle, progress, close }),
    [lifecycle, progress, close],
  );
}

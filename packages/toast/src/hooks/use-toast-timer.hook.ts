import { useEffect } from "react";
import { AppState } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";

export function useToastTimer(
  active: boolean,
  duration: number,
  close: () => void,
) {
  const dismiss = useEventCallback(close);

  useEffect(() => {
    if (!active || !Number.isFinite(duration) || duration <= 0) {
      return;
    }

    let remaining = duration;
    let startedAt = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const pause = () => {
      if (timeout === undefined) {
        return;
      }

      clearTimeout(timeout);

      timeout = undefined;
      remaining = Math.max(0, remaining - (Date.now() - startedAt));
    };

    const resume = () => {
      if (timeout !== undefined) {
        return;
      }

      startedAt = Date.now();
      timeout = setTimeout(() => {
        timeout = undefined;

        dismiss();
      }, remaining);
    };

    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        resume();
      } else {
        pause();
      }
    });

    if (AppState.currentState === "active") {
      resume();
    }

    return () => {
      pause();
      subscription.remove();
    };
  }, [active, dismiss, duration]);
}

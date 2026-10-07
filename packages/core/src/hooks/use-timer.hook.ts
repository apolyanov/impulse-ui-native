import { useEffect } from "react";
import { AppState } from "react-native";

import type { UseTimerOptions } from "../types";
import { useEventCallback } from "./use-event-callback.hook";

export function useTimer({
  duration,
  callback,
  enabled = true,
  pauseOnBackground = false,
}: UseTimerOptions): void {
  const execute = useEventCallback(callback);

  useEffect(() => {
    if (!enabled || !Number.isFinite(duration) || duration <= 0) {
      return;
    }

    let remaining = duration;
    let startedAt = 0;
    let finished = false;
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
      if (finished || timeout !== undefined) {
        return;
      }

      startedAt = Date.now();
      timeout = setTimeout(() => {
        if (finished) {
          return;
        }

        finished = true;
        timeout = undefined;

        execute();
      }, remaining);
    };

    const subscription = pauseOnBackground
      ? AppState.addEventListener("change", (state) => {
          if (state === "active") {
            resume();
          } else {
            pause();
          }
        })
      : undefined;

    if (!pauseOnBackground || AppState.currentState === "active") {
      resume();
    }

    return () => {
      finished = true;

      pause();
      subscription?.remove();
    };
  }, [enabled, duration, pauseOnBackground, execute]);
}

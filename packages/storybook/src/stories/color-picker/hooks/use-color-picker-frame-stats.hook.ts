import type { FrameInfo } from "react-native-reanimated";
import { useCallback, useState } from "react";
import { useFrameCallback, useSharedValue } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { ColorPickerFrameStats } from "../types/color-picker-performance.types";
import {
  FrameReportInterval,
  InitialFrameStats,
  SlowFrameThreshold,
} from "../constants/color-picker-performance.constants";

export function useColorPickerFrameStats() {
  const [stats, setStats] = useState<ColorPickerFrameStats>(InitialFrameStats);
  const pending = useSharedValue<ColorPickerFrameStats>(InitialFrameStats);
  const report = useEventCallback((next: ColorPickerFrameStats) =>
    setStats(next),
  );
  const sampleFrame = useCallback(
    (frame: FrameInfo) => {
      "worklet";

      const interval = frame.timeSincePreviousFrame;

      if (interval === null) {
        return;
      }

      const previous = pending.get();
      const next = {
        frames: previous.frames + 1,
        elapsed: previous.elapsed + interval,
        worstInterval: Math.max(previous.worstInterval, interval),
        slowFrames:
          previous.slowFrames + (interval > SlowFrameThreshold ? 1 : 0),
      };

      if (next.elapsed >= FrameReportInterval) {
        pending.set(InitialFrameStats);

        scheduleOnRN(report, next);
      } else {
        pending.set(next);
      }
    },
    [pending, report],
  );

  useFrameCallback(sampleFrame);

  return stats;
}

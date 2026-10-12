import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { scheduleOnUI } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { ColorPickerMotion, HsvaColor } from "../types";
import { hsvaToRgba } from "../utils/color.utils";

export function useColorPickerMotion(
  hsva: HsvaColor,
  resetKey: number,
): ColorPickerMotion {
  const [completionRevision, setCompletionRevision] = useState(0);
  const previousRevision = useRef(completionRevision);
  const previousResetKey = useRef(resetKey);
  const color = useSharedValue(hsva);
  const active = useSharedValue(false);
  const rgba = useDerivedValue(() => hsvaToRgba(color.get()));
  const hue = useDerivedValue(() => color.get().h);

  const setHue = useCallback(
    (h: number) => {
      "worklet";

      active.set(true);
      color.set({ ...color.get(), h });
    },
    [active, color],
  );
  const setAlpha = useCallback(
    (a: number) => {
      "worklet";

      active.set(true);
      color.set({ ...color.get(), a });
    },
    [active, color],
  );
  const setSpectrum = useCallback(
    (s: number, v: number) => {
      "worklet";

      active.set(true);
      color.set({ ...color.get(), s, v });
    },
    [active, color],
  );
  const finish = useEventCallback(() => {
    setCompletionRevision((revision) => revision + 1);
  });
  const synchronize = useCallback(
    (next: HsvaColor, completed: boolean) => {
      "worklet";

      if (completed) {
        active.set(false);
      }

      if (!active.get()) {
        color.set(next);
      }
    },
    [active, color],
  );

  const motion = useMemo(
    () => ({ color, rgba, hue, setHue, setAlpha, setSpectrum, finish }),
    [color, finish, hue, rgba, setAlpha, setHue, setSpectrum],
  );

  useLayoutEffect(() => {
    const completed =
      previousRevision.current !== completionRevision ||
      previousResetKey.current !== resetKey;
    previousRevision.current = completionRevision;
    previousResetKey.current = resetKey;

    // Keep React snapshots from overwriting newer UI-thread drag colors.
    scheduleOnUI(synchronize, hsva, completed);
  }, [completionRevision, hsva, resetKey, synchronize]);

  return motion;
}

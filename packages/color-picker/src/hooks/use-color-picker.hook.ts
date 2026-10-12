import { useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import type {
  ColorChannel,
  ColorPickerContextData,
  ColorPickerDraft,
  ColorPickerRootProps,
  HsvaColor,
} from "../types";
import { FallbackColor } from "../constants/color.constants";
import {
  clampColorValue,
  hsvaToHex,
  hsvaToRgba,
  parseHexColor,
  rgbaToHex,
  rgbaToHsva,
} from "../utils/color.utils";
import { useColorPickerMotion } from "./use-color-picker-motion.hook";

export function useColorPicker({
  value,
  defaultValue,
  onChange,
  disabled = false,
  size = "medium",
  commitMode = "immediate",
}: ColorPickerRootProps): ColorPickerContextData {
  const theme = useTheme();
  const [draft, setDraft] = useState<ColorPickerDraft>();
  const [resetKey, setResetKey] = useState(0);
  const [interactionSnapshot, setInteractionSnapshot] = useState<HsvaColor>();
  const interactionActive = useRef(false);
  const [committed, setCommitted] = useControllableState<string>({
    prop: value,
    defaultProp: defaultValue ?? theme.colors.primary.value,
    onChange,
  });
  const base = useMemo(
    () =>
      rgbaToHex(
        parseHexColor(committed) ??
          parseHexColor(theme.colors.primary.value) ??
          FallbackColor,
      ),
    [committed, theme.colors.primary.value],
  );
  const hsva = useMemo(
    () =>
      interactionSnapshot ??
      (draft?.base === base && draft.commitMode === commitMode
        ? draft.hsva
        : rgbaToHsva(parseHexColor(base) ?? FallbackColor)),
    [base, draft, commitMode, interactionSnapshot],
  );
  const rgba = useMemo(() => hsvaToRgba(hsva), [hsva]);
  const currentValue = rgbaToHex(rgba);
  const hsvaRef = useRef(hsva);
  const visualMotion = useColorPickerMotion(hsva, resetKey);

  const update = useEventCallback((next: HsvaColor, fromGesture = false) => {
    const current = hsvaRef.current;

    if (
      disabled ||
      (next.h === current.h &&
        next.s === current.s &&
        next.v === current.v &&
        next.a === current.a)
    ) {
      return;
    }

    if (fromGesture && !interactionActive.current) {
      interactionActive.current = true;
      setInteractionSnapshot(current);
    }

    if (!fromGesture && interactionActive.current) {
      interactionActive.current = false;
      setInteractionSnapshot(undefined);
      visualMotion.finish();
    }

    hsvaRef.current = next;

    const nextValue = hsvaToHex(next);
    if (!fromGesture) {
      setDraft({
        commitMode,
        base: commitMode === "immediate" ? nextValue : base,
        hsva: next,
      });
    }

    if (commitMode === "immediate" && nextValue !== hsvaToHex(current)) {
      if (value !== undefined) {
        onChange?.(nextValue);
      } else {
        setCommitted(nextValue);
      }
    }
  });

  const finishGesture = useEventCallback(() => {
    const next = hsvaRef.current;
    interactionActive.current = false;
    setInteractionSnapshot(undefined);
    setDraft({
      commitMode,
      base: commitMode === "immediate" ? hsvaToHex(next) : base,
      hsva: next,
    });

    visualMotion.finish();
  });
  const setGestureHue = useEventCallback((h: number) =>
    update({ ...hsvaRef.current, h: clampColorValue(h, 0, 360) }, true),
  );
  const setGestureAlpha = useEventCallback((a: number) =>
    update({ ...hsvaRef.current, a: clampColorValue(a, 0, 1) }, true),
  );
  const setGestureSpectrum = useEventCallback((s: number, v: number) =>
    update(
      {
        ...hsvaRef.current,
        s: clampColorValue(s, 0, 1),
        v: clampColorValue(v, 0, 1),
      },
      true,
    ),
  );
  const gesture = useMemo(
    () => ({
      setHue: setGestureHue,
      setAlpha: setGestureAlpha,
      setSpectrum: setGestureSpectrum,
    }),
    [setGestureAlpha, setGestureHue, setGestureSpectrum],
  );
  const motion = useMemo(
    () => ({ ...visualMotion, finish: finishGesture }),
    [finishGesture, visualMotion],
  );

  const setColor = useEventCallback((next: string): boolean => {
    const parsed = parseHexColor(next);

    if (disabled || !parsed) {
      return false;
    }

    const nextHsva = rgbaToHsva(parsed);
    update({
      ...nextHsva,
      h: nextHsva.s === 0 ? hsvaRef.current.h : nextHsva.h,
    });

    return true;
  });
  const setHue = useEventCallback((hue: number) =>
    update({ ...hsvaRef.current, h: clampColorValue(hue, 0, 360) }),
  );
  const setAlpha = useEventCallback((alpha: number) =>
    update({ ...hsvaRef.current, a: clampColorValue(alpha, 0, 1) }),
  );
  const setSpectrum = useEventCallback(
    (saturation: number, brightness: number) =>
      update({
        ...hsvaRef.current,
        s: clampColorValue(saturation, 0, 1),
        v: clampColorValue(brightness, 0, 1),
      }),
  );
  const setChannel = useEventCallback(
    (channel: ColorChannel, channelValue: number) => {
      const next = rgbaToHsva({
        ...hsvaToRgba(hsvaRef.current),
        [channel]: Math.round(clampColorValue(channelValue, 0, 255)),
      });
      update({ ...next, h: next.s === 0 ? hsvaRef.current.h : next.h });
    },
  );
  const apply = useEventCallback(() => {
    if (disabled) {
      return;
    }

    const nextHsva = hsvaRef.current;
    const nextValue = hsvaToHex(nextHsva);
    interactionActive.current = false;
    setInteractionSnapshot(undefined);

    if (nextValue !== base) {
      setCommitted(nextValue);
    }

    setDraft({ base: nextValue, hsva: nextHsva, commitMode });
    setResetKey((key) => key + 1);
  });
  const cancel = useEventCallback(() => {
    if (disabled) {
      return;
    }

    interactionActive.current = false;
    setInteractionSnapshot(undefined);
    setDraft(undefined);
    setResetKey((key) => key + 1);
  });

  const context = useMemo(
    () => ({
      gesture,
      motion,
      resetKey,
      value: currentValue,
      rgba,
      hsva,
      disabled,
      size,
      commitMode,
      setColor,
      setHue,
      setAlpha,
      setSpectrum,
      setChannel,
      apply,
      cancel,
    }),
    [
      gesture,
      motion,
      resetKey,
      currentValue,
      rgba,
      hsva,
      disabled,
      size,
      commitMode,
      setColor,
      setHue,
      setAlpha,
      setSpectrum,
      setChannel,
      apply,
      cancel,
    ],
  );

  useLayoutEffect(() => {
    if (!interactionActive.current) {
      hsvaRef.current = hsva;
    }
  }, [hsva]);

  // Discard obsolete transient edits rather than restoring them if the caller
  // later returns to a previously selected color or commit mode.
  if (
    draft !== undefined &&
    (draft.base !== base || draft.commitMode !== commitMode)
  ) {
    setDraft(undefined);
  }

  return context;
}

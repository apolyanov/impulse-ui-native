import { useMemo, useState } from "react";

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
  const [committed, setCommitted] = useControllableState<string>({
    prop: value,
    defaultProp: defaultValue ?? theme.colors.primary.value,
    onChange,
  });
  const base = rgbaToHex(
    parseHexColor(committed) ??
      parseHexColor(theme.colors.primary.value) ??
      FallbackColor,
  );
  const hsva = useMemo(
    () =>
      draft?.base === base && draft.commitMode === commitMode
        ? draft.hsva
        : rgbaToHsva(parseHexColor(base) ?? FallbackColor),
    [base, draft, commitMode],
  );
  const rgba = useMemo(() => hsvaToRgba(hsva), [hsva]);
  const currentValue = rgbaToHex(rgba);

  const update = useEventCallback((next: HsvaColor) => {
    if (disabled) {
      return;
    }

    const nextValue = hsvaToHex(next);
    setDraft({
      commitMode,
      base: commitMode === "immediate" ? nextValue : base,
      hsva: next,
    });

    if (commitMode === "immediate" && nextValue !== base) {
      setCommitted(nextValue);
    }
  });

  const setColor = useEventCallback((next: string): boolean => {
    const parsed = parseHexColor(next);

    if (disabled || !parsed) {
      return false;
    }

    const nextHsva = rgbaToHsva(parsed);
    update({ ...nextHsva, h: nextHsva.s === 0 ? hsva.h : nextHsva.h });

    return true;
  });
  const setHue = useEventCallback((hue: number) =>
    update({ ...hsva, h: clampColorValue(hue, 0, 360) }),
  );
  const setAlpha = useEventCallback((alpha: number) =>
    update({ ...hsva, a: clampColorValue(alpha, 0, 1) }),
  );
  const setSpectrum = useEventCallback(
    (saturation: number, brightness: number) =>
      update({
        ...hsva,
        s: clampColorValue(saturation, 0, 1),
        v: clampColorValue(brightness, 0, 1),
      }),
  );
  const setChannel = useEventCallback(
    (channel: ColorChannel, channelValue: number) => {
      const next = rgbaToHsva({
        ...rgba,
        [channel]: Math.round(clampColorValue(channelValue, 0, 255)),
      });
      update({ ...next, h: next.s === 0 ? hsva.h : next.h });
    },
  );
  const apply = useEventCallback(() => {
    if (disabled) {
      return;
    }

    if (currentValue !== base) {
      setCommitted(currentValue);
    }
    setDraft({ base: currentValue, hsva, commitMode });
    setResetKey((key) => key + 1);
  });
  const cancel = useEventCallback(() => {
    if (disabled) {
      return;
    }

    setDraft(undefined);
    setResetKey((key) => key + 1);
  });

  const context = useMemo(
    () => ({
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

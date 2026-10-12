import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Input } from "@impulse-ui-native/input";

import type { ColorPickerAlphaInputProps } from "../types";
import { useColorInput } from "../hooks/use-color-input.hook";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { parseColorPercentage } from "../utils/color.utils";

export const ColorPickerAlphaInput = memo(function ColorPickerAlphaInput({
  label,
}: ColorPickerAlphaInputProps) {
  const { hsva, disabled, size, setAlpha, resetKey } = useColorPickerContext();
  const commit = useEventCallback((text: string): string | undefined => {
    const percentage = parseColorPercentage(text);

    if (percentage === undefined) {
      return undefined;
    }

    setAlpha(percentage / 100);

    return String(percentage);
  });
  const input = useColorInput({
    resetKey,
    value: String(Math.round(hsva.a * 100)),
    disabled,
    commit,
  });

  return (
    <Input
      label={label}
      size={size}
      disabled={disabled}
      keyboardType="number-pad"
      maxLength={3}
      value={input.text}
      onChangeText={input.onChangeText}
      onBlur={input.onCommit}
      onSubmitEditing={input.onCommit}
      error={input.invalid ? "Use 0-100" : undefined}
    />
  );
});

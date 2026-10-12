import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Input } from "@impulse-ui-native/input";

import type { ColorPickerChannelInputProps } from "../types";
import { useColorInput } from "../hooks/use-color-input.hook";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { parseColorChannel } from "../utils/color.utils";

export const ColorPickerChannelInput = memo(function ColorPickerChannelInput({
  channel,
  label,
}: ColorPickerChannelInputProps) {
  const { rgba, disabled, size, setChannel, resetKey } =
    useColorPickerContext();
  const commit = useEventCallback((text: string): string | undefined => {
    const number = parseColorChannel(text);

    if (number === undefined) {
      return undefined;
    }

    setChannel(channel, number);

    return String(number);
  });
  const input = useColorInput({
    resetKey,
    value: String(rgba[channel]),
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
      error={input.invalid ? "Use 0?255" : undefined}
    />
  );
});

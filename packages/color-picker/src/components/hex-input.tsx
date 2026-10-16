import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Input } from "@impulse-ui-native/input";

import type { ColorPickerHexInputProps } from "../types/color-input.types";
import { useColorInput } from "../hooks/use-color-input.hook";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { parseHexColor, rgbaToHex } from "../utils/color.utils";

export const ColorPickerHexInput = memo(function ColorPickerHexInput({
  disabled: disabledProp,
  onBlur,
  onSubmitEditing,
  error,
  ...props
}: ColorPickerHexInputProps) {
  const {
    value,
    disabled: rootDisabled,
    size,
    setColor,
    resetKey,
  } = useColorPickerContext();
  const disabled = rootDisabled || disabledProp === true;
  const commit = useEventCallback((text: string): string | undefined => {
    const parsed = parseHexColor(text);

    if (!parsed || !setColor(text)) {
      return undefined;
    }

    return rgbaToHex(parsed);
  });
  const input = useColorInput({ value, disabled, commit, resetKey });
  const handleBlur = useEventCallback<
    NonNullable<ColorPickerHexInputProps["onBlur"]>
  >((event) => {
    input.onCommit();
    onBlur?.(event);
  });
  const handleSubmit = useEventCallback<
    NonNullable<ColorPickerHexInputProps["onSubmitEditing"]>
  >((event) => {
    input.onCommit();
    onSubmitEditing?.(event);
  });

  const inputError =
    error ?? (input.invalid ? "Enter a valid hex color" : undefined);

  return (
    <Input
      size={size}
      autoCapitalize="characters"
      autoCorrect={false}
      maxLength={9}
      {...props}
      disabled={disabled}
      value={input.text}
      onChangeText={input.onChangeText}
      onBlur={handleBlur}
      onSubmitEditing={handleSubmit}
      error={inputError}
    />
  );
});

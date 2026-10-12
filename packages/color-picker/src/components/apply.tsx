import type { GestureResponderEvent } from "react-native";
import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Button } from "@impulse-ui-native/primitives";

import type { ColorPickerActionProps } from "../types";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";

export const ColorPickerApply = memo(function ColorPickerApply({
  disabled,
  loading,
  onPress,
  ...props
}: ColorPickerActionProps) {
  const picker = useColorPickerContext();
  const blocked = picker.disabled || disabled === true || loading === true;
  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (blocked) {
      return;
    }

    picker.apply();
    onPress?.(event);
  });

  return (
    <Button
      size={picker.size}
      {...props}
      loading={loading}
      disabled={blocked}
      onPress={handlePress}
    />
  );
});

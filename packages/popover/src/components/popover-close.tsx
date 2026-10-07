import type { GestureResponderEvent } from "react-native";
import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverCloseProps } from "../types";
import { usePopoverContext } from "../hooks/use-popover-context.hook";

export const PopoverClose = memo(function PopoverClose({
  disabled,
  loading,
  onPress,
  ...props
}: PopoverCloseProps) {
  const context = usePopoverContext();
  const tokens = useComponentsTokens().popover;
  const blocked = context.disabled || disabled === true || loading === true;

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (blocked) {
      return;
    }

    context.setOpen(false);

    onPress?.(event);
  });

  return (
    <Pressable
      minWidth={tokens.actionMinSize}
      minHeight={tokens.actionMinSize}
      hitSlop={tokens.gap}
      {...props}
      disabled={blocked}
      onPress={handlePress}
    />
  );
});

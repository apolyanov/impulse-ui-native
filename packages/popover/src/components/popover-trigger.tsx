import type { GestureResponderEvent } from "react-native";
import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable } from "@impulse-ui-native/primitives";

import type { PopoverTriggerProps } from "../types";
import { usePopoverContext } from "../hooks/use-popover-context.hook";

export const PopoverTrigger = memo(function PopoverTrigger({
  trigger = "press",
  disabled,
  loading,
  onPress,
  onLongPress,
  ...props
}: PopoverTriggerProps) {
  const context = usePopoverContext();
  const blocked = context.disabled || disabled === true || loading === true;

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (blocked) {
      return;
    }

    if (trigger === "press") {
      context.setOpen(!context.open);
    }

    onPress?.(event);
  });

  const handleLongPress = useEventCallback((event: GestureResponderEvent) => {
    if (blocked) {
      return;
    }

    if (trigger === "longPress") {
      context.setOpen(true);
    }

    onLongPress?.(event);
  });

  return (
    <Pressable
      {...props}
      ref={context.anchorRef}
      collapsable={false}
      disabled={blocked}
      onPress={handlePress}
      onLongPress={handleLongPress}
    />
  );
});

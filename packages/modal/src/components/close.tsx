import type {
  GestureResponderEvent,
  PressableStateCallbackType,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable } from "@impulse-ui-native/primitives";

import type { ModalCloseProps } from "../types";
import { useModalContext } from "../hooks/use-modal-context.hook";

export const ModalClose = memo(function ModalClose({
  disabled,
  loading,
  style,
  onPress,
  ...props
}: ModalCloseProps) {
  const { close, interactive } = useModalContext();
  const blocked = disabled === true || loading === true || !interactive;

  const closeStyle = useCallback(
    (state: PressableStateCallbackType) => [
      styles.close,
      typeof style === "function" ? style(state) : style,
    ],
    [style],
  );

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (blocked) {
      return;
    }

    close();
    onPress?.(event);
  });

  return (
    <Pressable
      {...props}
      disabled={blocked}
      style={closeStyle}
      onPress={handlePress}
    />
  );
});

const styles = StyleSheet.create({
  close: {
    alignItems: "center",
    justifyContent: "center",
  },
});

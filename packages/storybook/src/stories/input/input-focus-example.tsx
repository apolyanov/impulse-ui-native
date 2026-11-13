import type { ComponentRef } from "react";
import type { TextInput } from "react-native";
import { memo, useRef } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Input } from "@impulse-ui-native/input";
import { Button, View } from "@impulse-ui-native/primitives";
import { useSpace } from "@impulse-ui-native/theme";

export const InputFocusExample = memo(function InputFocusExample() {
  const inputRef = useRef<ComponentRef<typeof TextInput>>(null);

  const space = useSpace();

  const focusInput = useEventCallback(() => {
    inputRef.current?.focus();
  });

  return (
    <View gap={space.md}>
      <Input
        ref={inputRef}
        label="Email"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        error="Enter your email address."
      />
      <Button onPress={focusInput}>Focus email</Button>
    </View>
  );
});

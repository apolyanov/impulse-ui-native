import { memo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useColors, useRadii, useSpace } from "@impulse-ui-native/theme";

export const TabsPanelExample = memo(function TabsPanelExample({
  title,
}: {
  title: string;
}) {
  const [count, setCount] = useState(0);
  const colors = useColors();
  const radii = useRadii();
  const space = useSpace();

  const increment = useEventCallback(() => setCount((current) => current + 1));

  return (
    <View
      backgroundColor={colors.surface.secondary.value}
      borderColor={colors.border.subtle.value}
      borderWidth={1}
      borderRadius={radii.lg}
      padding={space.msm}
      gap={space.sm}
    >
      <Typography.Title4>{title}</Typography.Title4>
      <View flexDirection="row" justifyContent="space-between" gap={space.sm}>
        <Typography.Master>Status</Typography.Master>
        <Typography.Master>In progress</Typography.Master>
      </View>
      <View flexDirection="row" justifyContent="space-between" gap={space.sm}>
        <Typography.Master>Owner</Typography.Master>
        <Typography.Master>Design team</Typography.Master>
      </View>
      <Typography.Helper>
        Panel count: {count}. Switching tabs resets this state.
      </Typography.Helper>
      <Button onPress={increment}>Increment</Button>
    </View>
  );
});

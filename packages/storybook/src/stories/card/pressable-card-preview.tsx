import { memo, useState } from "react";

import { Card } from "@impulse-ui-native/card";
import { useEventCallback } from "@impulse-ui-native/core";
import { Typography } from "@impulse-ui-native/primitives";

export const PressableCardPreview = memo(function PressableCardPreview({
  disabled = false,
}: {
  disabled?: boolean;
}) {
  const [presses, setPresses] = useState(0);

  const handlePress = useEventCallback(() =>
    setPresses((current) => Number(current) + 1),
  );

  return (
    <Card.Pressable
      width="100%"
      maxWidth={360}
      disabled={disabled}
      onPress={handlePress}
    >
      <Card.Header>
        <Typography.Title4>
          {disabled ? "Archived report" : "Activity summary"}
        </Typography.Title4>
        <Typography.Helper>Pressed {presses} times</Typography.Helper>
      </Card.Header>
      <Card.Content>
        <Typography.Body>
          {disabled
            ? "This action is unavailable. Presses should remain at zero."
            : "Press anywhere on this surface to activate its single action."}
        </Typography.Body>
      </Card.Content>
    </Card.Pressable>
  );
});

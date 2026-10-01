import { memo, useCallback, useMemo, useState } from "react";

import { Divider, List, Typography, View } from "@impulse-ui-native/primitives";
import { useColors } from "@impulse-ui-native/theme";

export const ListExample = memo(function ListExample() {
  const colors = useColors();
  const [selected, setSelected] = useState(false);
  const selectionStyle = useMemo(
    () => (selected ? { backgroundColor: colors.secondary.value } : undefined),
    [selected, colors.secondary.value],
  );
  const handlePress = useCallback(() => setSelected((value) => !value), []);
  return (
    <View width="100%" maxWidth={420} gap="sm">
      <List.Root>
        <List.Item>
          <List.Leading>
            <Typography.Title6>AB</Typography.Title6>
          </List.Leading>
          <List.Content>
            <Typography.Title6>Account</Typography.Title6>
            <Typography.BodySmall>
              Personal details and preferences
            </Typography.BodySmall>
          </List.Content>
          <List.Trailing>
            <Typography.Body>?</Typography.Body>
          </List.Trailing>
        </List.Item>
        <Divider inset="both" />
        <List.Pressable onPress={handlePress} style={selectionStyle}>
          <List.Content>
            <Typography.Title6>Work</Typography.Title6>
            <Typography.BodySmall>
              Press to toggle the application-owned selection
            </Typography.BodySmall>
          </List.Content>
          <List.Trailing>
            <Typography.Body>{selected ? "?" : "?"}</Typography.Body>
          </List.Trailing>
        </List.Pressable>
        <Divider />
        <List.Pressable disabled onPress={handlePress}>
          <List.Content>
            <Typography.Title6>Archived workspace</Typography.Title6>
            <Typography.BodySmall>
              This action is unavailable
            </Typography.BodySmall>
          </List.Content>
        </List.Pressable>
      </List.Root>
      <List.Item>
        <List.Content>
          <Typography.Body>Standalone row without a surface</Typography.Body>
        </List.Content>
      </List.Item>
    </View>
  );
});

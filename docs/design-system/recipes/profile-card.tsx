import { Card } from "@impulse-ui-native/card";
import { Icon } from "@impulse-ui-native/icon";
import { IconView } from "@impulse-ui-native/icon-view";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import {
  Avatar,
  Badge,
  Divider,
  Tag,
  Typography,
  View,
} from "@impulse-ui-native/primitives";

export function ProfileCardRecipe() {
  return (
    <Card.Root>
      <Card.Header>
        <View flexDirection="row" gap={12} alignItems="center">
          <Avatar initials="AL" tone="neutral" />
          <Typography.Title5>Alex Lee</Typography.Title5>
          <Badge tone="success">Active</Badge>
        </View>
      </Card.Header>
      <Card.Content>
        <Typography.Body>
          Product designer working across the mobile experience.
        </Typography.Body>
        <View flexDirection="row" gap={8} alignItems="center">
          <IconView icon={CheckIcon} variant="soft" tone="primary" />
          <Tag label="Design" variant="soft" tone="primary" />
          <Icon icon={CheckIcon} variant="bold" />
        </View>
      </Card.Content>
      <Divider />
      <Card.Footer>
        <Typography.Caption>Member since 2024</Typography.Caption>
      </Card.Footer>
    </Card.Root>
  );
}

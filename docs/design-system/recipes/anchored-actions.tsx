import { Popover, Tooltip } from "@impulse-ui-native/popover";
import { Typography, View } from "@impulse-ui-native/primitives";

export function AnchoredActionsRecipe() {
  return (
    <View gap={16}>
      <Popover.Root>
        <Popover.Trigger>
          <Typography.Body>Project actions</Typography.Body>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Title>Project actions</Popover.Title>
          <Popover.Description>
            Choose an action for this workspace.
          </Popover.Description>
          <Popover.Close>
            <Typography.Body>Close menu</Typography.Body>
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
      <Tooltip content="Only workspace members can see this project.">
        <Typography.Body>Long press for visibility details</Typography.Body>
      </Tooltip>
    </View>
  );
}

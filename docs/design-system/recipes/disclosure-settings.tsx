import { Accordion } from "@impulse-ui-native/accordion";
import { Icon } from "@impulse-ui-native/icon";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { Typography, View } from "@impulse-ui-native/primitives";
import { Switch } from "@impulse-ui-native/switch";

export function DisclosureSettingsRecipe() {
  return (
    <Accordion.Root type="single" collapsible defaultValue="privacy">
      <Accordion.Item value="privacy">
        <Accordion.Trigger>
          <Typography.Body>Privacy</Typography.Body>
          <Accordion.Indicator>
            <Icon icon={CaretDownIcon} />
          </Accordion.Indicator>
        </Accordion.Trigger>
        <Accordion.Content>
          <View flexDirection="row" gap={12} alignItems="center">
            <Typography.Body>Share activity</Typography.Body>
            <Switch defaultChecked />
          </View>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="billing">
        <Accordion.Trigger>Billing</Accordion.Trigger>
        <Accordion.Content>
          <Typography.Body>Your current plan is Personal.</Typography.Body>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

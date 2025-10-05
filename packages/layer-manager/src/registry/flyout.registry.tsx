import { uuid } from "@impulse-ui-native/core";
import { EchoInstance } from "@impulse-ui-native/echo";
import { Flyout } from "@impulse-ui-native/flyout";
import { BaseRegistrationProps } from "@impulse-ui-native/layer-manager-types";

export function registerFlyout<Props extends object = {}>(
  props: BaseRegistrationProps<Props>
) {
  return {
    open(openProps: Props) {
      EchoInstance.emit("addLayer", {
        id: uuid(),
        props: openProps,
        registrationProps: props,
        Component: Flyout,
      });
    },
  };
}

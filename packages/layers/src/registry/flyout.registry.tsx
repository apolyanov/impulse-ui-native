import { uuid } from "@impulse-ui-native/core";
import { EchoInstance } from "@impulse-ui-native/echo";
import { Flyout } from "@impulse-ui-native/flyout";
import { BaseRegistrationProps } from "@impulse-ui-native/types";

type OpenFunction<Props extends object> = [Props] extends [never]
  ? () => void
  : keyof Props extends never
    ? () => void
    : (props: Props) => void;

export function registerFlyout<Props extends object = never>(
  registrationProps: BaseRegistrationProps<Props>,
) {
  const id = registrationProps.unique
    ? registrationProps.id
    : `${registrationProps.id}-${uuid()}`;

  const open = ((props?: Props) => {
    EchoInstance.emit("addLayer", {
      id,
      props: props ?? {},
      registrationProps,
      Content: Flyout,
    });
  }) as OpenFunction<Props>;

  return {
    open,
    close() {
      EchoInstance.emit("removeLayer", {
        id,
      });
    },
  };
}

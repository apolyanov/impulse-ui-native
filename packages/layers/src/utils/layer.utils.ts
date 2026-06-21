import { RegistrationTitle } from "@impulse-ui-native/types";

export function resolveTitle<Props extends object>(
  props: Props,
  title?: RegistrationTitle<Props>,
) {
  if (typeof title === "function") {
    return title(props);
  }

  return title;
}

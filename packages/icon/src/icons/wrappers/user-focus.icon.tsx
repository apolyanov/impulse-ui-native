import { createIcon } from "../../hocs/create-icon.hoc";
import { UserFocusBoldIcon } from "../bold/user-focus-bold.icon";
import { UserFocusDuotoneIcon } from "../duotone/user-focus-duotone.icon";
import { UserFocusFillIcon } from "../fill/user-focus-fill.icon";
import { UserFocusLightIcon } from "../light/user-focus-light.icon";
import { UserFocusRegularIcon } from "../regular/user-focus-regular.icon";
import { UserFocusThinIcon } from "../thin/user-focus-thin.icon";

export const UserFocusIcon = createIcon("UserFocus", {
  bold: UserFocusBoldIcon,
  duotone: UserFocusDuotoneIcon,
  fill: UserFocusFillIcon,
  light: UserFocusLightIcon,
  regular: UserFocusRegularIcon,
  thin: UserFocusThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { UserSwitchBoldIcon } from "../bold/user-switch-bold.icon";
import { UserSwitchDuotoneIcon } from "../duotone/user-switch-duotone.icon";
import { UserSwitchFillIcon } from "../fill/user-switch-fill.icon";
import { UserSwitchLightIcon } from "../light/user-switch-light.icon";
import { UserSwitchRegularIcon } from "../regular/user-switch-regular.icon";
import { UserSwitchThinIcon } from "../thin/user-switch-thin.icon";

export const UserSwitchIcon = createIcon("UserSwitch", {
  bold: UserSwitchBoldIcon,
  duotone: UserSwitchDuotoneIcon,
  fill: UserSwitchFillIcon,
  light: UserSwitchLightIcon,
  regular: UserSwitchRegularIcon,
  thin: UserSwitchThinIcon,
});

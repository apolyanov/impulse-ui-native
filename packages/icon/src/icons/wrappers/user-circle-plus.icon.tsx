import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCirclePlusBoldIcon } from "../bold/user-circle-plus-bold.icon";
import { UserCirclePlusDuotoneIcon } from "../duotone/user-circle-plus-duotone.icon";
import { UserCirclePlusFillIcon } from "../fill/user-circle-plus-fill.icon";
import { UserCirclePlusLightIcon } from "../light/user-circle-plus-light.icon";
import { UserCirclePlusRegularIcon } from "../regular/user-circle-plus-regular.icon";
import { UserCirclePlusThinIcon } from "../thin/user-circle-plus-thin.icon";

export const UserCirclePlusIcon = createIcon("UserCirclePlus", {
  bold: UserCirclePlusBoldIcon,
  duotone: UserCirclePlusDuotoneIcon,
  fill: UserCirclePlusFillIcon,
  light: UserCirclePlusLightIcon,
  regular: UserCirclePlusRegularIcon,
  thin: UserCirclePlusThinIcon,
});

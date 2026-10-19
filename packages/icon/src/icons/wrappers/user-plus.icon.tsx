import { createIcon } from "../../hocs/create-icon.hoc";
import { UserPlusBoldIcon } from "../bold/user-plus-bold.icon";
import { UserPlusDuotoneIcon } from "../duotone/user-plus-duotone.icon";
import { UserPlusFillIcon } from "../fill/user-plus-fill.icon";
import { UserPlusLightIcon } from "../light/user-plus-light.icon";
import { UserPlusRegularIcon } from "../regular/user-plus-regular.icon";
import { UserPlusThinIcon } from "../thin/user-plus-thin.icon";

export const UserPlusIcon = createIcon("UserPlus", {
  bold: UserPlusBoldIcon,
  duotone: UserPlusDuotoneIcon,
  fill: UserPlusFillIcon,
  light: UserPlusLightIcon,
  regular: UserPlusRegularIcon,
  thin: UserPlusThinIcon,
});

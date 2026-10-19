import { createIcon } from "../../hocs/create-icon.hoc";
import { UsersBoldIcon } from "../bold/users-bold.icon";
import { UsersDuotoneIcon } from "../duotone/users-duotone.icon";
import { UsersFillIcon } from "../fill/users-fill.icon";
import { UsersLightIcon } from "../light/users-light.icon";
import { UsersRegularIcon } from "../regular/users-regular.icon";
import { UsersThinIcon } from "../thin/users-thin.icon";

export const UsersIcon = createIcon("Users", {
  bold: UsersBoldIcon,
  duotone: UsersDuotoneIcon,
  fill: UsersFillIcon,
  light: UsersLightIcon,
  regular: UsersRegularIcon,
  thin: UsersThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { UserBoldIcon } from "../bold/user-bold.icon";
import { UserDuotoneIcon } from "../duotone/user-duotone.icon";
import { UserFillIcon } from "../fill/user-fill.icon";
import { UserLightIcon } from "../light/user-light.icon";
import { UserRegularIcon } from "../regular/user-regular.icon";
import { UserThinIcon } from "../thin/user-thin.icon";

export const UserIcon = createIcon("User", {
  bold: UserBoldIcon,
  duotone: UserDuotoneIcon,
  fill: UserFillIcon,
  light: UserLightIcon,
  regular: UserRegularIcon,
  thin: UserThinIcon,
});

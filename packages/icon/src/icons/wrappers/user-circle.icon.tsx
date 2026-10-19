import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCircleBoldIcon } from "../bold/user-circle-bold.icon";
import { UserCircleDuotoneIcon } from "../duotone/user-circle-duotone.icon";
import { UserCircleFillIcon } from "../fill/user-circle-fill.icon";
import { UserCircleLightIcon } from "../light/user-circle-light.icon";
import { UserCircleRegularIcon } from "../regular/user-circle-regular.icon";
import { UserCircleThinIcon } from "../thin/user-circle-thin.icon";

export const UserCircleIcon = createIcon("UserCircle", {
  bold: UserCircleBoldIcon,
  duotone: UserCircleDuotoneIcon,
  fill: UserCircleFillIcon,
  light: UserCircleLightIcon,
  regular: UserCircleRegularIcon,
  thin: UserCircleThinIcon,
});

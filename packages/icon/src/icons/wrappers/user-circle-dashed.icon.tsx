import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCircleDashedBoldIcon } from "../bold/user-circle-dashed-bold.icon";
import { UserCircleDashedDuotoneIcon } from "../duotone/user-circle-dashed-duotone.icon";
import { UserCircleDashedFillIcon } from "../fill/user-circle-dashed-fill.icon";
import { UserCircleDashedLightIcon } from "../light/user-circle-dashed-light.icon";
import { UserCircleDashedRegularIcon } from "../regular/user-circle-dashed-regular.icon";
import { UserCircleDashedThinIcon } from "../thin/user-circle-dashed-thin.icon";

export const UserCircleDashedIcon = createIcon("UserCircleDashed", {
  bold: UserCircleDashedBoldIcon,
  duotone: UserCircleDashedDuotoneIcon,
  fill: UserCircleDashedFillIcon,
  light: UserCircleDashedLightIcon,
  regular: UserCircleDashedRegularIcon,
  thin: UserCircleDashedThinIcon,
});

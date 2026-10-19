import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCircleGearBoldIcon } from "../bold/user-circle-gear-bold.icon";
import { UserCircleGearDuotoneIcon } from "../duotone/user-circle-gear-duotone.icon";
import { UserCircleGearFillIcon } from "../fill/user-circle-gear-fill.icon";
import { UserCircleGearLightIcon } from "../light/user-circle-gear-light.icon";
import { UserCircleGearRegularIcon } from "../regular/user-circle-gear-regular.icon";
import { UserCircleGearThinIcon } from "../thin/user-circle-gear-thin.icon";

export const UserCircleGearIcon = createIcon("UserCircleGear", {
  bold: UserCircleGearBoldIcon,
  duotone: UserCircleGearDuotoneIcon,
  fill: UserCircleGearFillIcon,
  light: UserCircleGearLightIcon,
  regular: UserCircleGearRegularIcon,
  thin: UserCircleGearThinIcon,
});

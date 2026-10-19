import { createIcon } from "../../hocs/create-icon.hoc";
import { UsersThreeBoldIcon } from "../bold/users-three-bold.icon";
import { UsersThreeDuotoneIcon } from "../duotone/users-three-duotone.icon";
import { UsersThreeFillIcon } from "../fill/users-three-fill.icon";
import { UsersThreeLightIcon } from "../light/users-three-light.icon";
import { UsersThreeRegularIcon } from "../regular/users-three-regular.icon";
import { UsersThreeThinIcon } from "../thin/users-three-thin.icon";

export const UsersThreeIcon = createIcon("UsersThree", {
  bold: UsersThreeBoldIcon,
  duotone: UsersThreeDuotoneIcon,
  fill: UsersThreeFillIcon,
  light: UsersThreeLightIcon,
  regular: UsersThreeRegularIcon,
  thin: UsersThreeThinIcon,
});

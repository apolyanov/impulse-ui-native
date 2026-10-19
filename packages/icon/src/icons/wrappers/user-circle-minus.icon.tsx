import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCircleMinusBoldIcon } from "../bold/user-circle-minus-bold.icon";
import { UserCircleMinusDuotoneIcon } from "../duotone/user-circle-minus-duotone.icon";
import { UserCircleMinusFillIcon } from "../fill/user-circle-minus-fill.icon";
import { UserCircleMinusLightIcon } from "../light/user-circle-minus-light.icon";
import { UserCircleMinusRegularIcon } from "../regular/user-circle-minus-regular.icon";
import { UserCircleMinusThinIcon } from "../thin/user-circle-minus-thin.icon";

export const UserCircleMinusIcon = createIcon("UserCircleMinus", {
  bold: UserCircleMinusBoldIcon,
  duotone: UserCircleMinusDuotoneIcon,
  fill: UserCircleMinusFillIcon,
  light: UserCircleMinusLightIcon,
  regular: UserCircleMinusRegularIcon,
  thin: UserCircleMinusThinIcon,
});

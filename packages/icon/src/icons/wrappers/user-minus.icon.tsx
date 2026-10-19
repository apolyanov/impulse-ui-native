import { createIcon } from "../../hocs/create-icon.hoc";
import { UserMinusBoldIcon } from "../bold/user-minus-bold.icon";
import { UserMinusDuotoneIcon } from "../duotone/user-minus-duotone.icon";
import { UserMinusFillIcon } from "../fill/user-minus-fill.icon";
import { UserMinusLightIcon } from "../light/user-minus-light.icon";
import { UserMinusRegularIcon } from "../regular/user-minus-regular.icon";
import { UserMinusThinIcon } from "../thin/user-minus-thin.icon";

export const UserMinusIcon = createIcon("UserMinus", {
  bold: UserMinusBoldIcon,
  duotone: UserMinusDuotoneIcon,
  fill: UserMinusFillIcon,
  light: UserMinusLightIcon,
  regular: UserMinusRegularIcon,
  thin: UserMinusThinIcon,
});

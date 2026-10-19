import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCircleCheckBoldIcon } from "../bold/user-circle-check-bold.icon";
import { UserCircleCheckDuotoneIcon } from "../duotone/user-circle-check-duotone.icon";
import { UserCircleCheckFillIcon } from "../fill/user-circle-check-fill.icon";
import { UserCircleCheckLightIcon } from "../light/user-circle-check-light.icon";
import { UserCircleCheckRegularIcon } from "../regular/user-circle-check-regular.icon";
import { UserCircleCheckThinIcon } from "../thin/user-circle-check-thin.icon";

export const UserCircleCheckIcon = createIcon("UserCircleCheck", {
  bold: UserCircleCheckBoldIcon,
  duotone: UserCircleCheckDuotoneIcon,
  fill: UserCircleCheckFillIcon,
  light: UserCircleCheckLightIcon,
  regular: UserCircleCheckRegularIcon,
  thin: UserCircleCheckThinIcon,
});

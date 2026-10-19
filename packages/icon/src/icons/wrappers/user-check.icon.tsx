import { createIcon } from "../../hocs/create-icon.hoc";
import { UserCheckBoldIcon } from "../bold/user-check-bold.icon";
import { UserCheckDuotoneIcon } from "../duotone/user-check-duotone.icon";
import { UserCheckFillIcon } from "../fill/user-check-fill.icon";
import { UserCheckLightIcon } from "../light/user-check-light.icon";
import { UserCheckRegularIcon } from "../regular/user-check-regular.icon";
import { UserCheckThinIcon } from "../thin/user-check-thin.icon";

export const UserCheckIcon = createIcon("UserCheck", {
  bold: UserCheckBoldIcon,
  duotone: UserCheckDuotoneIcon,
  fill: UserCheckFillIcon,
  light: UserCheckLightIcon,
  regular: UserCheckRegularIcon,
  thin: UserCheckThinIcon,
});

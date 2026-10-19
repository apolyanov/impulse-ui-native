import { createIcon } from "../../hocs/create-icon.hoc";
import { ClockUserBoldIcon } from "../bold/clock-user-bold.icon";
import { ClockUserDuotoneIcon } from "../duotone/clock-user-duotone.icon";
import { ClockUserFillIcon } from "../fill/clock-user-fill.icon";
import { ClockUserLightIcon } from "../light/clock-user-light.icon";
import { ClockUserRegularIcon } from "../regular/clock-user-regular.icon";
import { ClockUserThinIcon } from "../thin/clock-user-thin.icon";

export const ClockUserIcon = createIcon("ClockUser", {
  bold: ClockUserBoldIcon,
  duotone: ClockUserDuotoneIcon,
  fill: ClockUserFillIcon,
  light: ClockUserLightIcon,
  regular: ClockUserRegularIcon,
  thin: ClockUserThinIcon,
});

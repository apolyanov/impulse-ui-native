import { createIcon } from "../../hocs/create-icon.hoc";
import { CallBellBoldIcon } from "../bold/call-bell-bold.icon";
import { CallBellDuotoneIcon } from "../duotone/call-bell-duotone.icon";
import { CallBellFillIcon } from "../fill/call-bell-fill.icon";
import { CallBellLightIcon } from "../light/call-bell-light.icon";
import { CallBellRegularIcon } from "../regular/call-bell-regular.icon";
import { CallBellThinIcon } from "../thin/call-bell-thin.icon";

export const CallBellIcon = createIcon("CallBell", {
  bold: CallBellBoldIcon,
  duotone: CallBellDuotoneIcon,
  fill: CallBellFillIcon,
  light: CallBellLightIcon,
  regular: CallBellRegularIcon,
  thin: CallBellThinIcon,
});

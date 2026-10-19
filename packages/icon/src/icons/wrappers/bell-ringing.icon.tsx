import { createIcon } from "../../hocs/create-icon.hoc";
import { BellRingingBoldIcon } from "../bold/bell-ringing-bold.icon";
import { BellRingingDuotoneIcon } from "../duotone/bell-ringing-duotone.icon";
import { BellRingingFillIcon } from "../fill/bell-ringing-fill.icon";
import { BellRingingLightIcon } from "../light/bell-ringing-light.icon";
import { BellRingingRegularIcon } from "../regular/bell-ringing-regular.icon";
import { BellRingingThinIcon } from "../thin/bell-ringing-thin.icon";

export const BellRingingIcon = createIcon("BellRinging", {
  bold: BellRingingBoldIcon,
  duotone: BellRingingDuotoneIcon,
  fill: BellRingingFillIcon,
  light: BellRingingLightIcon,
  regular: BellRingingRegularIcon,
  thin: BellRingingThinIcon,
});

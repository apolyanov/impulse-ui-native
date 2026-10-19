import { createIcon } from "../../hocs/create-icon.hoc";
import { BellSimpleRingingBoldIcon } from "../bold/bell-simple-ringing-bold.icon";
import { BellSimpleRingingDuotoneIcon } from "../duotone/bell-simple-ringing-duotone.icon";
import { BellSimpleRingingFillIcon } from "../fill/bell-simple-ringing-fill.icon";
import { BellSimpleRingingLightIcon } from "../light/bell-simple-ringing-light.icon";
import { BellSimpleRingingRegularIcon } from "../regular/bell-simple-ringing-regular.icon";
import { BellSimpleRingingThinIcon } from "../thin/bell-simple-ringing-thin.icon";

export const BellSimpleRingingIcon = createIcon("BellSimpleRinging", {
  bold: BellSimpleRingingBoldIcon,
  duotone: BellSimpleRingingDuotoneIcon,
  fill: BellSimpleRingingFillIcon,
  light: BellSimpleRingingLightIcon,
  regular: BellSimpleRingingRegularIcon,
  thin: BellSimpleRingingThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneIncomingBoldIcon } from "../bold/phone-incoming-bold.icon";
import { PhoneIncomingDuotoneIcon } from "../duotone/phone-incoming-duotone.icon";
import { PhoneIncomingFillIcon } from "../fill/phone-incoming-fill.icon";
import { PhoneIncomingLightIcon } from "../light/phone-incoming-light.icon";
import { PhoneIncomingRegularIcon } from "../regular/phone-incoming-regular.icon";
import { PhoneIncomingThinIcon } from "../thin/phone-incoming-thin.icon";

export const PhoneIncomingIcon = createIcon("PhoneIncoming", {
  bold: PhoneIncomingBoldIcon,
  duotone: PhoneIncomingDuotoneIcon,
  fill: PhoneIncomingFillIcon,
  light: PhoneIncomingLightIcon,
  regular: PhoneIncomingRegularIcon,
  thin: PhoneIncomingThinIcon,
});

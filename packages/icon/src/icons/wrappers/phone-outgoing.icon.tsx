import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneOutgoingBoldIcon } from "../bold/phone-outgoing-bold.icon";
import { PhoneOutgoingDuotoneIcon } from "../duotone/phone-outgoing-duotone.icon";
import { PhoneOutgoingFillIcon } from "../fill/phone-outgoing-fill.icon";
import { PhoneOutgoingLightIcon } from "../light/phone-outgoing-light.icon";
import { PhoneOutgoingRegularIcon } from "../regular/phone-outgoing-regular.icon";
import { PhoneOutgoingThinIcon } from "../thin/phone-outgoing-thin.icon";

export const PhoneOutgoingIcon = createIcon("PhoneOutgoing", {
  bold: PhoneOutgoingBoldIcon,
  duotone: PhoneOutgoingDuotoneIcon,
  fill: PhoneOutgoingFillIcon,
  light: PhoneOutgoingLightIcon,
  regular: PhoneOutgoingRegularIcon,
  thin: PhoneOutgoingThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneCallBoldIcon } from "../bold/phone-call-bold.icon";
import { PhoneCallDuotoneIcon } from "../duotone/phone-call-duotone.icon";
import { PhoneCallFillIcon } from "../fill/phone-call-fill.icon";
import { PhoneCallLightIcon } from "../light/phone-call-light.icon";
import { PhoneCallRegularIcon } from "../regular/phone-call-regular.icon";
import { PhoneCallThinIcon } from "../thin/phone-call-thin.icon";

export const PhoneCallIcon = createIcon("PhoneCall", {
  bold: PhoneCallBoldIcon,
  duotone: PhoneCallDuotoneIcon,
  fill: PhoneCallFillIcon,
  light: PhoneCallLightIcon,
  regular: PhoneCallRegularIcon,
  thin: PhoneCallThinIcon,
});

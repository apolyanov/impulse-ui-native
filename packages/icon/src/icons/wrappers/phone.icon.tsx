import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneBoldIcon } from "../bold/phone-bold.icon";
import { PhoneDuotoneIcon } from "../duotone/phone-duotone.icon";
import { PhoneFillIcon } from "../fill/phone-fill.icon";
import { PhoneLightIcon } from "../light/phone-light.icon";
import { PhoneRegularIcon } from "../regular/phone-regular.icon";
import { PhoneThinIcon } from "../thin/phone-thin.icon";

export const PhoneIcon = createIcon("Phone", {
  bold: PhoneBoldIcon,
  duotone: PhoneDuotoneIcon,
  fill: PhoneFillIcon,
  light: PhoneLightIcon,
  regular: PhoneRegularIcon,
  thin: PhoneThinIcon,
});

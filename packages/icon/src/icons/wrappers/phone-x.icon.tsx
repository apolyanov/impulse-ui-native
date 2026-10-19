import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneXBoldIcon } from "../bold/phone-x-bold.icon";
import { PhoneXDuotoneIcon } from "../duotone/phone-x-duotone.icon";
import { PhoneXFillIcon } from "../fill/phone-x-fill.icon";
import { PhoneXLightIcon } from "../light/phone-x-light.icon";
import { PhoneXRegularIcon } from "../regular/phone-x-regular.icon";
import { PhoneXThinIcon } from "../thin/phone-x-thin.icon";

export const PhoneXIcon = createIcon("PhoneX", {
  bold: PhoneXBoldIcon,
  duotone: PhoneXDuotoneIcon,
  fill: PhoneXFillIcon,
  light: PhoneXLightIcon,
  regular: PhoneXRegularIcon,
  thin: PhoneXThinIcon,
});

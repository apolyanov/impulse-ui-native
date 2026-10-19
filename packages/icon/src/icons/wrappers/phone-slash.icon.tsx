import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneSlashBoldIcon } from "../bold/phone-slash-bold.icon";
import { PhoneSlashDuotoneIcon } from "../duotone/phone-slash-duotone.icon";
import { PhoneSlashFillIcon } from "../fill/phone-slash-fill.icon";
import { PhoneSlashLightIcon } from "../light/phone-slash-light.icon";
import { PhoneSlashRegularIcon } from "../regular/phone-slash-regular.icon";
import { PhoneSlashThinIcon } from "../thin/phone-slash-thin.icon";

export const PhoneSlashIcon = createIcon("PhoneSlash", {
  bold: PhoneSlashBoldIcon,
  duotone: PhoneSlashDuotoneIcon,
  fill: PhoneSlashFillIcon,
  light: PhoneSlashLightIcon,
  regular: PhoneSlashRegularIcon,
  thin: PhoneSlashThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneListBoldIcon } from "../bold/phone-list-bold.icon";
import { PhoneListDuotoneIcon } from "../duotone/phone-list-duotone.icon";
import { PhoneListFillIcon } from "../fill/phone-list-fill.icon";
import { PhoneListLightIcon } from "../light/phone-list-light.icon";
import { PhoneListRegularIcon } from "../regular/phone-list-regular.icon";
import { PhoneListThinIcon } from "../thin/phone-list-thin.icon";

export const PhoneListIcon = createIcon("PhoneList", {
  bold: PhoneListBoldIcon,
  duotone: PhoneListDuotoneIcon,
  fill: PhoneListFillIcon,
  light: PhoneListLightIcon,
  regular: PhoneListRegularIcon,
  thin: PhoneListThinIcon,
});

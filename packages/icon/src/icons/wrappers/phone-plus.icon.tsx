import { createIcon } from "../../hocs/create-icon.hoc";
import { PhonePlusBoldIcon } from "../bold/phone-plus-bold.icon";
import { PhonePlusDuotoneIcon } from "../duotone/phone-plus-duotone.icon";
import { PhonePlusFillIcon } from "../fill/phone-plus-fill.icon";
import { PhonePlusLightIcon } from "../light/phone-plus-light.icon";
import { PhonePlusRegularIcon } from "../regular/phone-plus-regular.icon";
import { PhonePlusThinIcon } from "../thin/phone-plus-thin.icon";

export const PhonePlusIcon = createIcon("PhonePlus", {
  bold: PhonePlusBoldIcon,
  duotone: PhonePlusDuotoneIcon,
  fill: PhonePlusFillIcon,
  light: PhonePlusLightIcon,
  regular: PhonePlusRegularIcon,
  thin: PhonePlusThinIcon,
});

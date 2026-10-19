import { createIcon } from "../../hocs/create-icon.hoc";
import { OnigiriBoldIcon } from "../bold/onigiri-bold.icon";
import { OnigiriDuotoneIcon } from "../duotone/onigiri-duotone.icon";
import { OnigiriFillIcon } from "../fill/onigiri-fill.icon";
import { OnigiriLightIcon } from "../light/onigiri-light.icon";
import { OnigiriRegularIcon } from "../regular/onigiri-regular.icon";
import { OnigiriThinIcon } from "../thin/onigiri-thin.icon";

export const OnigiriIcon = createIcon("Onigiri", {
  bold: OnigiriBoldIcon,
  duotone: OnigiriDuotoneIcon,
  fill: OnigiriFillIcon,
  light: OnigiriLightIcon,
  regular: OnigiriRegularIcon,
  thin: OnigiriThinIcon,
});

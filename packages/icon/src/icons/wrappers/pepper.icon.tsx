import { createIcon } from "../../hocs/create-icon.hoc";
import { PepperBoldIcon } from "../bold/pepper-bold.icon";
import { PepperDuotoneIcon } from "../duotone/pepper-duotone.icon";
import { PepperFillIcon } from "../fill/pepper-fill.icon";
import { PepperLightIcon } from "../light/pepper-light.icon";
import { PepperRegularIcon } from "../regular/pepper-regular.icon";
import { PepperThinIcon } from "../thin/pepper-thin.icon";

export const PepperIcon = createIcon("Pepper", {
  bold: PepperBoldIcon,
  duotone: PepperDuotoneIcon,
  fill: PepperFillIcon,
  light: PepperLightIcon,
  regular: PepperRegularIcon,
  thin: PepperThinIcon,
});

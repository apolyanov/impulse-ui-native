import { createIcon } from "../../hocs/create-icon.hoc";
import { GearBoldIcon } from "../bold/gear-bold.icon";
import { GearDuotoneIcon } from "../duotone/gear-duotone.icon";
import { GearFillIcon } from "../fill/gear-fill.icon";
import { GearLightIcon } from "../light/gear-light.icon";
import { GearRegularIcon } from "../regular/gear-regular.icon";
import { GearThinIcon } from "../thin/gear-thin.icon";

export const GearIcon = createIcon("Gear", {
  bold: GearBoldIcon,
  duotone: GearDuotoneIcon,
  fill: GearFillIcon,
  light: GearLightIcon,
  regular: GearRegularIcon,
  thin: GearThinIcon,
});

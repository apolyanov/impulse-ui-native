import { createIcon } from "../../hocs/create-icon.hoc";
import { GearSixBoldIcon } from "../bold/gear-six-bold.icon";
import { GearSixDuotoneIcon } from "../duotone/gear-six-duotone.icon";
import { GearSixFillIcon } from "../fill/gear-six-fill.icon";
import { GearSixLightIcon } from "../light/gear-six-light.icon";
import { GearSixRegularIcon } from "../regular/gear-six-regular.icon";
import { GearSixThinIcon } from "../thin/gear-six-thin.icon";

export const GearSixIcon = createIcon("GearSix", {
  bold: GearSixBoldIcon,
  duotone: GearSixDuotoneIcon,
  fill: GearSixFillIcon,
  light: GearSixLightIcon,
  regular: GearSixRegularIcon,
  thin: GearSixThinIcon,
});

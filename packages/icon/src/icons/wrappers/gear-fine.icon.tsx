import { createIcon } from "../../hocs/create-icon.hoc";
import { GearFineBoldIcon } from "../bold/gear-fine-bold.icon";
import { GearFineDuotoneIcon } from "../duotone/gear-fine-duotone.icon";
import { GearFineFillIcon } from "../fill/gear-fine-fill.icon";
import { GearFineLightIcon } from "../light/gear-fine-light.icon";
import { GearFineRegularIcon } from "../regular/gear-fine-regular.icon";
import { GearFineThinIcon } from "../thin/gear-fine-thin.icon";

export const GearFineIcon = createIcon("GearFine", {
  bold: GearFineBoldIcon,
  duotone: GearFineDuotoneIcon,
  fill: GearFineFillIcon,
  light: GearFineLightIcon,
  regular: GearFineRegularIcon,
  thin: GearFineThinIcon,
});

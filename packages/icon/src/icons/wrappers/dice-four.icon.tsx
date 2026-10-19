import { createIcon } from "../../hocs/create-icon.hoc";
import { DiceFourBoldIcon } from "../bold/dice-four-bold.icon";
import { DiceFourDuotoneIcon } from "../duotone/dice-four-duotone.icon";
import { DiceFourFillIcon } from "../fill/dice-four-fill.icon";
import { DiceFourLightIcon } from "../light/dice-four-light.icon";
import { DiceFourRegularIcon } from "../regular/dice-four-regular.icon";
import { DiceFourThinIcon } from "../thin/dice-four-thin.icon";

export const DiceFourIcon = createIcon("DiceFour", {
  bold: DiceFourBoldIcon,
  duotone: DiceFourDuotoneIcon,
  fill: DiceFourFillIcon,
  light: DiceFourLightIcon,
  regular: DiceFourRegularIcon,
  thin: DiceFourThinIcon,
});

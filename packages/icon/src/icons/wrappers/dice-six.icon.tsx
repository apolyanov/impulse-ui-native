import { createIcon } from "../../hocs/create-icon.hoc";
import { DiceSixBoldIcon } from "../bold/dice-six-bold.icon";
import { DiceSixDuotoneIcon } from "../duotone/dice-six-duotone.icon";
import { DiceSixFillIcon } from "../fill/dice-six-fill.icon";
import { DiceSixLightIcon } from "../light/dice-six-light.icon";
import { DiceSixRegularIcon } from "../regular/dice-six-regular.icon";
import { DiceSixThinIcon } from "../thin/dice-six-thin.icon";

export const DiceSixIcon = createIcon("DiceSix", {
  bold: DiceSixBoldIcon,
  duotone: DiceSixDuotoneIcon,
  fill: DiceSixFillIcon,
  light: DiceSixLightIcon,
  regular: DiceSixRegularIcon,
  thin: DiceSixThinIcon,
});

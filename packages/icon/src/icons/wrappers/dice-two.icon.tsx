import { createIcon } from "../../hocs/create-icon.hoc";
import { DiceTwoBoldIcon } from "../bold/dice-two-bold.icon";
import { DiceTwoDuotoneIcon } from "../duotone/dice-two-duotone.icon";
import { DiceTwoFillIcon } from "../fill/dice-two-fill.icon";
import { DiceTwoLightIcon } from "../light/dice-two-light.icon";
import { DiceTwoRegularIcon } from "../regular/dice-two-regular.icon";
import { DiceTwoThinIcon } from "../thin/dice-two-thin.icon";

export const DiceTwoIcon = createIcon("DiceTwo", {
  bold: DiceTwoBoldIcon,
  duotone: DiceTwoDuotoneIcon,
  fill: DiceTwoFillIcon,
  light: DiceTwoLightIcon,
  regular: DiceTwoRegularIcon,
  thin: DiceTwoThinIcon,
});

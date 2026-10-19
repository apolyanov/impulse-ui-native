import { createIcon } from "../../hocs/create-icon.hoc";
import { DiceFiveBoldIcon } from "../bold/dice-five-bold.icon";
import { DiceFiveDuotoneIcon } from "../duotone/dice-five-duotone.icon";
import { DiceFiveFillIcon } from "../fill/dice-five-fill.icon";
import { DiceFiveLightIcon } from "../light/dice-five-light.icon";
import { DiceFiveRegularIcon } from "../regular/dice-five-regular.icon";
import { DiceFiveThinIcon } from "../thin/dice-five-thin.icon";

export const DiceFiveIcon = createIcon("DiceFive", {
  bold: DiceFiveBoldIcon,
  duotone: DiceFiveDuotoneIcon,
  fill: DiceFiveFillIcon,
  light: DiceFiveLightIcon,
  regular: DiceFiveRegularIcon,
  thin: DiceFiveThinIcon,
});

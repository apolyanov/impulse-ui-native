import { createIcon } from "../../hocs/create-icon.hoc";
import { StackMinusBoldIcon } from "../bold/stack-minus-bold.icon";
import { StackMinusDuotoneIcon } from "../duotone/stack-minus-duotone.icon";
import { StackMinusFillIcon } from "../fill/stack-minus-fill.icon";
import { StackMinusLightIcon } from "../light/stack-minus-light.icon";
import { StackMinusRegularIcon } from "../regular/stack-minus-regular.icon";
import { StackMinusThinIcon } from "../thin/stack-minus-thin.icon";

export const StackMinusIcon = createIcon("StackMinus", {
  bold: StackMinusBoldIcon,
  duotone: StackMinusDuotoneIcon,
  fill: StackMinusFillIcon,
  light: StackMinusLightIcon,
  regular: StackMinusRegularIcon,
  thin: StackMinusThinIcon,
});

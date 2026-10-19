import { createIcon } from "../../hocs/create-icon.hoc";
import { StackPlusBoldIcon } from "../bold/stack-plus-bold.icon";
import { StackPlusDuotoneIcon } from "../duotone/stack-plus-duotone.icon";
import { StackPlusFillIcon } from "../fill/stack-plus-fill.icon";
import { StackPlusLightIcon } from "../light/stack-plus-light.icon";
import { StackPlusRegularIcon } from "../regular/stack-plus-regular.icon";
import { StackPlusThinIcon } from "../thin/stack-plus-thin.icon";

export const StackPlusIcon = createIcon("StackPlus", {
  bold: StackPlusBoldIcon,
  duotone: StackPlusDuotoneIcon,
  fill: StackPlusFillIcon,
  light: StackPlusLightIcon,
  regular: StackPlusRegularIcon,
  thin: StackPlusThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { StackBoldIcon } from "../bold/stack-bold.icon";
import { StackDuotoneIcon } from "../duotone/stack-duotone.icon";
import { StackFillIcon } from "../fill/stack-fill.icon";
import { StackLightIcon } from "../light/stack-light.icon";
import { StackRegularIcon } from "../regular/stack-regular.icon";
import { StackThinIcon } from "../thin/stack-thin.icon";

export const StackIcon = createIcon("Stack", {
  bold: StackBoldIcon,
  duotone: StackDuotoneIcon,
  fill: StackFillIcon,
  light: StackLightIcon,
  regular: StackRegularIcon,
  thin: StackThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { StackSimpleBoldIcon } from "../bold/stack-simple-bold.icon";
import { StackSimpleDuotoneIcon } from "../duotone/stack-simple-duotone.icon";
import { StackSimpleFillIcon } from "../fill/stack-simple-fill.icon";
import { StackSimpleLightIcon } from "../light/stack-simple-light.icon";
import { StackSimpleRegularIcon } from "../regular/stack-simple-regular.icon";
import { StackSimpleThinIcon } from "../thin/stack-simple-thin.icon";

export const StackSimpleIcon = createIcon("StackSimple", {
  bold: StackSimpleBoldIcon,
  duotone: StackSimpleDuotoneIcon,
  fill: StackSimpleFillIcon,
  light: StackSimpleLightIcon,
  regular: StackSimpleRegularIcon,
  thin: StackSimpleThinIcon,
});

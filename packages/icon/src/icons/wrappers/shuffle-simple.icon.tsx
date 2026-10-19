import { createIcon } from "../../hocs/create-icon.hoc";
import { ShuffleSimpleBoldIcon } from "../bold/shuffle-simple-bold.icon";
import { ShuffleSimpleDuotoneIcon } from "../duotone/shuffle-simple-duotone.icon";
import { ShuffleSimpleFillIcon } from "../fill/shuffle-simple-fill.icon";
import { ShuffleSimpleLightIcon } from "../light/shuffle-simple-light.icon";
import { ShuffleSimpleRegularIcon } from "../regular/shuffle-simple-regular.icon";
import { ShuffleSimpleThinIcon } from "../thin/shuffle-simple-thin.icon";

export const ShuffleSimpleIcon = createIcon("ShuffleSimple", {
  bold: ShuffleSimpleBoldIcon,
  duotone: ShuffleSimpleDuotoneIcon,
  fill: ShuffleSimpleFillIcon,
  light: ShuffleSimpleLightIcon,
  regular: ShuffleSimpleRegularIcon,
  thin: ShuffleSimpleThinIcon,
});

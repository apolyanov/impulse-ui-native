import { createIcon } from "../../hocs/create-icon.hoc";
import { LeafBoldIcon } from "../bold/leaf-bold.icon";
import { LeafDuotoneIcon } from "../duotone/leaf-duotone.icon";
import { LeafFillIcon } from "../fill/leaf-fill.icon";
import { LeafLightIcon } from "../light/leaf-light.icon";
import { LeafRegularIcon } from "../regular/leaf-regular.icon";
import { LeafThinIcon } from "../thin/leaf-thin.icon";

export const LeafIcon = createIcon("Leaf", {
  bold: LeafBoldIcon,
  duotone: LeafDuotoneIcon,
  fill: LeafFillIcon,
  light: LeafLightIcon,
  regular: LeafRegularIcon,
  thin: LeafThinIcon,
});

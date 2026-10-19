import { createIcon } from "../../hocs/create-icon.hoc";
import { TreeBoldIcon } from "../bold/tree-bold.icon";
import { TreeDuotoneIcon } from "../duotone/tree-duotone.icon";
import { TreeFillIcon } from "../fill/tree-fill.icon";
import { TreeLightIcon } from "../light/tree-light.icon";
import { TreeRegularIcon } from "../regular/tree-regular.icon";
import { TreeThinIcon } from "../thin/tree-thin.icon";

export const TreeIcon = createIcon("Tree", {
  bold: TreeBoldIcon,
  duotone: TreeDuotoneIcon,
  fill: TreeFillIcon,
  light: TreeLightIcon,
  regular: TreeRegularIcon,
  thin: TreeThinIcon,
});

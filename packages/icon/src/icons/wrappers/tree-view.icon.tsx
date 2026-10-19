import { createIcon } from "../../hocs/create-icon.hoc";
import { TreeViewBoldIcon } from "../bold/tree-view-bold.icon";
import { TreeViewDuotoneIcon } from "../duotone/tree-view-duotone.icon";
import { TreeViewFillIcon } from "../fill/tree-view-fill.icon";
import { TreeViewLightIcon } from "../light/tree-view-light.icon";
import { TreeViewRegularIcon } from "../regular/tree-view-regular.icon";
import { TreeViewThinIcon } from "../thin/tree-view-thin.icon";

export const TreeViewIcon = createIcon("TreeView", {
  bold: TreeViewBoldIcon,
  duotone: TreeViewDuotoneIcon,
  fill: TreeViewFillIcon,
  light: TreeViewLightIcon,
  regular: TreeViewRegularIcon,
  thin: TreeViewThinIcon,
});

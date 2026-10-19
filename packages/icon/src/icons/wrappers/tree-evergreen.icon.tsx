import { createIcon } from "../../hocs/create-icon.hoc";
import { TreeEvergreenBoldIcon } from "../bold/tree-evergreen-bold.icon";
import { TreeEvergreenDuotoneIcon } from "../duotone/tree-evergreen-duotone.icon";
import { TreeEvergreenFillIcon } from "../fill/tree-evergreen-fill.icon";
import { TreeEvergreenLightIcon } from "../light/tree-evergreen-light.icon";
import { TreeEvergreenRegularIcon } from "../regular/tree-evergreen-regular.icon";
import { TreeEvergreenThinIcon } from "../thin/tree-evergreen-thin.icon";

export const TreeEvergreenIcon = createIcon("TreeEvergreen", {
  bold: TreeEvergreenBoldIcon,
  duotone: TreeEvergreenDuotoneIcon,
  fill: TreeEvergreenFillIcon,
  light: TreeEvergreenLightIcon,
  regular: TreeEvergreenRegularIcon,
  thin: TreeEvergreenThinIcon,
});

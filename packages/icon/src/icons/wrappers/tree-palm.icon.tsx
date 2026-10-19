import { createIcon } from "../../hocs/create-icon.hoc";
import { TreePalmBoldIcon } from "../bold/tree-palm-bold.icon";
import { TreePalmDuotoneIcon } from "../duotone/tree-palm-duotone.icon";
import { TreePalmFillIcon } from "../fill/tree-palm-fill.icon";
import { TreePalmLightIcon } from "../light/tree-palm-light.icon";
import { TreePalmRegularIcon } from "../regular/tree-palm-regular.icon";
import { TreePalmThinIcon } from "../thin/tree-palm-thin.icon";

export const TreePalmIcon = createIcon("TreePalm", {
  bold: TreePalmBoldIcon,
  duotone: TreePalmDuotoneIcon,
  fill: TreePalmFillIcon,
  light: TreePalmLightIcon,
  regular: TreePalmRegularIcon,
  thin: TreePalmThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { TreeStructureBoldIcon } from "../bold/tree-structure-bold.icon";
import { TreeStructureDuotoneIcon } from "../duotone/tree-structure-duotone.icon";
import { TreeStructureFillIcon } from "../fill/tree-structure-fill.icon";
import { TreeStructureLightIcon } from "../light/tree-structure-light.icon";
import { TreeStructureRegularIcon } from "../regular/tree-structure-regular.icon";
import { TreeStructureThinIcon } from "../thin/tree-structure-thin.icon";

export const TreeStructureIcon = createIcon("TreeStructure", {
  bold: TreeStructureBoldIcon,
  duotone: TreeStructureDuotoneIcon,
  fill: TreeStructureFillIcon,
  light: TreeStructureLightIcon,
  regular: TreeStructureRegularIcon,
  thin: TreeStructureThinIcon,
});

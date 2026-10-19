import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderPlusBoldIcon } from "../bold/folder-plus-bold.icon";
import { FolderPlusDuotoneIcon } from "../duotone/folder-plus-duotone.icon";
import { FolderPlusFillIcon } from "../fill/folder-plus-fill.icon";
import { FolderPlusLightIcon } from "../light/folder-plus-light.icon";
import { FolderPlusRegularIcon } from "../regular/folder-plus-regular.icon";
import { FolderPlusThinIcon } from "../thin/folder-plus-thin.icon";

export const FolderPlusIcon = createIcon("FolderPlus", {
  bold: FolderPlusBoldIcon,
  duotone: FolderPlusDuotoneIcon,
  fill: FolderPlusFillIcon,
  light: FolderPlusLightIcon,
  regular: FolderPlusRegularIcon,
  thin: FolderPlusThinIcon,
});

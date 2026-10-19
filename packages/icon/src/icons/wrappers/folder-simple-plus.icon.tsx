import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimplePlusBoldIcon } from "../bold/folder-simple-plus-bold.icon";
import { FolderSimplePlusDuotoneIcon } from "../duotone/folder-simple-plus-duotone.icon";
import { FolderSimplePlusFillIcon } from "../fill/folder-simple-plus-fill.icon";
import { FolderSimplePlusLightIcon } from "../light/folder-simple-plus-light.icon";
import { FolderSimplePlusRegularIcon } from "../regular/folder-simple-plus-regular.icon";
import { FolderSimplePlusThinIcon } from "../thin/folder-simple-plus-thin.icon";

export const FolderSimplePlusIcon = createIcon("FolderSimplePlus", {
  bold: FolderSimplePlusBoldIcon,
  duotone: FolderSimplePlusDuotoneIcon,
  fill: FolderSimplePlusFillIcon,
  light: FolderSimplePlusLightIcon,
  regular: FolderSimplePlusRegularIcon,
  thin: FolderSimplePlusThinIcon,
});

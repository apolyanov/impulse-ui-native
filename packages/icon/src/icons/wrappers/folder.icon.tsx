import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderBoldIcon } from "../bold/folder-bold.icon";
import { FolderDuotoneIcon } from "../duotone/folder-duotone.icon";
import { FolderFillIcon } from "../fill/folder-fill.icon";
import { FolderLightIcon } from "../light/folder-light.icon";
import { FolderRegularIcon } from "../regular/folder-regular.icon";
import { FolderThinIcon } from "../thin/folder-thin.icon";

export const FolderIcon = createIcon("Folder", {
  bold: FolderBoldIcon,
  duotone: FolderDuotoneIcon,
  fill: FolderFillIcon,
  light: FolderLightIcon,
  regular: FolderRegularIcon,
  thin: FolderThinIcon,
});

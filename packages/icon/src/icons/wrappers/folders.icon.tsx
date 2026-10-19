import { createIcon } from "../../hocs/create-icon.hoc";
import { FoldersBoldIcon } from "../bold/folders-bold.icon";
import { FoldersDuotoneIcon } from "../duotone/folders-duotone.icon";
import { FoldersFillIcon } from "../fill/folders-fill.icon";
import { FoldersLightIcon } from "../light/folders-light.icon";
import { FoldersRegularIcon } from "../regular/folders-regular.icon";
import { FoldersThinIcon } from "../thin/folders-thin.icon";

export const FoldersIcon = createIcon("Folders", {
  bold: FoldersBoldIcon,
  duotone: FoldersDuotoneIcon,
  fill: FoldersFillIcon,
  light: FoldersLightIcon,
  regular: FoldersRegularIcon,
  thin: FoldersThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimpleBoldIcon } from "../bold/folder-simple-bold.icon";
import { FolderSimpleDuotoneIcon } from "../duotone/folder-simple-duotone.icon";
import { FolderSimpleFillIcon } from "../fill/folder-simple-fill.icon";
import { FolderSimpleLightIcon } from "../light/folder-simple-light.icon";
import { FolderSimpleRegularIcon } from "../regular/folder-simple-regular.icon";
import { FolderSimpleThinIcon } from "../thin/folder-simple-thin.icon";

export const FolderSimpleIcon = createIcon("FolderSimple", {
  bold: FolderSimpleBoldIcon,
  duotone: FolderSimpleDuotoneIcon,
  fill: FolderSimpleFillIcon,
  light: FolderSimpleLightIcon,
  regular: FolderSimpleRegularIcon,
  thin: FolderSimpleThinIcon,
});

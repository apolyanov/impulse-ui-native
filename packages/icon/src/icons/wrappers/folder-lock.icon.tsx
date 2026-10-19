import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderLockBoldIcon } from "../bold/folder-lock-bold.icon";
import { FolderLockDuotoneIcon } from "../duotone/folder-lock-duotone.icon";
import { FolderLockFillIcon } from "../fill/folder-lock-fill.icon";
import { FolderLockLightIcon } from "../light/folder-lock-light.icon";
import { FolderLockRegularIcon } from "../regular/folder-lock-regular.icon";
import { FolderLockThinIcon } from "../thin/folder-lock-thin.icon";

export const FolderLockIcon = createIcon("FolderLock", {
  bold: FolderLockBoldIcon,
  duotone: FolderLockDuotoneIcon,
  fill: FolderLockFillIcon,
  light: FolderLockLightIcon,
  regular: FolderLockRegularIcon,
  thin: FolderLockThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimpleLockBoldIcon } from "../bold/folder-simple-lock-bold.icon";
import { FolderSimpleLockDuotoneIcon } from "../duotone/folder-simple-lock-duotone.icon";
import { FolderSimpleLockFillIcon } from "../fill/folder-simple-lock-fill.icon";
import { FolderSimpleLockLightIcon } from "../light/folder-simple-lock-light.icon";
import { FolderSimpleLockRegularIcon } from "../regular/folder-simple-lock-regular.icon";
import { FolderSimpleLockThinIcon } from "../thin/folder-simple-lock-thin.icon";

export const FolderSimpleLockIcon = createIcon("FolderSimpleLock", {
  bold: FolderSimpleLockBoldIcon,
  duotone: FolderSimpleLockDuotoneIcon,
  fill: FolderSimpleLockFillIcon,
  light: FolderSimpleLockLightIcon,
  regular: FolderSimpleLockRegularIcon,
  thin: FolderSimpleLockThinIcon,
});

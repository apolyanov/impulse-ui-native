import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderOpenBoldIcon } from "../bold/folder-open-bold.icon";
import { FolderOpenDuotoneIcon } from "../duotone/folder-open-duotone.icon";
import { FolderOpenFillIcon } from "../fill/folder-open-fill.icon";
import { FolderOpenLightIcon } from "../light/folder-open-light.icon";
import { FolderOpenRegularIcon } from "../regular/folder-open-regular.icon";
import { FolderOpenThinIcon } from "../thin/folder-open-thin.icon";

export const FolderOpenIcon = createIcon("FolderOpen", {
  bold: FolderOpenBoldIcon,
  duotone: FolderOpenDuotoneIcon,
  fill: FolderOpenFillIcon,
  light: FolderOpenLightIcon,
  regular: FolderOpenRegularIcon,
  thin: FolderOpenThinIcon,
});

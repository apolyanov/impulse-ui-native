import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderDashedBoldIcon } from "../bold/folder-dashed-bold.icon";
import { FolderDashedDuotoneIcon } from "../duotone/folder-dashed-duotone.icon";
import { FolderDashedFillIcon } from "../fill/folder-dashed-fill.icon";
import { FolderDashedLightIcon } from "../light/folder-dashed-light.icon";
import { FolderDashedRegularIcon } from "../regular/folder-dashed-regular.icon";
import { FolderDashedThinIcon } from "../thin/folder-dashed-thin.icon";

export const FolderDashedIcon = createIcon("FolderDashed", {
  bold: FolderDashedBoldIcon,
  duotone: FolderDashedDuotoneIcon,
  fill: FolderDashedFillIcon,
  light: FolderDashedLightIcon,
  regular: FolderDashedRegularIcon,
  thin: FolderDashedThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimpleDashedBoldIcon } from "../bold/folder-simple-dashed-bold.icon";
import { FolderSimpleDashedDuotoneIcon } from "../duotone/folder-simple-dashed-duotone.icon";
import { FolderSimpleDashedFillIcon } from "../fill/folder-simple-dashed-fill.icon";
import { FolderSimpleDashedLightIcon } from "../light/folder-simple-dashed-light.icon";
import { FolderSimpleDashedRegularIcon } from "../regular/folder-simple-dashed-regular.icon";
import { FolderSimpleDashedThinIcon } from "../thin/folder-simple-dashed-thin.icon";

export const FolderSimpleDashedIcon = createIcon("FolderSimpleDashed", {
  bold: FolderSimpleDashedBoldIcon,
  duotone: FolderSimpleDashedDuotoneIcon,
  fill: FolderSimpleDashedFillIcon,
  light: FolderSimpleDashedLightIcon,
  regular: FolderSimpleDashedRegularIcon,
  thin: FolderSimpleDashedThinIcon,
});

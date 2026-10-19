import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderStarBoldIcon } from "../bold/folder-star-bold.icon";
import { FolderStarDuotoneIcon } from "../duotone/folder-star-duotone.icon";
import { FolderStarFillIcon } from "../fill/folder-star-fill.icon";
import { FolderStarLightIcon } from "../light/folder-star-light.icon";
import { FolderStarRegularIcon } from "../regular/folder-star-regular.icon";
import { FolderStarThinIcon } from "../thin/folder-star-thin.icon";

export const FolderStarIcon = createIcon("FolderStar", {
  bold: FolderStarBoldIcon,
  duotone: FolderStarDuotoneIcon,
  fill: FolderStarFillIcon,
  light: FolderStarLightIcon,
  regular: FolderStarRegularIcon,
  thin: FolderStarThinIcon,
});

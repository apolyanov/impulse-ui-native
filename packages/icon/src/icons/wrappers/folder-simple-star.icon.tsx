import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimpleStarBoldIcon } from "../bold/folder-simple-star-bold.icon";
import { FolderSimpleStarDuotoneIcon } from "../duotone/folder-simple-star-duotone.icon";
import { FolderSimpleStarFillIcon } from "../fill/folder-simple-star-fill.icon";
import { FolderSimpleStarLightIcon } from "../light/folder-simple-star-light.icon";
import { FolderSimpleStarRegularIcon } from "../regular/folder-simple-star-regular.icon";
import { FolderSimpleStarThinIcon } from "../thin/folder-simple-star-thin.icon";

export const FolderSimpleStarIcon = createIcon("FolderSimpleStar", {
  bold: FolderSimpleStarBoldIcon,
  duotone: FolderSimpleStarDuotoneIcon,
  fill: FolderSimpleStarFillIcon,
  light: FolderSimpleStarLightIcon,
  regular: FolderSimpleStarRegularIcon,
  thin: FolderSimpleStarThinIcon,
});

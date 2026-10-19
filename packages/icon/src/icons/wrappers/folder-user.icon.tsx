import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderUserBoldIcon } from "../bold/folder-user-bold.icon";
import { FolderUserDuotoneIcon } from "../duotone/folder-user-duotone.icon";
import { FolderUserFillIcon } from "../fill/folder-user-fill.icon";
import { FolderUserLightIcon } from "../light/folder-user-light.icon";
import { FolderUserRegularIcon } from "../regular/folder-user-regular.icon";
import { FolderUserThinIcon } from "../thin/folder-user-thin.icon";

export const FolderUserIcon = createIcon("FolderUser", {
  bold: FolderUserBoldIcon,
  duotone: FolderUserDuotoneIcon,
  fill: FolderUserFillIcon,
  light: FolderUserLightIcon,
  regular: FolderUserRegularIcon,
  thin: FolderUserThinIcon,
});

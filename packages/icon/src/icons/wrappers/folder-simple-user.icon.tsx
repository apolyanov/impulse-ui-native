import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimpleUserBoldIcon } from "../bold/folder-simple-user-bold.icon";
import { FolderSimpleUserDuotoneIcon } from "../duotone/folder-simple-user-duotone.icon";
import { FolderSimpleUserFillIcon } from "../fill/folder-simple-user-fill.icon";
import { FolderSimpleUserLightIcon } from "../light/folder-simple-user-light.icon";
import { FolderSimpleUserRegularIcon } from "../regular/folder-simple-user-regular.icon";
import { FolderSimpleUserThinIcon } from "../thin/folder-simple-user-thin.icon";

export const FolderSimpleUserIcon = createIcon("FolderSimpleUser", {
  bold: FolderSimpleUserBoldIcon,
  duotone: FolderSimpleUserDuotoneIcon,
  fill: FolderSimpleUserFillIcon,
  light: FolderSimpleUserLightIcon,
  regular: FolderSimpleUserRegularIcon,
  thin: FolderSimpleUserThinIcon,
});

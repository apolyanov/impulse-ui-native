import { createIcon } from "../../hocs/create-icon.hoc";
import { UserListBoldIcon } from "../bold/user-list-bold.icon";
import { UserListDuotoneIcon } from "../duotone/user-list-duotone.icon";
import { UserListFillIcon } from "../fill/user-list-fill.icon";
import { UserListLightIcon } from "../light/user-list-light.icon";
import { UserListRegularIcon } from "../regular/user-list-regular.icon";
import { UserListThinIcon } from "../thin/user-list-thin.icon";

export const UserListIcon = createIcon("UserList", {
  bold: UserListBoldIcon,
  duotone: UserListDuotoneIcon,
  fill: UserListFillIcon,
  light: UserListLightIcon,
  regular: UserListRegularIcon,
  thin: UserListThinIcon,
});

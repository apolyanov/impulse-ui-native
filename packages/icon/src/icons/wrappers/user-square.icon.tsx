import { createIcon } from "../../hocs/create-icon.hoc";
import { UserSquareBoldIcon } from "../bold/user-square-bold.icon";
import { UserSquareDuotoneIcon } from "../duotone/user-square-duotone.icon";
import { UserSquareFillIcon } from "../fill/user-square-fill.icon";
import { UserSquareLightIcon } from "../light/user-square-light.icon";
import { UserSquareRegularIcon } from "../regular/user-square-regular.icon";
import { UserSquareThinIcon } from "../thin/user-square-thin.icon";

export const UserSquareIcon = createIcon("UserSquare", {
  bold: UserSquareBoldIcon,
  duotone: UserSquareDuotoneIcon,
  fill: UserSquareFillIcon,
  light: UserSquareLightIcon,
  regular: UserSquareRegularIcon,
  thin: UserSquareThinIcon,
});

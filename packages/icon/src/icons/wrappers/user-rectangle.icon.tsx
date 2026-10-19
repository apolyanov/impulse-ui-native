import { createIcon } from "../../hocs/create-icon.hoc";
import { UserRectangleBoldIcon } from "../bold/user-rectangle-bold.icon";
import { UserRectangleDuotoneIcon } from "../duotone/user-rectangle-duotone.icon";
import { UserRectangleFillIcon } from "../fill/user-rectangle-fill.icon";
import { UserRectangleLightIcon } from "../light/user-rectangle-light.icon";
import { UserRectangleRegularIcon } from "../regular/user-rectangle-regular.icon";
import { UserRectangleThinIcon } from "../thin/user-rectangle-thin.icon";

export const UserRectangleIcon = createIcon("UserRectangle", {
  bold: UserRectangleBoldIcon,
  duotone: UserRectangleDuotoneIcon,
  fill: UserRectangleFillIcon,
  light: UserRectangleLightIcon,
  regular: UserRectangleRegularIcon,
  thin: UserRectangleThinIcon,
});

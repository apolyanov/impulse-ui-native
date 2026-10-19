import { createIcon } from "../../hocs/create-icon.hoc";
import { UsersFourBoldIcon } from "../bold/users-four-bold.icon";
import { UsersFourDuotoneIcon } from "../duotone/users-four-duotone.icon";
import { UsersFourFillIcon } from "../fill/users-four-fill.icon";
import { UsersFourLightIcon } from "../light/users-four-light.icon";
import { UsersFourRegularIcon } from "../regular/users-four-regular.icon";
import { UsersFourThinIcon } from "../thin/users-four-thin.icon";

export const UsersFourIcon = createIcon("UsersFour", {
  bold: UsersFourBoldIcon,
  duotone: UsersFourDuotoneIcon,
  fill: UsersFourFillIcon,
  light: UsersFourLightIcon,
  regular: UsersFourRegularIcon,
  thin: UsersFourThinIcon,
});

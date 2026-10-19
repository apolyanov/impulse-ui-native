import { createIcon } from "../../hocs/create-icon.hoc";
import { OrangeBoldIcon } from "../bold/orange-bold.icon";
import { OrangeDuotoneIcon } from "../duotone/orange-duotone.icon";
import { OrangeFillIcon } from "../fill/orange-fill.icon";
import { OrangeLightIcon } from "../light/orange-light.icon";
import { OrangeRegularIcon } from "../regular/orange-regular.icon";
import { OrangeThinIcon } from "../thin/orange-thin.icon";

export const OrangeIcon = createIcon("Orange", {
  bold: OrangeBoldIcon,
  duotone: OrangeDuotoneIcon,
  fill: OrangeFillIcon,
  light: OrangeLightIcon,
  regular: OrangeRegularIcon,
  thin: OrangeThinIcon,
});

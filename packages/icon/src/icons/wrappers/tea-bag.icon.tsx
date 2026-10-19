import { createIcon } from "../../hocs/create-icon.hoc";
import { TeaBagBoldIcon } from "../bold/tea-bag-bold.icon";
import { TeaBagDuotoneIcon } from "../duotone/tea-bag-duotone.icon";
import { TeaBagFillIcon } from "../fill/tea-bag-fill.icon";
import { TeaBagLightIcon } from "../light/tea-bag-light.icon";
import { TeaBagRegularIcon } from "../regular/tea-bag-regular.icon";
import { TeaBagThinIcon } from "../thin/tea-bag-thin.icon";

export const TeaBagIcon = createIcon("TeaBag", {
  bold: TeaBagBoldIcon,
  duotone: TeaBagDuotoneIcon,
  fill: TeaBagFillIcon,
  light: TeaBagLightIcon,
  regular: TeaBagRegularIcon,
  thin: TeaBagThinIcon,
});

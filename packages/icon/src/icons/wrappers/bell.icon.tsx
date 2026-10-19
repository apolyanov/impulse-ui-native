import { createIcon } from "../../hocs/create-icon.hoc";
import { BellBoldIcon } from "../bold/bell-bold.icon";
import { BellDuotoneIcon } from "../duotone/bell-duotone.icon";
import { BellFillIcon } from "../fill/bell-fill.icon";
import { BellLightIcon } from "../light/bell-light.icon";
import { BellRegularIcon } from "../regular/bell-regular.icon";
import { BellThinIcon } from "../thin/bell-thin.icon";

export const BellIcon = createIcon("Bell", {
  bold: BellBoldIcon,
  duotone: BellDuotoneIcon,
  fill: BellFillIcon,
  light: BellLightIcon,
  regular: BellRegularIcon,
  thin: BellThinIcon,
});

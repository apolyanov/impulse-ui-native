import { createIcon } from "../../hocs/create-icon.hoc";
import { BarbellBoldIcon } from "../bold/barbell-bold.icon";
import { BarbellDuotoneIcon } from "../duotone/barbell-duotone.icon";
import { BarbellFillIcon } from "../fill/barbell-fill.icon";
import { BarbellLightIcon } from "../light/barbell-light.icon";
import { BarbellRegularIcon } from "../regular/barbell-regular.icon";
import { BarbellThinIcon } from "../thin/barbell-thin.icon";

export const BarbellIcon = createIcon("Barbell", {
  bold: BarbellBoldIcon,
  duotone: BarbellDuotoneIcon,
  fill: BarbellFillIcon,
  light: BarbellLightIcon,
  regular: BarbellRegularIcon,
  thin: BarbellThinIcon,
});

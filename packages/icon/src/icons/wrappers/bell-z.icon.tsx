import { createIcon } from "../../hocs/create-icon.hoc";
import { BellZBoldIcon } from "../bold/bell-z-bold.icon";
import { BellZDuotoneIcon } from "../duotone/bell-z-duotone.icon";
import { BellZFillIcon } from "../fill/bell-z-fill.icon";
import { BellZLightIcon } from "../light/bell-z-light.icon";
import { BellZRegularIcon } from "../regular/bell-z-regular.icon";
import { BellZThinIcon } from "../thin/bell-z-thin.icon";

export const BellZIcon = createIcon("BellZ", {
  bold: BellZBoldIcon,
  duotone: BellZDuotoneIcon,
  fill: BellZFillIcon,
  light: BellZLightIcon,
  regular: BellZRegularIcon,
  thin: BellZThinIcon,
});

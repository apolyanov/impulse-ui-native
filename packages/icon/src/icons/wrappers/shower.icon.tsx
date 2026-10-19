import { createIcon } from "../../hocs/create-icon.hoc";
import { ShowerBoldIcon } from "../bold/shower-bold.icon";
import { ShowerDuotoneIcon } from "../duotone/shower-duotone.icon";
import { ShowerFillIcon } from "../fill/shower-fill.icon";
import { ShowerLightIcon } from "../light/shower-light.icon";
import { ShowerRegularIcon } from "../regular/shower-regular.icon";
import { ShowerThinIcon } from "../thin/shower-thin.icon";

export const ShowerIcon = createIcon("Shower", {
  bold: ShowerBoldIcon,
  duotone: ShowerDuotoneIcon,
  fill: ShowerFillIcon,
  light: ShowerLightIcon,
  regular: ShowerRegularIcon,
  thin: ShowerThinIcon,
});

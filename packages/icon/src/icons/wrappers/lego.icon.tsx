import { createIcon } from "../../hocs/create-icon.hoc";
import { LegoBoldIcon } from "../bold/lego-bold.icon";
import { LegoDuotoneIcon } from "../duotone/lego-duotone.icon";
import { LegoFillIcon } from "../fill/lego-fill.icon";
import { LegoLightIcon } from "../light/lego-light.icon";
import { LegoRegularIcon } from "../regular/lego-regular.icon";
import { LegoThinIcon } from "../thin/lego-thin.icon";

export const LegoIcon = createIcon("Lego", {
  bold: LegoBoldIcon,
  duotone: LegoDuotoneIcon,
  fill: LegoFillIcon,
  light: LegoLightIcon,
  regular: LegoRegularIcon,
  thin: LegoThinIcon,
});

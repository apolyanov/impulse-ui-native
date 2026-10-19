import { createIcon } from "../../hocs/create-icon.hoc";
import { ToothBoldIcon } from "../bold/tooth-bold.icon";
import { ToothDuotoneIcon } from "../duotone/tooth-duotone.icon";
import { ToothFillIcon } from "../fill/tooth-fill.icon";
import { ToothLightIcon } from "../light/tooth-light.icon";
import { ToothRegularIcon } from "../regular/tooth-regular.icon";
import { ToothThinIcon } from "../thin/tooth-thin.icon";

export const ToothIcon = createIcon("Tooth", {
  bold: ToothBoldIcon,
  duotone: ToothDuotoneIcon,
  fill: ToothFillIcon,
  light: ToothLightIcon,
  regular: ToothRegularIcon,
  thin: ToothThinIcon,
});

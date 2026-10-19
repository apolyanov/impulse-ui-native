import { createIcon } from "../../hocs/create-icon.hoc";
import { WarningBoldIcon } from "../bold/warning-bold.icon";
import { WarningDuotoneIcon } from "../duotone/warning-duotone.icon";
import { WarningFillIcon } from "../fill/warning-fill.icon";
import { WarningLightIcon } from "../light/warning-light.icon";
import { WarningRegularIcon } from "../regular/warning-regular.icon";
import { WarningThinIcon } from "../thin/warning-thin.icon";

export const WarningIcon = createIcon("Warning", {
  bold: WarningBoldIcon,
  duotone: WarningDuotoneIcon,
  fill: WarningFillIcon,
  light: WarningLightIcon,
  regular: WarningRegularIcon,
  thin: WarningThinIcon,
});

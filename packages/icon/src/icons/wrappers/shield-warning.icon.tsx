import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldWarningBoldIcon } from "../bold/shield-warning-bold.icon";
import { ShieldWarningDuotoneIcon } from "../duotone/shield-warning-duotone.icon";
import { ShieldWarningFillIcon } from "../fill/shield-warning-fill.icon";
import { ShieldWarningLightIcon } from "../light/shield-warning-light.icon";
import { ShieldWarningRegularIcon } from "../regular/shield-warning-regular.icon";
import { ShieldWarningThinIcon } from "../thin/shield-warning-thin.icon";

export const ShieldWarningIcon = createIcon("ShieldWarning", {
  bold: ShieldWarningBoldIcon,
  duotone: ShieldWarningDuotoneIcon,
  fill: ShieldWarningFillIcon,
  light: ShieldWarningLightIcon,
  regular: ShieldWarningRegularIcon,
  thin: ShieldWarningThinIcon,
});

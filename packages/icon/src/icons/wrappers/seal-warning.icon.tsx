import { createIcon } from "../../hocs/create-icon.hoc";
import { SealWarningBoldIcon } from "../bold/seal-warning-bold.icon";
import { SealWarningDuotoneIcon } from "../duotone/seal-warning-duotone.icon";
import { SealWarningFillIcon } from "../fill/seal-warning-fill.icon";
import { SealWarningLightIcon } from "../light/seal-warning-light.icon";
import { SealWarningRegularIcon } from "../regular/seal-warning-regular.icon";
import { SealWarningThinIcon } from "../thin/seal-warning-thin.icon";

export const SealWarningIcon = createIcon("SealWarning", {
  bold: SealWarningBoldIcon,
  duotone: SealWarningDuotoneIcon,
  fill: SealWarningFillIcon,
  light: SealWarningLightIcon,
  regular: SealWarningRegularIcon,
  thin: SealWarningThinIcon,
});

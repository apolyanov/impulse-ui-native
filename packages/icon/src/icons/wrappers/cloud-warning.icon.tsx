import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudWarningBoldIcon } from "../bold/cloud-warning-bold.icon";
import { CloudWarningDuotoneIcon } from "../duotone/cloud-warning-duotone.icon";
import { CloudWarningFillIcon } from "../fill/cloud-warning-fill.icon";
import { CloudWarningLightIcon } from "../light/cloud-warning-light.icon";
import { CloudWarningRegularIcon } from "../regular/cloud-warning-regular.icon";
import { CloudWarningThinIcon } from "../thin/cloud-warning-thin.icon";

export const CloudWarningIcon = createIcon("CloudWarning", {
  bold: CloudWarningBoldIcon,
  duotone: CloudWarningDuotoneIcon,
  fill: CloudWarningFillIcon,
  light: CloudWarningLightIcon,
  regular: CloudWarningRegularIcon,
  thin: CloudWarningThinIcon,
});

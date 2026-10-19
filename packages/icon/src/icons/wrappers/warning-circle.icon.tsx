import { createIcon } from "../../hocs/create-icon.hoc";
import { WarningCircleBoldIcon } from "../bold/warning-circle-bold.icon";
import { WarningCircleDuotoneIcon } from "../duotone/warning-circle-duotone.icon";
import { WarningCircleFillIcon } from "../fill/warning-circle-fill.icon";
import { WarningCircleLightIcon } from "../light/warning-circle-light.icon";
import { WarningCircleRegularIcon } from "../regular/warning-circle-regular.icon";
import { WarningCircleThinIcon } from "../thin/warning-circle-thin.icon";

export const WarningCircleIcon = createIcon("WarningCircle", {
  bold: WarningCircleBoldIcon,
  duotone: WarningCircleDuotoneIcon,
  fill: WarningCircleFillIcon,
  light: WarningCircleLightIcon,
  regular: WarningCircleRegularIcon,
  thin: WarningCircleThinIcon,
});

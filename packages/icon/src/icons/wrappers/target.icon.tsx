import { createIcon } from "../../hocs/create-icon.hoc";
import { TargetBoldIcon } from "../bold/target-bold.icon";
import { TargetDuotoneIcon } from "../duotone/target-duotone.icon";
import { TargetFillIcon } from "../fill/target-fill.icon";
import { TargetLightIcon } from "../light/target-light.icon";
import { TargetRegularIcon } from "../regular/target-regular.icon";
import { TargetThinIcon } from "../thin/target-thin.icon";

export const TargetIcon = createIcon("Target", {
  bold: TargetBoldIcon,
  duotone: TargetDuotoneIcon,
  fill: TargetFillIcon,
  light: TargetLightIcon,
  regular: TargetRegularIcon,
  thin: TargetThinIcon,
});

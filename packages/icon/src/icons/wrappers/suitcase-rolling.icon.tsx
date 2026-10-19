import { createIcon } from "../../hocs/create-icon.hoc";
import { SuitcaseRollingBoldIcon } from "../bold/suitcase-rolling-bold.icon";
import { SuitcaseRollingDuotoneIcon } from "../duotone/suitcase-rolling-duotone.icon";
import { SuitcaseRollingFillIcon } from "../fill/suitcase-rolling-fill.icon";
import { SuitcaseRollingLightIcon } from "../light/suitcase-rolling-light.icon";
import { SuitcaseRollingRegularIcon } from "../regular/suitcase-rolling-regular.icon";
import { SuitcaseRollingThinIcon } from "../thin/suitcase-rolling-thin.icon";

export const SuitcaseRollingIcon = createIcon("SuitcaseRolling", {
  bold: SuitcaseRollingBoldIcon,
  duotone: SuitcaseRollingDuotoneIcon,
  fill: SuitcaseRollingFillIcon,
  light: SuitcaseRollingLightIcon,
  regular: SuitcaseRollingRegularIcon,
  thin: SuitcaseRollingThinIcon,
});

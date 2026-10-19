import { createIcon } from "../../hocs/create-icon.hoc";
import { SealBoldIcon } from "../bold/seal-bold.icon";
import { SealDuotoneIcon } from "../duotone/seal-duotone.icon";
import { SealFillIcon } from "../fill/seal-fill.icon";
import { SealLightIcon } from "../light/seal-light.icon";
import { SealRegularIcon } from "../regular/seal-regular.icon";
import { SealThinIcon } from "../thin/seal-thin.icon";

export const SealIcon = createIcon("Seal", {
  bold: SealBoldIcon,
  duotone: SealDuotoneIcon,
  fill: SealFillIcon,
  light: SealLightIcon,
  regular: SealRegularIcon,
  thin: SealThinIcon,
});

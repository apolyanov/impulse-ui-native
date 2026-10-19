import { createIcon } from "../../hocs/create-icon.hoc";
import { SealPercentBoldIcon } from "../bold/seal-percent-bold.icon";
import { SealPercentDuotoneIcon } from "../duotone/seal-percent-duotone.icon";
import { SealPercentFillIcon } from "../fill/seal-percent-fill.icon";
import { SealPercentLightIcon } from "../light/seal-percent-light.icon";
import { SealPercentRegularIcon } from "../regular/seal-percent-regular.icon";
import { SealPercentThinIcon } from "../thin/seal-percent-thin.icon";

export const SealPercentIcon = createIcon("SealPercent", {
  bold: SealPercentBoldIcon,
  duotone: SealPercentDuotoneIcon,
  fill: SealPercentFillIcon,
  light: SealPercentLightIcon,
  regular: SealPercentRegularIcon,
  thin: SealPercentThinIcon,
});

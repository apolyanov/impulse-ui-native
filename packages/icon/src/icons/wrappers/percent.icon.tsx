import { createIcon } from "../../hocs/create-icon.hoc";
import { PercentBoldIcon } from "../bold/percent-bold.icon";
import { PercentDuotoneIcon } from "../duotone/percent-duotone.icon";
import { PercentFillIcon } from "../fill/percent-fill.icon";
import { PercentLightIcon } from "../light/percent-light.icon";
import { PercentRegularIcon } from "../regular/percent-regular.icon";
import { PercentThinIcon } from "../thin/percent-thin.icon";

export const PercentIcon = createIcon("Percent", {
  bold: PercentBoldIcon,
  duotone: PercentDuotoneIcon,
  fill: PercentFillIcon,
  light: PercentLightIcon,
  regular: PercentRegularIcon,
  thin: PercentThinIcon,
});

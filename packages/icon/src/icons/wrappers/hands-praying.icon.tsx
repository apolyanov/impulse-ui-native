import { createIcon } from "../../hocs/create-icon.hoc";
import { HandsPrayingBoldIcon } from "../bold/hands-praying-bold.icon";
import { HandsPrayingDuotoneIcon } from "../duotone/hands-praying-duotone.icon";
import { HandsPrayingFillIcon } from "../fill/hands-praying-fill.icon";
import { HandsPrayingLightIcon } from "../light/hands-praying-light.icon";
import { HandsPrayingRegularIcon } from "../regular/hands-praying-regular.icon";
import { HandsPrayingThinIcon } from "../thin/hands-praying-thin.icon";

export const HandsPrayingIcon = createIcon("HandsPraying", {
  bold: HandsPrayingBoldIcon,
  duotone: HandsPrayingDuotoneIcon,
  fill: HandsPrayingFillIcon,
  light: HandsPrayingLightIcon,
  regular: HandsPrayingRegularIcon,
  thin: HandsPrayingThinIcon,
});

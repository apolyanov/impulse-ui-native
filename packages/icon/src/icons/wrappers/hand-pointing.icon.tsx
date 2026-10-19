import { createIcon } from "../../hocs/create-icon.hoc";
import { HandPointingBoldIcon } from "../bold/hand-pointing-bold.icon";
import { HandPointingDuotoneIcon } from "../duotone/hand-pointing-duotone.icon";
import { HandPointingFillIcon } from "../fill/hand-pointing-fill.icon";
import { HandPointingLightIcon } from "../light/hand-pointing-light.icon";
import { HandPointingRegularIcon } from "../regular/hand-pointing-regular.icon";
import { HandPointingThinIcon } from "../thin/hand-pointing-thin.icon";

export const HandPointingIcon = createIcon("HandPointing", {
  bold: HandPointingBoldIcon,
  duotone: HandPointingDuotoneIcon,
  fill: HandPointingFillIcon,
  light: HandPointingLightIcon,
  regular: HandPointingRegularIcon,
  thin: HandPointingThinIcon,
});

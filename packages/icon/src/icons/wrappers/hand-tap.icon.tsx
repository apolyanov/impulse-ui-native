import { createIcon } from "../../hocs/create-icon.hoc";
import { HandTapBoldIcon } from "../bold/hand-tap-bold.icon";
import { HandTapDuotoneIcon } from "../duotone/hand-tap-duotone.icon";
import { HandTapFillIcon } from "../fill/hand-tap-fill.icon";
import { HandTapLightIcon } from "../light/hand-tap-light.icon";
import { HandTapRegularIcon } from "../regular/hand-tap-regular.icon";
import { HandTapThinIcon } from "../thin/hand-tap-thin.icon";

export const HandTapIcon = createIcon("HandTap", {
  bold: HandTapBoldIcon,
  duotone: HandTapDuotoneIcon,
  fill: HandTapFillIcon,
  light: HandTapLightIcon,
  regular: HandTapRegularIcon,
  thin: HandTapThinIcon,
});

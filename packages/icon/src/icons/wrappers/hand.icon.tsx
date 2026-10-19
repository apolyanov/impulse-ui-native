import { createIcon } from "../../hocs/create-icon.hoc";
import { HandBoldIcon } from "../bold/hand-bold.icon";
import { HandDuotoneIcon } from "../duotone/hand-duotone.icon";
import { HandFillIcon } from "../fill/hand-fill.icon";
import { HandLightIcon } from "../light/hand-light.icon";
import { HandRegularIcon } from "../regular/hand-regular.icon";
import { HandThinIcon } from "../thin/hand-thin.icon";

export const HandIcon = createIcon("Hand", {
  bold: HandBoldIcon,
  duotone: HandDuotoneIcon,
  fill: HandFillIcon,
  light: HandLightIcon,
  regular: HandRegularIcon,
  thin: HandThinIcon,
});

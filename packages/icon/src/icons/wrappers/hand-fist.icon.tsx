import { createIcon } from "../../hocs/create-icon.hoc";
import { HandFistBoldIcon } from "../bold/hand-fist-bold.icon";
import { HandFistDuotoneIcon } from "../duotone/hand-fist-duotone.icon";
import { HandFistFillIcon } from "../fill/hand-fist-fill.icon";
import { HandFistLightIcon } from "../light/hand-fist-light.icon";
import { HandFistRegularIcon } from "../regular/hand-fist-regular.icon";
import { HandFistThinIcon } from "../thin/hand-fist-thin.icon";

export const HandFistIcon = createIcon("HandFist", {
  bold: HandFistBoldIcon,
  duotone: HandFistDuotoneIcon,
  fill: HandFistFillIcon,
  light: HandFistLightIcon,
  regular: HandFistRegularIcon,
  thin: HandFistThinIcon,
});

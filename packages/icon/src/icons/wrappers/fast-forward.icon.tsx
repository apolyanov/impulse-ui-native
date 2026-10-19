import { createIcon } from "../../hocs/create-icon.hoc";
import { FastForwardBoldIcon } from "../bold/fast-forward-bold.icon";
import { FastForwardDuotoneIcon } from "../duotone/fast-forward-duotone.icon";
import { FastForwardFillIcon } from "../fill/fast-forward-fill.icon";
import { FastForwardLightIcon } from "../light/fast-forward-light.icon";
import { FastForwardRegularIcon } from "../regular/fast-forward-regular.icon";
import { FastForwardThinIcon } from "../thin/fast-forward-thin.icon";

export const FastForwardIcon = createIcon("FastForward", {
  bold: FastForwardBoldIcon,
  duotone: FastForwardDuotoneIcon,
  fill: FastForwardFillIcon,
  light: FastForwardLightIcon,
  regular: FastForwardRegularIcon,
  thin: FastForwardThinIcon,
});

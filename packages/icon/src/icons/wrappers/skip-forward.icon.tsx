import { createIcon } from "../../hocs/create-icon.hoc";
import { SkipForwardBoldIcon } from "../bold/skip-forward-bold.icon";
import { SkipForwardDuotoneIcon } from "../duotone/skip-forward-duotone.icon";
import { SkipForwardFillIcon } from "../fill/skip-forward-fill.icon";
import { SkipForwardLightIcon } from "../light/skip-forward-light.icon";
import { SkipForwardRegularIcon } from "../regular/skip-forward-regular.icon";
import { SkipForwardThinIcon } from "../thin/skip-forward-thin.icon";

export const SkipForwardIcon = createIcon("SkipForward", {
  bold: SkipForwardBoldIcon,
  duotone: SkipForwardDuotoneIcon,
  fill: SkipForwardFillIcon,
  light: SkipForwardLightIcon,
  regular: SkipForwardRegularIcon,
  thin: SkipForwardThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { SkipForwardCircleBoldIcon } from "../bold/skip-forward-circle-bold.icon";
import { SkipForwardCircleDuotoneIcon } from "../duotone/skip-forward-circle-duotone.icon";
import { SkipForwardCircleFillIcon } from "../fill/skip-forward-circle-fill.icon";
import { SkipForwardCircleLightIcon } from "../light/skip-forward-circle-light.icon";
import { SkipForwardCircleRegularIcon } from "../regular/skip-forward-circle-regular.icon";
import { SkipForwardCircleThinIcon } from "../thin/skip-forward-circle-thin.icon";

export const SkipForwardCircleIcon = createIcon("SkipForwardCircle", {
  bold: SkipForwardCircleBoldIcon,
  duotone: SkipForwardCircleDuotoneIcon,
  fill: SkipForwardCircleFillIcon,
  light: SkipForwardCircleLightIcon,
  regular: SkipForwardCircleRegularIcon,
  thin: SkipForwardCircleThinIcon,
});

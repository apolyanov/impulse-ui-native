import { createIcon } from "../../hocs/create-icon.hoc";
import { FastForwardCircleBoldIcon } from "../bold/fast-forward-circle-bold.icon";
import { FastForwardCircleDuotoneIcon } from "../duotone/fast-forward-circle-duotone.icon";
import { FastForwardCircleFillIcon } from "../fill/fast-forward-circle-fill.icon";
import { FastForwardCircleLightIcon } from "../light/fast-forward-circle-light.icon";
import { FastForwardCircleRegularIcon } from "../regular/fast-forward-circle-regular.icon";
import { FastForwardCircleThinIcon } from "../thin/fast-forward-circle-thin.icon";

export const FastForwardCircleIcon = createIcon("FastForwardCircle", {
  bold: FastForwardCircleBoldIcon,
  duotone: FastForwardCircleDuotoneIcon,
  fill: FastForwardCircleFillIcon,
  light: FastForwardCircleLightIcon,
  regular: FastForwardCircleRegularIcon,
  thin: FastForwardCircleThinIcon,
});

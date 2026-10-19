import { createIcon } from "../../hocs/create-icon.hoc";
import { HandSwipeLeftBoldIcon } from "../bold/hand-swipe-left-bold.icon";
import { HandSwipeLeftDuotoneIcon } from "../duotone/hand-swipe-left-duotone.icon";
import { HandSwipeLeftFillIcon } from "../fill/hand-swipe-left-fill.icon";
import { HandSwipeLeftLightIcon } from "../light/hand-swipe-left-light.icon";
import { HandSwipeLeftRegularIcon } from "../regular/hand-swipe-left-regular.icon";
import { HandSwipeLeftThinIcon } from "../thin/hand-swipe-left-thin.icon";

export const HandSwipeLeftIcon = createIcon("HandSwipeLeft", {
  bold: HandSwipeLeftBoldIcon,
  duotone: HandSwipeLeftDuotoneIcon,
  fill: HandSwipeLeftFillIcon,
  light: HandSwipeLeftLightIcon,
  regular: HandSwipeLeftRegularIcon,
  thin: HandSwipeLeftThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { HandSwipeRightBoldIcon } from "../bold/hand-swipe-right-bold.icon";
import { HandSwipeRightDuotoneIcon } from "../duotone/hand-swipe-right-duotone.icon";
import { HandSwipeRightFillIcon } from "../fill/hand-swipe-right-fill.icon";
import { HandSwipeRightLightIcon } from "../light/hand-swipe-right-light.icon";
import { HandSwipeRightRegularIcon } from "../regular/hand-swipe-right-regular.icon";
import { HandSwipeRightThinIcon } from "../thin/hand-swipe-right-thin.icon";

export const HandSwipeRightIcon = createIcon("HandSwipeRight", {
  bold: HandSwipeRightBoldIcon,
  duotone: HandSwipeRightDuotoneIcon,
  fill: HandSwipeRightFillIcon,
  light: HandSwipeRightLightIcon,
  regular: HandSwipeRightRegularIcon,
  thin: HandSwipeRightThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { HandGrabbingBoldIcon } from "../bold/hand-grabbing-bold.icon";
import { HandGrabbingDuotoneIcon } from "../duotone/hand-grabbing-duotone.icon";
import { HandGrabbingFillIcon } from "../fill/hand-grabbing-fill.icon";
import { HandGrabbingLightIcon } from "../light/hand-grabbing-light.icon";
import { HandGrabbingRegularIcon } from "../regular/hand-grabbing-regular.icon";
import { HandGrabbingThinIcon } from "../thin/hand-grabbing-thin.icon";

export const HandGrabbingIcon = createIcon("HandGrabbing", {
  bold: HandGrabbingBoldIcon,
  duotone: HandGrabbingDuotoneIcon,
  fill: HandGrabbingFillIcon,
  light: HandGrabbingLightIcon,
  regular: HandGrabbingRegularIcon,
  thin: HandGrabbingThinIcon,
});

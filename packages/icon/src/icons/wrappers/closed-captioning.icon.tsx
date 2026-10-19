import { createIcon } from "../../hocs/create-icon.hoc";
import { ClosedCaptioningBoldIcon } from "../bold/closed-captioning-bold.icon";
import { ClosedCaptioningDuotoneIcon } from "../duotone/closed-captioning-duotone.icon";
import { ClosedCaptioningFillIcon } from "../fill/closed-captioning-fill.icon";
import { ClosedCaptioningLightIcon } from "../light/closed-captioning-light.icon";
import { ClosedCaptioningRegularIcon } from "../regular/closed-captioning-regular.icon";
import { ClosedCaptioningThinIcon } from "../thin/closed-captioning-thin.icon";

export const ClosedCaptioningIcon = createIcon("ClosedCaptioning", {
  bold: ClosedCaptioningBoldIcon,
  duotone: ClosedCaptioningDuotoneIcon,
  fill: ClosedCaptioningFillIcon,
  light: ClosedCaptioningLightIcon,
  regular: ClosedCaptioningRegularIcon,
  thin: ClosedCaptioningThinIcon,
});

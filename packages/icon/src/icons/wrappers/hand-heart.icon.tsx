import { createIcon } from "../../hocs/create-icon.hoc";
import { HandHeartBoldIcon } from "../bold/hand-heart-bold.icon";
import { HandHeartDuotoneIcon } from "../duotone/hand-heart-duotone.icon";
import { HandHeartFillIcon } from "../fill/hand-heart-fill.icon";
import { HandHeartLightIcon } from "../light/hand-heart-light.icon";
import { HandHeartRegularIcon } from "../regular/hand-heart-regular.icon";
import { HandHeartThinIcon } from "../thin/hand-heart-thin.icon";

export const HandHeartIcon = createIcon("HandHeart", {
  bold: HandHeartBoldIcon,
  duotone: HandHeartDuotoneIcon,
  fill: HandHeartFillIcon,
  light: HandHeartLightIcon,
  regular: HandHeartRegularIcon,
  thin: HandHeartThinIcon,
});

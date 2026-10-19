import { createIcon } from "../../hocs/create-icon.hoc";
import { WheelchairMotionBoldIcon } from "../bold/wheelchair-motion-bold.icon";
import { WheelchairMotionDuotoneIcon } from "../duotone/wheelchair-motion-duotone.icon";
import { WheelchairMotionFillIcon } from "../fill/wheelchair-motion-fill.icon";
import { WheelchairMotionLightIcon } from "../light/wheelchair-motion-light.icon";
import { WheelchairMotionRegularIcon } from "../regular/wheelchair-motion-regular.icon";
import { WheelchairMotionThinIcon } from "../thin/wheelchair-motion-thin.icon";

export const WheelchairMotionIcon = createIcon("WheelchairMotion", {
  bold: WheelchairMotionBoldIcon,
  duotone: WheelchairMotionDuotoneIcon,
  fill: WheelchairMotionFillIcon,
  light: WheelchairMotionLightIcon,
  regular: WheelchairMotionRegularIcon,
  thin: WheelchairMotionThinIcon,
});

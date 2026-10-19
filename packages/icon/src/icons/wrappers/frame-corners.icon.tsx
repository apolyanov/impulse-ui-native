import { createIcon } from "../../hocs/create-icon.hoc";
import { FrameCornersBoldIcon } from "../bold/frame-corners-bold.icon";
import { FrameCornersDuotoneIcon } from "../duotone/frame-corners-duotone.icon";
import { FrameCornersFillIcon } from "../fill/frame-corners-fill.icon";
import { FrameCornersLightIcon } from "../light/frame-corners-light.icon";
import { FrameCornersRegularIcon } from "../regular/frame-corners-regular.icon";
import { FrameCornersThinIcon } from "../thin/frame-corners-thin.icon";

export const FrameCornersIcon = createIcon("FrameCorners", {
  bold: FrameCornersBoldIcon,
  duotone: FrameCornersDuotoneIcon,
  fill: FrameCornersFillIcon,
  light: FrameCornersLightIcon,
  regular: FrameCornersRegularIcon,
  thin: FrameCornersThinIcon,
});

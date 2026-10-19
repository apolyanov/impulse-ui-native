import { createIcon } from "../../hocs/create-icon.hoc";
import { HandEyeBoldIcon } from "../bold/hand-eye-bold.icon";
import { HandEyeDuotoneIcon } from "../duotone/hand-eye-duotone.icon";
import { HandEyeFillIcon } from "../fill/hand-eye-fill.icon";
import { HandEyeLightIcon } from "../light/hand-eye-light.icon";
import { HandEyeRegularIcon } from "../regular/hand-eye-regular.icon";
import { HandEyeThinIcon } from "../thin/hand-eye-thin.icon";

export const HandEyeIcon = createIcon("HandEye", {
  bold: HandEyeBoldIcon,
  duotone: HandEyeDuotoneIcon,
  fill: HandEyeFillIcon,
  light: HandEyeLightIcon,
  regular: HandEyeRegularIcon,
  thin: HandEyeThinIcon,
});

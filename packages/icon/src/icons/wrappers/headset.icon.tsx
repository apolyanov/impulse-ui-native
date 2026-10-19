import { createIcon } from "../../hocs/create-icon.hoc";
import { HeadsetBoldIcon } from "../bold/headset-bold.icon";
import { HeadsetDuotoneIcon } from "../duotone/headset-duotone.icon";
import { HeadsetFillIcon } from "../fill/headset-fill.icon";
import { HeadsetLightIcon } from "../light/headset-light.icon";
import { HeadsetRegularIcon } from "../regular/headset-regular.icon";
import { HeadsetThinIcon } from "../thin/headset-thin.icon";

export const HeadsetIcon = createIcon("Headset", {
  bold: HeadsetBoldIcon,
  duotone: HeadsetDuotoneIcon,
  fill: HeadsetFillIcon,
  light: HeadsetLightIcon,
  regular: HeadsetRegularIcon,
  thin: HeadsetThinIcon,
});

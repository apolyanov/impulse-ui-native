import { createIcon } from "../../hocs/create-icon.hoc";
import { CircleNotchBoldIcon } from "../bold/circle-notch-bold.icon";
import { CircleNotchDuotoneIcon } from "../duotone/circle-notch-duotone.icon";
import { CircleNotchFillIcon } from "../fill/circle-notch-fill.icon";
import { CircleNotchLightIcon } from "../light/circle-notch-light.icon";
import { CircleNotchRegularIcon } from "../regular/circle-notch-regular.icon";
import { CircleNotchThinIcon } from "../thin/circle-notch-thin.icon";

export const CircleNotchIcon = createIcon("CircleNotch", {
  bold: CircleNotchBoldIcon,
  duotone: CircleNotchDuotoneIcon,
  fill: CircleNotchFillIcon,
  light: CircleNotchLightIcon,
  regular: CircleNotchRegularIcon,
  thin: CircleNotchThinIcon,
});

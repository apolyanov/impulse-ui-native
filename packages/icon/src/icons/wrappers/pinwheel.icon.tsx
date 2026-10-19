import { createIcon } from "../../hocs/create-icon.hoc";
import { PinwheelBoldIcon } from "../bold/pinwheel-bold.icon";
import { PinwheelDuotoneIcon } from "../duotone/pinwheel-duotone.icon";
import { PinwheelFillIcon } from "../fill/pinwheel-fill.icon";
import { PinwheelLightIcon } from "../light/pinwheel-light.icon";
import { PinwheelRegularIcon } from "../regular/pinwheel-regular.icon";
import { PinwheelThinIcon } from "../thin/pinwheel-thin.icon";

export const PinwheelIcon = createIcon("Pinwheel", {
  bold: PinwheelBoldIcon,
  duotone: PinwheelDuotoneIcon,
  fill: PinwheelFillIcon,
  light: PinwheelLightIcon,
  regular: PinwheelRegularIcon,
  thin: PinwheelThinIcon,
});

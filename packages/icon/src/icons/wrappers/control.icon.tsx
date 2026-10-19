import { createIcon } from "../../hocs/create-icon.hoc";
import { ControlBoldIcon } from "../bold/control-bold.icon";
import { ControlDuotoneIcon } from "../duotone/control-duotone.icon";
import { ControlFillIcon } from "../fill/control-fill.icon";
import { ControlLightIcon } from "../light/control-light.icon";
import { ControlRegularIcon } from "../regular/control-regular.icon";
import { ControlThinIcon } from "../thin/control-thin.icon";

export const ControlIcon = createIcon("Control", {
  bold: ControlBoldIcon,
  duotone: ControlDuotoneIcon,
  fill: ControlFillIcon,
  light: ControlLightIcon,
  regular: ControlRegularIcon,
  thin: ControlThinIcon,
});

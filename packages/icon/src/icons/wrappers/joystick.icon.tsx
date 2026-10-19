import { createIcon } from "../../hocs/create-icon.hoc";
import { JoystickBoldIcon } from "../bold/joystick-bold.icon";
import { JoystickDuotoneIcon } from "../duotone/joystick-duotone.icon";
import { JoystickFillIcon } from "../fill/joystick-fill.icon";
import { JoystickLightIcon } from "../light/joystick-light.icon";
import { JoystickRegularIcon } from "../regular/joystick-regular.icon";
import { JoystickThinIcon } from "../thin/joystick-thin.icon";

export const JoystickIcon = createIcon("Joystick", {
  bold: JoystickBoldIcon,
  duotone: JoystickDuotoneIcon,
  fill: JoystickFillIcon,
  light: JoystickLightIcon,
  regular: JoystickRegularIcon,
  thin: JoystickThinIcon,
});

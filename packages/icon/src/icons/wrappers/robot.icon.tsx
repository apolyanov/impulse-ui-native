import { createIcon } from "../../hocs/create-icon.hoc";
import { RobotBoldIcon } from "../bold/robot-bold.icon";
import { RobotDuotoneIcon } from "../duotone/robot-duotone.icon";
import { RobotFillIcon } from "../fill/robot-fill.icon";
import { RobotLightIcon } from "../light/robot-light.icon";
import { RobotRegularIcon } from "../regular/robot-regular.icon";
import { RobotThinIcon } from "../thin/robot-thin.icon";

export const RobotIcon = createIcon("Robot", {
  bold: RobotBoldIcon,
  duotone: RobotDuotoneIcon,
  fill: RobotFillIcon,
  light: RobotLightIcon,
  regular: RobotRegularIcon,
  thin: RobotThinIcon,
});

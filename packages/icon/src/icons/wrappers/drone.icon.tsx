import { createIcon } from "../../hocs/create-icon.hoc";
import { DroneBoldIcon } from "../bold/drone-bold.icon";
import { DroneDuotoneIcon } from "../duotone/drone-duotone.icon";
import { DroneFillIcon } from "../fill/drone-fill.icon";
import { DroneLightIcon } from "../light/drone-light.icon";
import { DroneRegularIcon } from "../regular/drone-regular.icon";
import { DroneThinIcon } from "../thin/drone-thin.icon";

export const DroneIcon = createIcon("Drone", {
  bold: DroneBoldIcon,
  duotone: DroneDuotoneIcon,
  fill: DroneFillIcon,
  light: DroneLightIcon,
  regular: DroneRegularIcon,
  thin: DroneThinIcon,
});

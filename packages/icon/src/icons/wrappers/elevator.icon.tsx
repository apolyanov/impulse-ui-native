import { createIcon } from "../../hocs/create-icon.hoc";
import { ElevatorBoldIcon } from "../bold/elevator-bold.icon";
import { ElevatorDuotoneIcon } from "../duotone/elevator-duotone.icon";
import { ElevatorFillIcon } from "../fill/elevator-fill.icon";
import { ElevatorLightIcon } from "../light/elevator-light.icon";
import { ElevatorRegularIcon } from "../regular/elevator-regular.icon";
import { ElevatorThinIcon } from "../thin/elevator-thin.icon";

export const ElevatorIcon = createIcon("Elevator", {
  bold: ElevatorBoldIcon,
  duotone: ElevatorDuotoneIcon,
  fill: ElevatorFillIcon,
  light: ElevatorLightIcon,
  regular: ElevatorRegularIcon,
  thin: ElevatorThinIcon,
});

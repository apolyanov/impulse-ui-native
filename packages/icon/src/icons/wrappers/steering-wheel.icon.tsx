import { createIcon } from "../../hocs/create-icon.hoc";
import { SteeringWheelBoldIcon } from "../bold/steering-wheel-bold.icon";
import { SteeringWheelDuotoneIcon } from "../duotone/steering-wheel-duotone.icon";
import { SteeringWheelFillIcon } from "../fill/steering-wheel-fill.icon";
import { SteeringWheelLightIcon } from "../light/steering-wheel-light.icon";
import { SteeringWheelRegularIcon } from "../regular/steering-wheel-regular.icon";
import { SteeringWheelThinIcon } from "../thin/steering-wheel-thin.icon";

export const SteeringWheelIcon = createIcon("SteeringWheel", {
  bold: SteeringWheelBoldIcon,
  duotone: SteeringWheelDuotoneIcon,
  fill: SteeringWheelFillIcon,
  light: SteeringWheelLightIcon,
  regular: SteeringWheelRegularIcon,
  thin: SteeringWheelThinIcon,
});

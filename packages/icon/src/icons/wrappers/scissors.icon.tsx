import { createIcon } from "../../hocs/create-icon.hoc";
import { ScissorsBoldIcon } from "../bold/scissors-bold.icon";
import { ScissorsDuotoneIcon } from "../duotone/scissors-duotone.icon";
import { ScissorsFillIcon } from "../fill/scissors-fill.icon";
import { ScissorsLightIcon } from "../light/scissors-light.icon";
import { ScissorsRegularIcon } from "../regular/scissors-regular.icon";
import { ScissorsThinIcon } from "../thin/scissors-thin.icon";

export const ScissorsIcon = createIcon("Scissors", {
  bold: ScissorsBoldIcon,
  duotone: ScissorsDuotoneIcon,
  fill: ScissorsFillIcon,
  light: ScissorsLightIcon,
  regular: ScissorsRegularIcon,
  thin: ScissorsThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { CubeFocusBoldIcon } from "../bold/cube-focus-bold.icon";
import { CubeFocusDuotoneIcon } from "../duotone/cube-focus-duotone.icon";
import { CubeFocusFillIcon } from "../fill/cube-focus-fill.icon";
import { CubeFocusLightIcon } from "../light/cube-focus-light.icon";
import { CubeFocusRegularIcon } from "../regular/cube-focus-regular.icon";
import { CubeFocusThinIcon } from "../thin/cube-focus-thin.icon";

export const CubeFocusIcon = createIcon("CubeFocus", {
  bold: CubeFocusBoldIcon,
  duotone: CubeFocusDuotoneIcon,
  fill: CubeFocusFillIcon,
  light: CubeFocusLightIcon,
  regular: CubeFocusRegularIcon,
  thin: CubeFocusThinIcon,
});

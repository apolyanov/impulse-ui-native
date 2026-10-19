import { createIcon } from "../../hocs/create-icon.hoc";
import { NumpadBoldIcon } from "../bold/numpad-bold.icon";
import { NumpadDuotoneIcon } from "../duotone/numpad-duotone.icon";
import { NumpadFillIcon } from "../fill/numpad-fill.icon";
import { NumpadLightIcon } from "../light/numpad-light.icon";
import { NumpadRegularIcon } from "../regular/numpad-regular.icon";
import { NumpadThinIcon } from "../thin/numpad-thin.icon";

export const NumpadIcon = createIcon("Numpad", {
  bold: NumpadBoldIcon,
  duotone: NumpadDuotoneIcon,
  fill: NumpadFillIcon,
  light: NumpadLightIcon,
  regular: NumpadRegularIcon,
  thin: NumpadThinIcon,
});

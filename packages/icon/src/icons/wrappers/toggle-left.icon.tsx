import { createIcon } from "../../hocs/create-icon.hoc";
import { ToggleLeftBoldIcon } from "../bold/toggle-left-bold.icon";
import { ToggleLeftDuotoneIcon } from "../duotone/toggle-left-duotone.icon";
import { ToggleLeftFillIcon } from "../fill/toggle-left-fill.icon";
import { ToggleLeftLightIcon } from "../light/toggle-left-light.icon";
import { ToggleLeftRegularIcon } from "../regular/toggle-left-regular.icon";
import { ToggleLeftThinIcon } from "../thin/toggle-left-thin.icon";

export const ToggleLeftIcon = createIcon("ToggleLeft", {
  bold: ToggleLeftBoldIcon,
  duotone: ToggleLeftDuotoneIcon,
  fill: ToggleLeftFillIcon,
  light: ToggleLeftLightIcon,
  regular: ToggleLeftRegularIcon,
  thin: ToggleLeftThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { ToggleRightBoldIcon } from "../bold/toggle-right-bold.icon";
import { ToggleRightDuotoneIcon } from "../duotone/toggle-right-duotone.icon";
import { ToggleRightFillIcon } from "../fill/toggle-right-fill.icon";
import { ToggleRightLightIcon } from "../light/toggle-right-light.icon";
import { ToggleRightRegularIcon } from "../regular/toggle-right-regular.icon";
import { ToggleRightThinIcon } from "../thin/toggle-right-thin.icon";

export const ToggleRightIcon = createIcon("ToggleRight", {
  bold: ToggleRightBoldIcon,
  duotone: ToggleRightDuotoneIcon,
  fill: ToggleRightFillIcon,
  light: ToggleRightLightIcon,
  regular: ToggleRightRegularIcon,
  thin: ToggleRightThinIcon,
});

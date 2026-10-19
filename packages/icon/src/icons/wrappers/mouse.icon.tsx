import { createIcon } from "../../hocs/create-icon.hoc";
import { MouseBoldIcon } from "../bold/mouse-bold.icon";
import { MouseDuotoneIcon } from "../duotone/mouse-duotone.icon";
import { MouseFillIcon } from "../fill/mouse-fill.icon";
import { MouseLightIcon } from "../light/mouse-light.icon";
import { MouseRegularIcon } from "../regular/mouse-regular.icon";
import { MouseThinIcon } from "../thin/mouse-thin.icon";

export const MouseIcon = createIcon("Mouse", {
  bold: MouseBoldIcon,
  duotone: MouseDuotoneIcon,
  fill: MouseFillIcon,
  light: MouseLightIcon,
  regular: MouseRegularIcon,
  thin: MouseThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { MouseRightClickBoldIcon } from "../bold/mouse-right-click-bold.icon";
import { MouseRightClickDuotoneIcon } from "../duotone/mouse-right-click-duotone.icon";
import { MouseRightClickFillIcon } from "../fill/mouse-right-click-fill.icon";
import { MouseRightClickLightIcon } from "../light/mouse-right-click-light.icon";
import { MouseRightClickRegularIcon } from "../regular/mouse-right-click-regular.icon";
import { MouseRightClickThinIcon } from "../thin/mouse-right-click-thin.icon";

export const MouseRightClickIcon = createIcon("MouseRightClick", {
  bold: MouseRightClickBoldIcon,
  duotone: MouseRightClickDuotoneIcon,
  fill: MouseRightClickFillIcon,
  light: MouseRightClickLightIcon,
  regular: MouseRightClickRegularIcon,
  thin: MouseRightClickThinIcon,
});

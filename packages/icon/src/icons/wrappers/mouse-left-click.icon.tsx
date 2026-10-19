import { createIcon } from "../../hocs/create-icon.hoc";
import { MouseLeftClickBoldIcon } from "../bold/mouse-left-click-bold.icon";
import { MouseLeftClickDuotoneIcon } from "../duotone/mouse-left-click-duotone.icon";
import { MouseLeftClickFillIcon } from "../fill/mouse-left-click-fill.icon";
import { MouseLeftClickLightIcon } from "../light/mouse-left-click-light.icon";
import { MouseLeftClickRegularIcon } from "../regular/mouse-left-click-regular.icon";
import { MouseLeftClickThinIcon } from "../thin/mouse-left-click-thin.icon";

export const MouseLeftClickIcon = createIcon("MouseLeftClick", {
  bold: MouseLeftClickBoldIcon,
  duotone: MouseLeftClickDuotoneIcon,
  fill: MouseLeftClickFillIcon,
  light: MouseLeftClickLightIcon,
  regular: MouseLeftClickRegularIcon,
  thin: MouseLeftClickThinIcon,
});

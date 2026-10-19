import { createIcon } from "../../hocs/create-icon.hoc";
import { MouseScrollBoldIcon } from "../bold/mouse-scroll-bold.icon";
import { MouseScrollDuotoneIcon } from "../duotone/mouse-scroll-duotone.icon";
import { MouseScrollFillIcon } from "../fill/mouse-scroll-fill.icon";
import { MouseScrollLightIcon } from "../light/mouse-scroll-light.icon";
import { MouseScrollRegularIcon } from "../regular/mouse-scroll-regular.icon";
import { MouseScrollThinIcon } from "../thin/mouse-scroll-thin.icon";

export const MouseScrollIcon = createIcon("MouseScroll", {
  bold: MouseScrollBoldIcon,
  duotone: MouseScrollDuotoneIcon,
  fill: MouseScrollFillIcon,
  light: MouseScrollLightIcon,
  regular: MouseScrollRegularIcon,
  thin: MouseScrollThinIcon,
});

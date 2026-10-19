import { createIcon } from "../../hocs/create-icon.hoc";
import { ScrollBoldIcon } from "../bold/scroll-bold.icon";
import { ScrollDuotoneIcon } from "../duotone/scroll-duotone.icon";
import { ScrollFillIcon } from "../fill/scroll-fill.icon";
import { ScrollLightIcon } from "../light/scroll-light.icon";
import { ScrollRegularIcon } from "../regular/scroll-regular.icon";
import { ScrollThinIcon } from "../thin/scroll-thin.icon";

export const ScrollIcon = createIcon("Scroll", {
  bold: ScrollBoldIcon,
  duotone: ScrollDuotoneIcon,
  fill: ScrollFillIcon,
  light: ScrollLightIcon,
  regular: ScrollRegularIcon,
  thin: ScrollThinIcon,
});

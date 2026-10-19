import { createIcon } from "../../hocs/create-icon.hoc";
import { NavigationArrowBoldIcon } from "../bold/navigation-arrow-bold.icon";
import { NavigationArrowDuotoneIcon } from "../duotone/navigation-arrow-duotone.icon";
import { NavigationArrowFillIcon } from "../fill/navigation-arrow-fill.icon";
import { NavigationArrowLightIcon } from "../light/navigation-arrow-light.icon";
import { NavigationArrowRegularIcon } from "../regular/navigation-arrow-regular.icon";
import { NavigationArrowThinIcon } from "../thin/navigation-arrow-thin.icon";

export const NavigationArrowIcon = createIcon("NavigationArrow", {
  bold: NavigationArrowBoldIcon,
  duotone: NavigationArrowDuotoneIcon,
  fill: NavigationArrowFillIcon,
  light: NavigationArrowLightIcon,
  regular: NavigationArrowRegularIcon,
  thin: NavigationArrowThinIcon,
});

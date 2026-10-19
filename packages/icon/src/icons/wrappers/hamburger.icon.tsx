import { createIcon } from "../../hocs/create-icon.hoc";
import { HamburgerBoldIcon } from "../bold/hamburger-bold.icon";
import { HamburgerDuotoneIcon } from "../duotone/hamburger-duotone.icon";
import { HamburgerFillIcon } from "../fill/hamburger-fill.icon";
import { HamburgerLightIcon } from "../light/hamburger-light.icon";
import { HamburgerRegularIcon } from "../regular/hamburger-regular.icon";
import { HamburgerThinIcon } from "../thin/hamburger-thin.icon";

export const HamburgerIcon = createIcon("Hamburger", {
  bold: HamburgerBoldIcon,
  duotone: HamburgerDuotoneIcon,
  fill: HamburgerFillIcon,
  light: HamburgerLightIcon,
  regular: HamburgerRegularIcon,
  thin: HamburgerThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { CowboyHatBoldIcon } from "../bold/cowboy-hat-bold.icon";
import { CowboyHatDuotoneIcon } from "../duotone/cowboy-hat-duotone.icon";
import { CowboyHatFillIcon } from "../fill/cowboy-hat-fill.icon";
import { CowboyHatLightIcon } from "../light/cowboy-hat-light.icon";
import { CowboyHatRegularIcon } from "../regular/cowboy-hat-regular.icon";
import { CowboyHatThinIcon } from "../thin/cowboy-hat-thin.icon";

export const CowboyHatIcon = createIcon("CowboyHat", {
  bold: CowboyHatBoldIcon,
  duotone: CowboyHatDuotoneIcon,
  fill: CowboyHatFillIcon,
  light: CowboyHatLightIcon,
  regular: CowboyHatRegularIcon,
  thin: CowboyHatThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { HardHatBoldIcon } from "../bold/hard-hat-bold.icon";
import { HardHatDuotoneIcon } from "../duotone/hard-hat-duotone.icon";
import { HardHatFillIcon } from "../fill/hard-hat-fill.icon";
import { HardHatLightIcon } from "../light/hard-hat-light.icon";
import { HardHatRegularIcon } from "../regular/hard-hat-regular.icon";
import { HardHatThinIcon } from "../thin/hard-hat-thin.icon";

export const HardHatIcon = createIcon("HardHat", {
  bold: HardHatBoldIcon,
  duotone: HardHatDuotoneIcon,
  fill: HardHatFillIcon,
  light: HardHatLightIcon,
  regular: HardHatRegularIcon,
  thin: HardHatThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { BiohazardBoldIcon } from "../bold/biohazard-bold.icon";
import { BiohazardDuotoneIcon } from "../duotone/biohazard-duotone.icon";
import { BiohazardFillIcon } from "../fill/biohazard-fill.icon";
import { BiohazardLightIcon } from "../light/biohazard-light.icon";
import { BiohazardRegularIcon } from "../regular/biohazard-regular.icon";
import { BiohazardThinIcon } from "../thin/biohazard-thin.icon";

export const BiohazardIcon = createIcon("Biohazard", {
  bold: BiohazardBoldIcon,
  duotone: BiohazardDuotoneIcon,
  fill: BiohazardFillIcon,
  light: BiohazardLightIcon,
  regular: BiohazardRegularIcon,
  thin: BiohazardThinIcon,
});

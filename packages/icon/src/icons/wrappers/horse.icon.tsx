import { createIcon } from "../../hocs/create-icon.hoc";
import { HorseBoldIcon } from "../bold/horse-bold.icon";
import { HorseDuotoneIcon } from "../duotone/horse-duotone.icon";
import { HorseFillIcon } from "../fill/horse-fill.icon";
import { HorseLightIcon } from "../light/horse-light.icon";
import { HorseRegularIcon } from "../regular/horse-regular.icon";
import { HorseThinIcon } from "../thin/horse-thin.icon";

export const HorseIcon = createIcon("Horse", {
  bold: HorseBoldIcon,
  duotone: HorseDuotoneIcon,
  fill: HorseFillIcon,
  light: HorseLightIcon,
  regular: HorseRegularIcon,
  thin: HorseThinIcon,
});

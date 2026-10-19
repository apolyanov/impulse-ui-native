import { createIcon } from "../../hocs/create-icon.hoc";
import { EggBoldIcon } from "../bold/egg-bold.icon";
import { EggDuotoneIcon } from "../duotone/egg-duotone.icon";
import { EggFillIcon } from "../fill/egg-fill.icon";
import { EggLightIcon } from "../light/egg-light.icon";
import { EggRegularIcon } from "../regular/egg-regular.icon";
import { EggThinIcon } from "../thin/egg-thin.icon";

export const EggIcon = createIcon("Egg", {
  bold: EggBoldIcon,
  duotone: EggDuotoneIcon,
  fill: EggFillIcon,
  light: EggLightIcon,
  regular: EggRegularIcon,
  thin: EggThinIcon,
});

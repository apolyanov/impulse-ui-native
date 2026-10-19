import { createIcon } from "../../hocs/create-icon.hoc";
import { EggCrackBoldIcon } from "../bold/egg-crack-bold.icon";
import { EggCrackDuotoneIcon } from "../duotone/egg-crack-duotone.icon";
import { EggCrackFillIcon } from "../fill/egg-crack-fill.icon";
import { EggCrackLightIcon } from "../light/egg-crack-light.icon";
import { EggCrackRegularIcon } from "../regular/egg-crack-regular.icon";
import { EggCrackThinIcon } from "../thin/egg-crack-thin.icon";

export const EggCrackIcon = createIcon("EggCrack", {
  bold: EggCrackBoldIcon,
  duotone: EggCrackDuotoneIcon,
  fill: EggCrackFillIcon,
  light: EggCrackLightIcon,
  regular: EggCrackRegularIcon,
  thin: EggCrackThinIcon,
});

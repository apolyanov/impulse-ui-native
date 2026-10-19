import { createIcon } from "../../hocs/create-icon.hoc";
import { SunBoldIcon } from "../bold/sun-bold.icon";
import { SunDuotoneIcon } from "../duotone/sun-duotone.icon";
import { SunFillIcon } from "../fill/sun-fill.icon";
import { SunLightIcon } from "../light/sun-light.icon";
import { SunRegularIcon } from "../regular/sun-regular.icon";
import { SunThinIcon } from "../thin/sun-thin.icon";

export const SunIcon = createIcon("Sun", {
  bold: SunBoldIcon,
  duotone: SunDuotoneIcon,
  fill: SunFillIcon,
  light: SunLightIcon,
  regular: SunRegularIcon,
  thin: SunThinIcon,
});

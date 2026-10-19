import { createIcon } from "../../hocs/create-icon.hoc";
import { SunHorizonBoldIcon } from "../bold/sun-horizon-bold.icon";
import { SunHorizonDuotoneIcon } from "../duotone/sun-horizon-duotone.icon";
import { SunHorizonFillIcon } from "../fill/sun-horizon-fill.icon";
import { SunHorizonLightIcon } from "../light/sun-horizon-light.icon";
import { SunHorizonRegularIcon } from "../regular/sun-horizon-regular.icon";
import { SunHorizonThinIcon } from "../thin/sun-horizon-thin.icon";

export const SunHorizonIcon = createIcon("SunHorizon", {
  bold: SunHorizonBoldIcon,
  duotone: SunHorizonDuotoneIcon,
  fill: SunHorizonFillIcon,
  light: SunHorizonLightIcon,
  regular: SunHorizonRegularIcon,
  thin: SunHorizonThinIcon,
});

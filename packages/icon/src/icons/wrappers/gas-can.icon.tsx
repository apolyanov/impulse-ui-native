import { createIcon } from "../../hocs/create-icon.hoc";
import { GasCanBoldIcon } from "../bold/gas-can-bold.icon";
import { GasCanDuotoneIcon } from "../duotone/gas-can-duotone.icon";
import { GasCanFillIcon } from "../fill/gas-can-fill.icon";
import { GasCanLightIcon } from "../light/gas-can-light.icon";
import { GasCanRegularIcon } from "../regular/gas-can-regular.icon";
import { GasCanThinIcon } from "../thin/gas-can-thin.icon";

export const GasCanIcon = createIcon("GasCan", {
  bold: GasCanBoldIcon,
  duotone: GasCanDuotoneIcon,
  fill: GasCanFillIcon,
  light: GasCanLightIcon,
  regular: GasCanRegularIcon,
  thin: GasCanThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { GasPumpBoldIcon } from "../bold/gas-pump-bold.icon";
import { GasPumpDuotoneIcon } from "../duotone/gas-pump-duotone.icon";
import { GasPumpFillIcon } from "../fill/gas-pump-fill.icon";
import { GasPumpLightIcon } from "../light/gas-pump-light.icon";
import { GasPumpRegularIcon } from "../regular/gas-pump-regular.icon";
import { GasPumpThinIcon } from "../thin/gas-pump-thin.icon";

export const GasPumpIcon = createIcon("GasPump", {
  bold: GasPumpBoldIcon,
  duotone: GasPumpDuotoneIcon,
  fill: GasPumpFillIcon,
  light: GasPumpLightIcon,
  regular: GasPumpRegularIcon,
  thin: GasPumpThinIcon,
});

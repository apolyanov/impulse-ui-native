import { createIcon } from "../../hocs/create-icon.hoc";
import { GavelBoldIcon } from "../bold/gavel-bold.icon";
import { GavelDuotoneIcon } from "../duotone/gavel-duotone.icon";
import { GavelFillIcon } from "../fill/gavel-fill.icon";
import { GavelLightIcon } from "../light/gavel-light.icon";
import { GavelRegularIcon } from "../regular/gavel-regular.icon";
import { GavelThinIcon } from "../thin/gavel-thin.icon";

export const GavelIcon = createIcon("Gavel", {
  bold: GavelBoldIcon,
  duotone: GavelDuotoneIcon,
  fill: GavelFillIcon,
  light: GavelLightIcon,
  regular: GavelRegularIcon,
  thin: GavelThinIcon,
});

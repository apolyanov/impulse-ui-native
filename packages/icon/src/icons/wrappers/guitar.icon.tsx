import { createIcon } from "../../hocs/create-icon.hoc";
import { GuitarBoldIcon } from "../bold/guitar-bold.icon";
import { GuitarDuotoneIcon } from "../duotone/guitar-duotone.icon";
import { GuitarFillIcon } from "../fill/guitar-fill.icon";
import { GuitarLightIcon } from "../light/guitar-light.icon";
import { GuitarRegularIcon } from "../regular/guitar-regular.icon";
import { GuitarThinIcon } from "../thin/guitar-thin.icon";

export const GuitarIcon = createIcon("Guitar", {
  bold: GuitarBoldIcon,
  duotone: GuitarDuotoneIcon,
  fill: GuitarFillIcon,
  light: GuitarLightIcon,
  regular: GuitarRegularIcon,
  thin: GuitarThinIcon,
});

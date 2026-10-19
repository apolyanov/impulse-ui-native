import { createIcon } from "../../hocs/create-icon.hoc";
import { SwatchesBoldIcon } from "../bold/swatches-bold.icon";
import { SwatchesDuotoneIcon } from "../duotone/swatches-duotone.icon";
import { SwatchesFillIcon } from "../fill/swatches-fill.icon";
import { SwatchesLightIcon } from "../light/swatches-light.icon";
import { SwatchesRegularIcon } from "../regular/swatches-regular.icon";
import { SwatchesThinIcon } from "../thin/swatches-thin.icon";

export const SwatchesIcon = createIcon("Swatches", {
  bold: SwatchesBoldIcon,
  duotone: SwatchesDuotoneIcon,
  fill: SwatchesFillIcon,
  light: SwatchesLightIcon,
  regular: SwatchesRegularIcon,
  thin: SwatchesThinIcon,
});

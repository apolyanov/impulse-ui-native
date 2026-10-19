import { createIcon } from "../../hocs/create-icon.hoc";
import { EarBoldIcon } from "../bold/ear-bold.icon";
import { EarDuotoneIcon } from "../duotone/ear-duotone.icon";
import { EarFillIcon } from "../fill/ear-fill.icon";
import { EarLightIcon } from "../light/ear-light.icon";
import { EarRegularIcon } from "../regular/ear-regular.icon";
import { EarThinIcon } from "../thin/ear-thin.icon";

export const EarIcon = createIcon("Ear", {
  bold: EarBoldIcon,
  duotone: EarDuotoneIcon,
  fill: EarFillIcon,
  light: EarLightIcon,
  regular: EarRegularIcon,
  thin: EarThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { BarnBoldIcon } from "../bold/barn-bold.icon";
import { BarnDuotoneIcon } from "../duotone/barn-duotone.icon";
import { BarnFillIcon } from "../fill/barn-fill.icon";
import { BarnLightIcon } from "../light/barn-light.icon";
import { BarnRegularIcon } from "../regular/barn-regular.icon";
import { BarnThinIcon } from "../thin/barn-thin.icon";

export const BarnIcon = createIcon("Barn", {
  bold: BarnBoldIcon,
  duotone: BarnDuotoneIcon,
  fill: BarnFillIcon,
  light: BarnLightIcon,
  regular: BarnRegularIcon,
  thin: BarnThinIcon,
});

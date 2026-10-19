import { createIcon } from "../../hocs/create-icon.hoc";
import { BoulesBoldIcon } from "../bold/boules-bold.icon";
import { BoulesDuotoneIcon } from "../duotone/boules-duotone.icon";
import { BoulesFillIcon } from "../fill/boules-fill.icon";
import { BoulesLightIcon } from "../light/boules-light.icon";
import { BoulesRegularIcon } from "../regular/boules-regular.icon";
import { BoulesThinIcon } from "../thin/boules-thin.icon";

export const BoulesIcon = createIcon("Boules", {
  bold: BoulesBoldIcon,
  duotone: BoulesDuotoneIcon,
  fill: BoulesFillIcon,
  light: BoulesLightIcon,
  regular: BoulesRegularIcon,
  thin: BoulesThinIcon,
});

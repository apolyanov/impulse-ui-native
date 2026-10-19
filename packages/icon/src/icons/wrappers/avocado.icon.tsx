import { createIcon } from "../../hocs/create-icon.hoc";
import { AvocadoBoldIcon } from "../bold/avocado-bold.icon";
import { AvocadoDuotoneIcon } from "../duotone/avocado-duotone.icon";
import { AvocadoFillIcon } from "../fill/avocado-fill.icon";
import { AvocadoLightIcon } from "../light/avocado-light.icon";
import { AvocadoRegularIcon } from "../regular/avocado-regular.icon";
import { AvocadoThinIcon } from "../thin/avocado-thin.icon";

export const AvocadoIcon = createIcon("Avocado", {
  bold: AvocadoBoldIcon,
  duotone: AvocadoDuotoneIcon,
  fill: AvocadoFillIcon,
  light: AvocadoLightIcon,
  regular: AvocadoRegularIcon,
  thin: AvocadoThinIcon,
});

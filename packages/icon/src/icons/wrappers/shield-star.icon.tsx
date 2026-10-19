import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldStarBoldIcon } from "../bold/shield-star-bold.icon";
import { ShieldStarDuotoneIcon } from "../duotone/shield-star-duotone.icon";
import { ShieldStarFillIcon } from "../fill/shield-star-fill.icon";
import { ShieldStarLightIcon } from "../light/shield-star-light.icon";
import { ShieldStarRegularIcon } from "../regular/shield-star-regular.icon";
import { ShieldStarThinIcon } from "../thin/shield-star-thin.icon";

export const ShieldStarIcon = createIcon("ShieldStar", {
  bold: ShieldStarBoldIcon,
  duotone: ShieldStarDuotoneIcon,
  fill: ShieldStarFillIcon,
  light: ShieldStarLightIcon,
  regular: ShieldStarRegularIcon,
  thin: ShieldStarThinIcon,
});

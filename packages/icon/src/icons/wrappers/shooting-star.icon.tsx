import { createIcon } from "../../hocs/create-icon.hoc";
import { ShootingStarBoldIcon } from "../bold/shooting-star-bold.icon";
import { ShootingStarDuotoneIcon } from "../duotone/shooting-star-duotone.icon";
import { ShootingStarFillIcon } from "../fill/shooting-star-fill.icon";
import { ShootingStarLightIcon } from "../light/shooting-star-light.icon";
import { ShootingStarRegularIcon } from "../regular/shooting-star-regular.icon";
import { ShootingStarThinIcon } from "../thin/shooting-star-thin.icon";

export const ShootingStarIcon = createIcon("ShootingStar", {
  bold: ShootingStarBoldIcon,
  duotone: ShootingStarDuotoneIcon,
  fill: ShootingStarFillIcon,
  light: ShootingStarLightIcon,
  regular: ShootingStarRegularIcon,
  thin: ShootingStarThinIcon,
});

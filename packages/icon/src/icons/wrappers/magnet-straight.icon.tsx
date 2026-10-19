import { createIcon } from "../../hocs/create-icon.hoc";
import { MagnetStraightBoldIcon } from "../bold/magnet-straight-bold.icon";
import { MagnetStraightDuotoneIcon } from "../duotone/magnet-straight-duotone.icon";
import { MagnetStraightFillIcon } from "../fill/magnet-straight-fill.icon";
import { MagnetStraightLightIcon } from "../light/magnet-straight-light.icon";
import { MagnetStraightRegularIcon } from "../regular/magnet-straight-regular.icon";
import { MagnetStraightThinIcon } from "../thin/magnet-straight-thin.icon";

export const MagnetStraightIcon = createIcon("MagnetStraight", {
  bold: MagnetStraightBoldIcon,
  duotone: MagnetStraightDuotoneIcon,
  fill: MagnetStraightFillIcon,
  light: MagnetStraightLightIcon,
  regular: MagnetStraightRegularIcon,
  thin: MagnetStraightThinIcon,
});

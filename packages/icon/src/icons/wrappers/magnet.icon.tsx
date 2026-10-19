import { createIcon } from "../../hocs/create-icon.hoc";
import { MagnetBoldIcon } from "../bold/magnet-bold.icon";
import { MagnetDuotoneIcon } from "../duotone/magnet-duotone.icon";
import { MagnetFillIcon } from "../fill/magnet-fill.icon";
import { MagnetLightIcon } from "../light/magnet-light.icon";
import { MagnetRegularIcon } from "../regular/magnet-regular.icon";
import { MagnetThinIcon } from "../thin/magnet-thin.icon";

export const MagnetIcon = createIcon("Magnet", {
  bold: MagnetBoldIcon,
  duotone: MagnetDuotoneIcon,
  fill: MagnetFillIcon,
  light: MagnetLightIcon,
  regular: MagnetRegularIcon,
  thin: MagnetThinIcon,
});

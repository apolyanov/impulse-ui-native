import { createIcon } from "../../hocs/create-icon.hoc";
import { WifiMediumBoldIcon } from "../bold/wifi-medium-bold.icon";
import { WifiMediumDuotoneIcon } from "../duotone/wifi-medium-duotone.icon";
import { WifiMediumFillIcon } from "../fill/wifi-medium-fill.icon";
import { WifiMediumLightIcon } from "../light/wifi-medium-light.icon";
import { WifiMediumRegularIcon } from "../regular/wifi-medium-regular.icon";
import { WifiMediumThinIcon } from "../thin/wifi-medium-thin.icon";

export const WifiMediumIcon = createIcon("WifiMedium", {
  bold: WifiMediumBoldIcon,
  duotone: WifiMediumDuotoneIcon,
  fill: WifiMediumFillIcon,
  light: WifiMediumLightIcon,
  regular: WifiMediumRegularIcon,
  thin: WifiMediumThinIcon,
});

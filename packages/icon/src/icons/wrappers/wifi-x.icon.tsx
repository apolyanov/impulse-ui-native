import { createIcon } from "../../hocs/create-icon.hoc";
import { WifiXBoldIcon } from "../bold/wifi-x-bold.icon";
import { WifiXDuotoneIcon } from "../duotone/wifi-x-duotone.icon";
import { WifiXFillIcon } from "../fill/wifi-x-fill.icon";
import { WifiXLightIcon } from "../light/wifi-x-light.icon";
import { WifiXRegularIcon } from "../regular/wifi-x-regular.icon";
import { WifiXThinIcon } from "../thin/wifi-x-thin.icon";

export const WifiXIcon = createIcon("WifiX", {
  bold: WifiXBoldIcon,
  duotone: WifiXDuotoneIcon,
  fill: WifiXFillIcon,
  light: WifiXLightIcon,
  regular: WifiXRegularIcon,
  thin: WifiXThinIcon,
});

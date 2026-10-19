import { createIcon } from "../../hocs/create-icon.hoc";
import { WifiHighBoldIcon } from "../bold/wifi-high-bold.icon";
import { WifiHighDuotoneIcon } from "../duotone/wifi-high-duotone.icon";
import { WifiHighFillIcon } from "../fill/wifi-high-fill.icon";
import { WifiHighLightIcon } from "../light/wifi-high-light.icon";
import { WifiHighRegularIcon } from "../regular/wifi-high-regular.icon";
import { WifiHighThinIcon } from "../thin/wifi-high-thin.icon";

export const WifiHighIcon = createIcon("WifiHigh", {
  bold: WifiHighBoldIcon,
  duotone: WifiHighDuotoneIcon,
  fill: WifiHighFillIcon,
  light: WifiHighLightIcon,
  regular: WifiHighRegularIcon,
  thin: WifiHighThinIcon,
});

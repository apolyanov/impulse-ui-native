import { createIcon } from "../../hocs/create-icon.hoc";
import { WifiLowBoldIcon } from "../bold/wifi-low-bold.icon";
import { WifiLowDuotoneIcon } from "../duotone/wifi-low-duotone.icon";
import { WifiLowFillIcon } from "../fill/wifi-low-fill.icon";
import { WifiLowLightIcon } from "../light/wifi-low-light.icon";
import { WifiLowRegularIcon } from "../regular/wifi-low-regular.icon";
import { WifiLowThinIcon } from "../thin/wifi-low-thin.icon";

export const WifiLowIcon = createIcon("WifiLow", {
  bold: WifiLowBoldIcon,
  duotone: WifiLowDuotoneIcon,
  fill: WifiLowFillIcon,
  light: WifiLowLightIcon,
  regular: WifiLowRegularIcon,
  thin: WifiLowThinIcon,
});

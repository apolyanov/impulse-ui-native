import { createIcon } from "../../hocs/create-icon.hoc";
import { WifiNoneBoldIcon } from "../bold/wifi-none-bold.icon";
import { WifiNoneDuotoneIcon } from "../duotone/wifi-none-duotone.icon";
import { WifiNoneFillIcon } from "../fill/wifi-none-fill.icon";
import { WifiNoneLightIcon } from "../light/wifi-none-light.icon";
import { WifiNoneRegularIcon } from "../regular/wifi-none-regular.icon";
import { WifiNoneThinIcon } from "../thin/wifi-none-thin.icon";

export const WifiNoneIcon = createIcon("WifiNone", {
  bold: WifiNoneBoldIcon,
  duotone: WifiNoneDuotoneIcon,
  fill: WifiNoneFillIcon,
  light: WifiNoneLightIcon,
  regular: WifiNoneRegularIcon,
  thin: WifiNoneThinIcon,
});

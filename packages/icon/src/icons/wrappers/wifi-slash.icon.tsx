import { createIcon } from "../../hocs/create-icon.hoc";
import { WifiSlashBoldIcon } from "../bold/wifi-slash-bold.icon";
import { WifiSlashDuotoneIcon } from "../duotone/wifi-slash-duotone.icon";
import { WifiSlashFillIcon } from "../fill/wifi-slash-fill.icon";
import { WifiSlashLightIcon } from "../light/wifi-slash-light.icon";
import { WifiSlashRegularIcon } from "../regular/wifi-slash-regular.icon";
import { WifiSlashThinIcon } from "../thin/wifi-slash-thin.icon";

export const WifiSlashIcon = createIcon("WifiSlash", {
  bold: WifiSlashBoldIcon,
  duotone: WifiSlashDuotoneIcon,
  fill: WifiSlashFillIcon,
  light: WifiSlashLightIcon,
  regular: WifiSlashRegularIcon,
  thin: WifiSlashThinIcon,
});

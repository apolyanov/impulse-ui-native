import { createIcon } from "../../hocs/create-icon.hoc";
import { NetworkSlashBoldIcon } from "../bold/network-slash-bold.icon";
import { NetworkSlashDuotoneIcon } from "../duotone/network-slash-duotone.icon";
import { NetworkSlashFillIcon } from "../fill/network-slash-fill.icon";
import { NetworkSlashLightIcon } from "../light/network-slash-light.icon";
import { NetworkSlashRegularIcon } from "../regular/network-slash-regular.icon";
import { NetworkSlashThinIcon } from "../thin/network-slash-thin.icon";

export const NetworkSlashIcon = createIcon("NetworkSlash", {
  bold: NetworkSlashBoldIcon,
  duotone: NetworkSlashDuotoneIcon,
  fill: NetworkSlashFillIcon,
  light: NetworkSlashLightIcon,
  regular: NetworkSlashRegularIcon,
  thin: NetworkSlashThinIcon,
});

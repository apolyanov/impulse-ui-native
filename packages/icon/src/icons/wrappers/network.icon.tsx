import { createIcon } from "../../hocs/create-icon.hoc";
import { NetworkBoldIcon } from "../bold/network-bold.icon";
import { NetworkDuotoneIcon } from "../duotone/network-duotone.icon";
import { NetworkFillIcon } from "../fill/network-fill.icon";
import { NetworkLightIcon } from "../light/network-light.icon";
import { NetworkRegularIcon } from "../regular/network-regular.icon";
import { NetworkThinIcon } from "../thin/network-thin.icon";

export const NetworkIcon = createIcon("Network", {
  bold: NetworkBoldIcon,
  duotone: NetworkDuotoneIcon,
  fill: NetworkFillIcon,
  light: NetworkLightIcon,
  regular: NetworkRegularIcon,
  thin: NetworkThinIcon,
});

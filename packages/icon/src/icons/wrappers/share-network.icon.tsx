import { createIcon } from "../../hocs/create-icon.hoc";
import { ShareNetworkBoldIcon } from "../bold/share-network-bold.icon";
import { ShareNetworkDuotoneIcon } from "../duotone/share-network-duotone.icon";
import { ShareNetworkFillIcon } from "../fill/share-network-fill.icon";
import { ShareNetworkLightIcon } from "../light/share-network-light.icon";
import { ShareNetworkRegularIcon } from "../regular/share-network-regular.icon";
import { ShareNetworkThinIcon } from "../thin/share-network-thin.icon";

export const ShareNetworkIcon = createIcon("ShareNetwork", {
  bold: ShareNetworkBoldIcon,
  duotone: ShareNetworkDuotoneIcon,
  fill: ShareNetworkFillIcon,
  light: ShareNetworkLightIcon,
  regular: ShareNetworkRegularIcon,
  thin: ShareNetworkThinIcon,
});

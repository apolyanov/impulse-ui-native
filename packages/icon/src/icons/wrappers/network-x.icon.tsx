import { createIcon } from "../../hocs/create-icon.hoc";
import { NetworkXBoldIcon } from "../bold/network-x-bold.icon";
import { NetworkXDuotoneIcon } from "../duotone/network-x-duotone.icon";
import { NetworkXFillIcon } from "../fill/network-x-fill.icon";
import { NetworkXLightIcon } from "../light/network-x-light.icon";
import { NetworkXRegularIcon } from "../regular/network-x-regular.icon";
import { NetworkXThinIcon } from "../thin/network-x-thin.icon";

export const NetworkXIcon = createIcon("NetworkX", {
  bold: NetworkXBoldIcon,
  duotone: NetworkXDuotoneIcon,
  fill: NetworkXFillIcon,
  light: NetworkXLightIcon,
  regular: NetworkXRegularIcon,
  thin: NetworkXThinIcon,
});

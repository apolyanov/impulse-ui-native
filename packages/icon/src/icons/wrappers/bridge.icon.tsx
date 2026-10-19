import { createIcon } from "../../hocs/create-icon.hoc";
import { BridgeBoldIcon } from "../bold/bridge-bold.icon";
import { BridgeDuotoneIcon } from "../duotone/bridge-duotone.icon";
import { BridgeFillIcon } from "../fill/bridge-fill.icon";
import { BridgeLightIcon } from "../light/bridge-light.icon";
import { BridgeRegularIcon } from "../regular/bridge-regular.icon";
import { BridgeThinIcon } from "../thin/bridge-thin.icon";

export const BridgeIcon = createIcon("Bridge", {
  bold: BridgeBoldIcon,
  duotone: BridgeDuotoneIcon,
  fill: BridgeFillIcon,
  light: BridgeLightIcon,
  regular: BridgeRegularIcon,
  thin: BridgeThinIcon,
});

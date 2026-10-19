import { createIcon } from "../../hocs/create-icon.hoc";
import { PlugsConnectedBoldIcon } from "../bold/plugs-connected-bold.icon";
import { PlugsConnectedDuotoneIcon } from "../duotone/plugs-connected-duotone.icon";
import { PlugsConnectedFillIcon } from "../fill/plugs-connected-fill.icon";
import { PlugsConnectedLightIcon } from "../light/plugs-connected-light.icon";
import { PlugsConnectedRegularIcon } from "../regular/plugs-connected-regular.icon";
import { PlugsConnectedThinIcon } from "../thin/plugs-connected-thin.icon";

export const PlugsConnectedIcon = createIcon("PlugsConnected", {
  bold: PlugsConnectedBoldIcon,
  duotone: PlugsConnectedDuotoneIcon,
  fill: PlugsConnectedFillIcon,
  light: PlugsConnectedLightIcon,
  regular: PlugsConnectedRegularIcon,
  thin: PlugsConnectedThinIcon,
});

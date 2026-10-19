import { createIcon } from "../../hocs/create-icon.hoc";
import { BroadcastBoldIcon } from "../bold/broadcast-bold.icon";
import { BroadcastDuotoneIcon } from "../duotone/broadcast-duotone.icon";
import { BroadcastFillIcon } from "../fill/broadcast-fill.icon";
import { BroadcastLightIcon } from "../light/broadcast-light.icon";
import { BroadcastRegularIcon } from "../regular/broadcast-regular.icon";
import { BroadcastThinIcon } from "../thin/broadcast-thin.icon";

export const BroadcastIcon = createIcon("Broadcast", {
  bold: BroadcastBoldIcon,
  duotone: BroadcastDuotoneIcon,
  fill: BroadcastFillIcon,
  light: BroadcastLightIcon,
  regular: BroadcastRegularIcon,
  thin: BroadcastThinIcon,
});

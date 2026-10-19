import { createIcon } from "../../hocs/create-icon.hoc";
import { HeartbeatBoldIcon } from "../bold/heartbeat-bold.icon";
import { HeartbeatDuotoneIcon } from "../duotone/heartbeat-duotone.icon";
import { HeartbeatFillIcon } from "../fill/heartbeat-fill.icon";
import { HeartbeatLightIcon } from "../light/heartbeat-light.icon";
import { HeartbeatRegularIcon } from "../regular/heartbeat-regular.icon";
import { HeartbeatThinIcon } from "../thin/heartbeat-thin.icon";

export const HeartbeatIcon = createIcon("Heartbeat", {
  bold: HeartbeatBoldIcon,
  duotone: HeartbeatDuotoneIcon,
  fill: HeartbeatFillIcon,
  light: HeartbeatLightIcon,
  regular: HeartbeatRegularIcon,
  thin: HeartbeatThinIcon,
});

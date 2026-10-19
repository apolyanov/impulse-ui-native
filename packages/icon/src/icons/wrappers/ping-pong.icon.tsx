import { createIcon } from "../../hocs/create-icon.hoc";
import { PingPongBoldIcon } from "../bold/ping-pong-bold.icon";
import { PingPongDuotoneIcon } from "../duotone/ping-pong-duotone.icon";
import { PingPongFillIcon } from "../fill/ping-pong-fill.icon";
import { PingPongLightIcon } from "../light/ping-pong-light.icon";
import { PingPongRegularIcon } from "../regular/ping-pong-regular.icon";
import { PingPongThinIcon } from "../thin/ping-pong-thin.icon";

export const PingPongIcon = createIcon("PingPong", {
  bold: PingPongBoldIcon,
  duotone: PingPongDuotoneIcon,
  fill: PingPongFillIcon,
  light: PingPongLightIcon,
  regular: PingPongRegularIcon,
  thin: PingPongThinIcon,
});

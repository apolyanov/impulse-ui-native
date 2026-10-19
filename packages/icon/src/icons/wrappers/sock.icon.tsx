import { createIcon } from "../../hocs/create-icon.hoc";
import { SockBoldIcon } from "../bold/sock-bold.icon";
import { SockDuotoneIcon } from "../duotone/sock-duotone.icon";
import { SockFillIcon } from "../fill/sock-fill.icon";
import { SockLightIcon } from "../light/sock-light.icon";
import { SockRegularIcon } from "../regular/sock-regular.icon";
import { SockThinIcon } from "../thin/sock-thin.icon";

export const SockIcon = createIcon("Sock", {
  bold: SockBoldIcon,
  duotone: SockDuotoneIcon,
  fill: SockFillIcon,
  light: SockLightIcon,
  regular: SockRegularIcon,
  thin: SockThinIcon,
});

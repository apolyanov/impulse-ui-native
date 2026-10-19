import { createIcon } from "../../hocs/create-icon.hoc";
import { FunnelXBoldIcon } from "../bold/funnel-x-bold.icon";
import { FunnelXDuotoneIcon } from "../duotone/funnel-x-duotone.icon";
import { FunnelXFillIcon } from "../fill/funnel-x-fill.icon";
import { FunnelXLightIcon } from "../light/funnel-x-light.icon";
import { FunnelXRegularIcon } from "../regular/funnel-x-regular.icon";
import { FunnelXThinIcon } from "../thin/funnel-x-thin.icon";

export const FunnelXIcon = createIcon("FunnelX", {
  bold: FunnelXBoldIcon,
  duotone: FunnelXDuotoneIcon,
  fill: FunnelXFillIcon,
  light: FunnelXLightIcon,
  regular: FunnelXRegularIcon,
  thin: FunnelXThinIcon,
});

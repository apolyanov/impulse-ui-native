import { createIcon } from "../../hocs/create-icon.hoc";
import { FunnelBoldIcon } from "../bold/funnel-bold.icon";
import { FunnelDuotoneIcon } from "../duotone/funnel-duotone.icon";
import { FunnelFillIcon } from "../fill/funnel-fill.icon";
import { FunnelLightIcon } from "../light/funnel-light.icon";
import { FunnelRegularIcon } from "../regular/funnel-regular.icon";
import { FunnelThinIcon } from "../thin/funnel-thin.icon";

export const FunnelIcon = createIcon("Funnel", {
  bold: FunnelBoldIcon,
  duotone: FunnelDuotoneIcon,
  fill: FunnelFillIcon,
  light: FunnelLightIcon,
  regular: FunnelRegularIcon,
  thin: FunnelThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { FunnelSimpleBoldIcon } from "../bold/funnel-simple-bold.icon";
import { FunnelSimpleDuotoneIcon } from "../duotone/funnel-simple-duotone.icon";
import { FunnelSimpleFillIcon } from "../fill/funnel-simple-fill.icon";
import { FunnelSimpleLightIcon } from "../light/funnel-simple-light.icon";
import { FunnelSimpleRegularIcon } from "../regular/funnel-simple-regular.icon";
import { FunnelSimpleThinIcon } from "../thin/funnel-simple-thin.icon";

export const FunnelSimpleIcon = createIcon("FunnelSimple", {
  bold: FunnelSimpleBoldIcon,
  duotone: FunnelSimpleDuotoneIcon,
  fill: FunnelSimpleFillIcon,
  light: FunnelSimpleLightIcon,
  regular: FunnelSimpleRegularIcon,
  thin: FunnelSimpleThinIcon,
});

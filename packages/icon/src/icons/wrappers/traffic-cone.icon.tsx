import { createIcon } from "../../hocs/create-icon.hoc";
import { TrafficConeBoldIcon } from "../bold/traffic-cone-bold.icon";
import { TrafficConeDuotoneIcon } from "../duotone/traffic-cone-duotone.icon";
import { TrafficConeFillIcon } from "../fill/traffic-cone-fill.icon";
import { TrafficConeLightIcon } from "../light/traffic-cone-light.icon";
import { TrafficConeRegularIcon } from "../regular/traffic-cone-regular.icon";
import { TrafficConeThinIcon } from "../thin/traffic-cone-thin.icon";

export const TrafficConeIcon = createIcon("TrafficCone", {
  bold: TrafficConeBoldIcon,
  duotone: TrafficConeDuotoneIcon,
  fill: TrafficConeFillIcon,
  light: TrafficConeLightIcon,
  regular: TrafficConeRegularIcon,
  thin: TrafficConeThinIcon,
});

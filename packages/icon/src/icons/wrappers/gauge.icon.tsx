import { createIcon } from "../../hocs/create-icon.hoc";
import { GaugeBoldIcon } from "../bold/gauge-bold.icon";
import { GaugeDuotoneIcon } from "../duotone/gauge-duotone.icon";
import { GaugeFillIcon } from "../fill/gauge-fill.icon";
import { GaugeLightIcon } from "../light/gauge-light.icon";
import { GaugeRegularIcon } from "../regular/gauge-regular.icon";
import { GaugeThinIcon } from "../thin/gauge-thin.icon";

export const GaugeIcon = createIcon("Gauge", {
  bold: GaugeBoldIcon,
  duotone: GaugeDuotoneIcon,
  fill: GaugeFillIcon,
  light: GaugeLightIcon,
  regular: GaugeRegularIcon,
  thin: GaugeThinIcon,
});

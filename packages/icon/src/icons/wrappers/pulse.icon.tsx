import { createIcon } from "../../hocs/create-icon.hoc";
import { PulseBoldIcon } from "../bold/pulse-bold.icon";
import { PulseDuotoneIcon } from "../duotone/pulse-duotone.icon";
import { PulseFillIcon } from "../fill/pulse-fill.icon";
import { PulseLightIcon } from "../light/pulse-light.icon";
import { PulseRegularIcon } from "../regular/pulse-regular.icon";
import { PulseThinIcon } from "../thin/pulse-thin.icon";

export const PulseIcon = createIcon("Pulse", {
  bold: PulseBoldIcon,
  duotone: PulseDuotoneIcon,
  fill: PulseFillIcon,
  light: PulseLightIcon,
  regular: PulseRegularIcon,
  thin: PulseThinIcon,
});

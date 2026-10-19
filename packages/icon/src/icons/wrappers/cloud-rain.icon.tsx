import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudRainBoldIcon } from "../bold/cloud-rain-bold.icon";
import { CloudRainDuotoneIcon } from "../duotone/cloud-rain-duotone.icon";
import { CloudRainFillIcon } from "../fill/cloud-rain-fill.icon";
import { CloudRainLightIcon } from "../light/cloud-rain-light.icon";
import { CloudRainRegularIcon } from "../regular/cloud-rain-regular.icon";
import { CloudRainThinIcon } from "../thin/cloud-rain-thin.icon";

export const CloudRainIcon = createIcon("CloudRain", {
  bold: CloudRainBoldIcon,
  duotone: CloudRainDuotoneIcon,
  fill: CloudRainFillIcon,
  light: CloudRainLightIcon,
  regular: CloudRainRegularIcon,
  thin: CloudRainThinIcon,
});

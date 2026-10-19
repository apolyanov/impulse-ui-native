import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudSnowBoldIcon } from "../bold/cloud-snow-bold.icon";
import { CloudSnowDuotoneIcon } from "../duotone/cloud-snow-duotone.icon";
import { CloudSnowFillIcon } from "../fill/cloud-snow-fill.icon";
import { CloudSnowLightIcon } from "../light/cloud-snow-light.icon";
import { CloudSnowRegularIcon } from "../regular/cloud-snow-regular.icon";
import { CloudSnowThinIcon } from "../thin/cloud-snow-thin.icon";

export const CloudSnowIcon = createIcon("CloudSnow", {
  bold: CloudSnowBoldIcon,
  duotone: CloudSnowDuotoneIcon,
  fill: CloudSnowFillIcon,
  light: CloudSnowLightIcon,
  regular: CloudSnowRegularIcon,
  thin: CloudSnowThinIcon,
});

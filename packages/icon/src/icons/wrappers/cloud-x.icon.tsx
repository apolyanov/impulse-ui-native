import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudXBoldIcon } from "../bold/cloud-x-bold.icon";
import { CloudXDuotoneIcon } from "../duotone/cloud-x-duotone.icon";
import { CloudXFillIcon } from "../fill/cloud-x-fill.icon";
import { CloudXLightIcon } from "../light/cloud-x-light.icon";
import { CloudXRegularIcon } from "../regular/cloud-x-regular.icon";
import { CloudXThinIcon } from "../thin/cloud-x-thin.icon";

export const CloudXIcon = createIcon("CloudX", {
  bold: CloudXBoldIcon,
  duotone: CloudXDuotoneIcon,
  fill: CloudXFillIcon,
  light: CloudXLightIcon,
  regular: CloudXRegularIcon,
  thin: CloudXThinIcon,
});

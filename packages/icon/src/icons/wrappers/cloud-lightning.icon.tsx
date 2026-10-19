import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudLightningBoldIcon } from "../bold/cloud-lightning-bold.icon";
import { CloudLightningDuotoneIcon } from "../duotone/cloud-lightning-duotone.icon";
import { CloudLightningFillIcon } from "../fill/cloud-lightning-fill.icon";
import { CloudLightningLightIcon } from "../light/cloud-lightning-light.icon";
import { CloudLightningRegularIcon } from "../regular/cloud-lightning-regular.icon";
import { CloudLightningThinIcon } from "../thin/cloud-lightning-thin.icon";

export const CloudLightningIcon = createIcon("CloudLightning", {
  bold: CloudLightningBoldIcon,
  duotone: CloudLightningDuotoneIcon,
  fill: CloudLightningFillIcon,
  light: CloudLightningLightIcon,
  regular: CloudLightningRegularIcon,
  thin: CloudLightningThinIcon,
});

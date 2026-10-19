import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudBoldIcon } from "../bold/cloud-bold.icon";
import { CloudDuotoneIcon } from "../duotone/cloud-duotone.icon";
import { CloudFillIcon } from "../fill/cloud-fill.icon";
import { CloudLightIcon } from "../light/cloud-light.icon";
import { CloudRegularIcon } from "../regular/cloud-regular.icon";
import { CloudThinIcon } from "../thin/cloud-thin.icon";

export const CloudIcon = createIcon("Cloud", {
  bold: CloudBoldIcon,
  duotone: CloudDuotoneIcon,
  fill: CloudFillIcon,
  light: CloudLightIcon,
  regular: CloudRegularIcon,
  thin: CloudThinIcon,
});

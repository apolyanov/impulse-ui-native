import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudArrowUpBoldIcon } from "../bold/cloud-arrow-up-bold.icon";
import { CloudArrowUpDuotoneIcon } from "../duotone/cloud-arrow-up-duotone.icon";
import { CloudArrowUpFillIcon } from "../fill/cloud-arrow-up-fill.icon";
import { CloudArrowUpLightIcon } from "../light/cloud-arrow-up-light.icon";
import { CloudArrowUpRegularIcon } from "../regular/cloud-arrow-up-regular.icon";
import { CloudArrowUpThinIcon } from "../thin/cloud-arrow-up-thin.icon";

export const CloudArrowUpIcon = createIcon("CloudArrowUp", {
  bold: CloudArrowUpBoldIcon,
  duotone: CloudArrowUpDuotoneIcon,
  fill: CloudArrowUpFillIcon,
  light: CloudArrowUpLightIcon,
  regular: CloudArrowUpRegularIcon,
  thin: CloudArrowUpThinIcon,
});

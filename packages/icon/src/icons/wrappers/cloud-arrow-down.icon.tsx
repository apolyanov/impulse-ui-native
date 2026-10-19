import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudArrowDownBoldIcon } from "../bold/cloud-arrow-down-bold.icon";
import { CloudArrowDownDuotoneIcon } from "../duotone/cloud-arrow-down-duotone.icon";
import { CloudArrowDownFillIcon } from "../fill/cloud-arrow-down-fill.icon";
import { CloudArrowDownLightIcon } from "../light/cloud-arrow-down-light.icon";
import { CloudArrowDownRegularIcon } from "../regular/cloud-arrow-down-regular.icon";
import { CloudArrowDownThinIcon } from "../thin/cloud-arrow-down-thin.icon";

export const CloudArrowDownIcon = createIcon("CloudArrowDown", {
  bold: CloudArrowDownBoldIcon,
  duotone: CloudArrowDownDuotoneIcon,
  fill: CloudArrowDownFillIcon,
  light: CloudArrowDownLightIcon,
  regular: CloudArrowDownRegularIcon,
  thin: CloudArrowDownThinIcon,
});

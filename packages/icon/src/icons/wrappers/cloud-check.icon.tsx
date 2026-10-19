import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudCheckBoldIcon } from "../bold/cloud-check-bold.icon";
import { CloudCheckDuotoneIcon } from "../duotone/cloud-check-duotone.icon";
import { CloudCheckFillIcon } from "../fill/cloud-check-fill.icon";
import { CloudCheckLightIcon } from "../light/cloud-check-light.icon";
import { CloudCheckRegularIcon } from "../regular/cloud-check-regular.icon";
import { CloudCheckThinIcon } from "../thin/cloud-check-thin.icon";

export const CloudCheckIcon = createIcon("CloudCheck", {
  bold: CloudCheckBoldIcon,
  duotone: CloudCheckDuotoneIcon,
  fill: CloudCheckFillIcon,
  light: CloudCheckLightIcon,
  regular: CloudCheckRegularIcon,
  thin: CloudCheckThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudSunBoldIcon } from "../bold/cloud-sun-bold.icon";
import { CloudSunDuotoneIcon } from "../duotone/cloud-sun-duotone.icon";
import { CloudSunFillIcon } from "../fill/cloud-sun-fill.icon";
import { CloudSunLightIcon } from "../light/cloud-sun-light.icon";
import { CloudSunRegularIcon } from "../regular/cloud-sun-regular.icon";
import { CloudSunThinIcon } from "../thin/cloud-sun-thin.icon";

export const CloudSunIcon = createIcon("CloudSun", {
  bold: CloudSunBoldIcon,
  duotone: CloudSunDuotoneIcon,
  fill: CloudSunFillIcon,
  light: CloudSunLightIcon,
  regular: CloudSunRegularIcon,
  thin: CloudSunThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { RainbowCloudBoldIcon } from "../bold/rainbow-cloud-bold.icon";
import { RainbowCloudDuotoneIcon } from "../duotone/rainbow-cloud-duotone.icon";
import { RainbowCloudFillIcon } from "../fill/rainbow-cloud-fill.icon";
import { RainbowCloudLightIcon } from "../light/rainbow-cloud-light.icon";
import { RainbowCloudRegularIcon } from "../regular/rainbow-cloud-regular.icon";
import { RainbowCloudThinIcon } from "../thin/rainbow-cloud-thin.icon";

export const RainbowCloudIcon = createIcon("RainbowCloud", {
  bold: RainbowCloudBoldIcon,
  duotone: RainbowCloudDuotoneIcon,
  fill: RainbowCloudFillIcon,
  light: RainbowCloudLightIcon,
  regular: RainbowCloudRegularIcon,
  thin: RainbowCloudThinIcon,
});

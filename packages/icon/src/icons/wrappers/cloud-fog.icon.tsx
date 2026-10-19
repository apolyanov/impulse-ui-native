import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudFogBoldIcon } from "../bold/cloud-fog-bold.icon";
import { CloudFogDuotoneIcon } from "../duotone/cloud-fog-duotone.icon";
import { CloudFogFillIcon } from "../fill/cloud-fog-fill.icon";
import { CloudFogLightIcon } from "../light/cloud-fog-light.icon";
import { CloudFogRegularIcon } from "../regular/cloud-fog-regular.icon";
import { CloudFogThinIcon } from "../thin/cloud-fog-thin.icon";

export const CloudFogIcon = createIcon("CloudFog", {
  bold: CloudFogBoldIcon,
  duotone: CloudFogDuotoneIcon,
  fill: CloudFogFillIcon,
  light: CloudFogLightIcon,
  regular: CloudFogRegularIcon,
  thin: CloudFogThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { PanoramaBoldIcon } from "../bold/panorama-bold.icon";
import { PanoramaDuotoneIcon } from "../duotone/panorama-duotone.icon";
import { PanoramaFillIcon } from "../fill/panorama-fill.icon";
import { PanoramaLightIcon } from "../light/panorama-light.icon";
import { PanoramaRegularIcon } from "../regular/panorama-regular.icon";
import { PanoramaThinIcon } from "../thin/panorama-thin.icon";

export const PanoramaIcon = createIcon("Panorama", {
  bold: PanoramaBoldIcon,
  duotone: PanoramaDuotoneIcon,
  fill: PanoramaFillIcon,
  light: PanoramaLightIcon,
  regular: PanoramaRegularIcon,
  thin: PanoramaThinIcon,
});

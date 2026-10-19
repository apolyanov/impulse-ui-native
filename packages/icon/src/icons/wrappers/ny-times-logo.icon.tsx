import { createIcon } from "../../hocs/create-icon.hoc";
import { NyTimesLogoBoldIcon } from "../bold/ny-times-logo-bold.icon";
import { NyTimesLogoDuotoneIcon } from "../duotone/ny-times-logo-duotone.icon";
import { NyTimesLogoFillIcon } from "../fill/ny-times-logo-fill.icon";
import { NyTimesLogoLightIcon } from "../light/ny-times-logo-light.icon";
import { NyTimesLogoRegularIcon } from "../regular/ny-times-logo-regular.icon";
import { NyTimesLogoThinIcon } from "../thin/ny-times-logo-thin.icon";

export const NyTimesLogoIcon = createIcon("NyTimesLogo", {
  bold: NyTimesLogoBoldIcon,
  duotone: NyTimesLogoDuotoneIcon,
  fill: NyTimesLogoFillIcon,
  light: NyTimesLogoLightIcon,
  regular: NyTimesLogoRegularIcon,
  thin: NyTimesLogoThinIcon,
});

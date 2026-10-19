import { createIcon } from "../../hocs/create-icon.hoc";
import { TidalLogoBoldIcon } from "../bold/tidal-logo-bold.icon";
import { TidalLogoDuotoneIcon } from "../duotone/tidal-logo-duotone.icon";
import { TidalLogoFillIcon } from "../fill/tidal-logo-fill.icon";
import { TidalLogoLightIcon } from "../light/tidal-logo-light.icon";
import { TidalLogoRegularIcon } from "../regular/tidal-logo-regular.icon";
import { TidalLogoThinIcon } from "../thin/tidal-logo-thin.icon";

export const TidalLogoIcon = createIcon("TidalLogo", {
  bold: TidalLogoBoldIcon,
  duotone: TidalLogoDuotoneIcon,
  fill: TidalLogoFillIcon,
  light: TidalLogoLightIcon,
  regular: TidalLogoRegularIcon,
  thin: TidalLogoThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { DribbbleLogoBoldIcon } from "../bold/dribbble-logo-bold.icon";
import { DribbbleLogoDuotoneIcon } from "../duotone/dribbble-logo-duotone.icon";
import { DribbbleLogoFillIcon } from "../fill/dribbble-logo-fill.icon";
import { DribbbleLogoLightIcon } from "../light/dribbble-logo-light.icon";
import { DribbbleLogoRegularIcon } from "../regular/dribbble-logo-regular.icon";
import { DribbbleLogoThinIcon } from "../thin/dribbble-logo-thin.icon";

export const DribbbleLogoIcon = createIcon("DribbbleLogo", {
  bold: DribbbleLogoBoldIcon,
  duotone: DribbbleLogoDuotoneIcon,
  fill: DribbbleLogoFillIcon,
  light: DribbbleLogoLightIcon,
  regular: DribbbleLogoRegularIcon,
  thin: DribbbleLogoThinIcon,
});

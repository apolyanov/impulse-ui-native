import { createIcon } from "../../hocs/create-icon.hoc";
import { BehanceLogoBoldIcon } from "../bold/behance-logo-bold.icon";
import { BehanceLogoDuotoneIcon } from "../duotone/behance-logo-duotone.icon";
import { BehanceLogoFillIcon } from "../fill/behance-logo-fill.icon";
import { BehanceLogoLightIcon } from "../light/behance-logo-light.icon";
import { BehanceLogoRegularIcon } from "../regular/behance-logo-regular.icon";
import { BehanceLogoThinIcon } from "../thin/behance-logo-thin.icon";

export const BehanceLogoIcon = createIcon("BehanceLogo", {
  bold: BehanceLogoBoldIcon,
  duotone: BehanceLogoDuotoneIcon,
  fill: BehanceLogoFillIcon,
  light: BehanceLogoLightIcon,
  regular: BehanceLogoRegularIcon,
  thin: BehanceLogoThinIcon,
});

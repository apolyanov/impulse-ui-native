import { createIcon } from "../../hocs/create-icon.hoc";
import { MetaLogoBoldIcon } from "../bold/meta-logo-bold.icon";
import { MetaLogoDuotoneIcon } from "../duotone/meta-logo-duotone.icon";
import { MetaLogoFillIcon } from "../fill/meta-logo-fill.icon";
import { MetaLogoLightIcon } from "../light/meta-logo-light.icon";
import { MetaLogoRegularIcon } from "../regular/meta-logo-regular.icon";
import { MetaLogoThinIcon } from "../thin/meta-logo-thin.icon";

export const MetaLogoIcon = createIcon("MetaLogo", {
  bold: MetaLogoBoldIcon,
  duotone: MetaLogoDuotoneIcon,
  fill: MetaLogoFillIcon,
  light: MetaLogoLightIcon,
  regular: MetaLogoRegularIcon,
  thin: MetaLogoThinIcon,
});

import { createIcon } from "../../hocs/create-icon.hoc";
import { CodaLogoBoldIcon } from "../bold/coda-logo-bold.icon";
import { CodaLogoDuotoneIcon } from "../duotone/coda-logo-duotone.icon";
import { CodaLogoFillIcon } from "../fill/coda-logo-fill.icon";
import { CodaLogoLightIcon } from "../light/coda-logo-light.icon";
import { CodaLogoRegularIcon } from "../regular/coda-logo-regular.icon";
import { CodaLogoThinIcon } from "../thin/coda-logo-thin.icon";

export const CodaLogoIcon = createIcon("CodaLogo", {
  bold: CodaLogoBoldIcon,
  duotone: CodaLogoDuotoneIcon,
  fill: CodaLogoFillIcon,
  light: CodaLogoLightIcon,
  regular: CodaLogoRegularIcon,
  thin: CodaLogoThinIcon,
});

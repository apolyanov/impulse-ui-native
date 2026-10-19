import { createIcon } from "../../hocs/create-icon.hoc";
import { ReadCvLogoBoldIcon } from "../bold/read-cv-logo-bold.icon";
import { ReadCvLogoDuotoneIcon } from "../duotone/read-cv-logo-duotone.icon";
import { ReadCvLogoFillIcon } from "../fill/read-cv-logo-fill.icon";
import { ReadCvLogoLightIcon } from "../light/read-cv-logo-light.icon";
import { ReadCvLogoRegularIcon } from "../regular/read-cv-logo-regular.icon";
import { ReadCvLogoThinIcon } from "../thin/read-cv-logo-thin.icon";

export const ReadCvLogoIcon = createIcon("ReadCvLogo", {
  bold: ReadCvLogoBoldIcon,
  duotone: ReadCvLogoDuotoneIcon,
  fill: ReadCvLogoFillIcon,
  light: ReadCvLogoLightIcon,
  regular: ReadCvLogoRegularIcon,
  thin: ReadCvLogoThinIcon,
});

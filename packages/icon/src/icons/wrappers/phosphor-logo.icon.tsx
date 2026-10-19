import { createIcon } from "../../hocs/create-icon.hoc";
import { PhosphorLogoBoldIcon } from "../bold/phosphor-logo-bold.icon";
import { PhosphorLogoDuotoneIcon } from "../duotone/phosphor-logo-duotone.icon";
import { PhosphorLogoFillIcon } from "../fill/phosphor-logo-fill.icon";
import { PhosphorLogoLightIcon } from "../light/phosphor-logo-light.icon";
import { PhosphorLogoRegularIcon } from "../regular/phosphor-logo-regular.icon";
import { PhosphorLogoThinIcon } from "../thin/phosphor-logo-thin.icon";

export const PhosphorLogoIcon = createIcon("PhosphorLogo", {
  bold: PhosphorLogoBoldIcon,
  duotone: PhosphorLogoDuotoneIcon,
  fill: PhosphorLogoFillIcon,
  light: PhosphorLogoLightIcon,
  regular: PhosphorLogoRegularIcon,
  thin: PhosphorLogoThinIcon,
});

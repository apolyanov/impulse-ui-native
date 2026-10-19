import { createIcon } from "../../hocs/create-icon.hoc";
import { CodepenLogoBoldIcon } from "../bold/codepen-logo-bold.icon";
import { CodepenLogoDuotoneIcon } from "../duotone/codepen-logo-duotone.icon";
import { CodepenLogoFillIcon } from "../fill/codepen-logo-fill.icon";
import { CodepenLogoLightIcon } from "../light/codepen-logo-light.icon";
import { CodepenLogoRegularIcon } from "../regular/codepen-logo-regular.icon";
import { CodepenLogoThinIcon } from "../thin/codepen-logo-thin.icon";

export const CodepenLogoIcon = createIcon("CodepenLogo", {
  bold: CodepenLogoBoldIcon,
  duotone: CodepenLogoDuotoneIcon,
  fill: CodepenLogoFillIcon,
  light: CodepenLogoLightIcon,
  regular: CodepenLogoRegularIcon,
  thin: CodepenLogoThinIcon,
});

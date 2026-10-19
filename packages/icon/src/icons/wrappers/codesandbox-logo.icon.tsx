import { createIcon } from "../../hocs/create-icon.hoc";
import { CodesandboxLogoBoldIcon } from "../bold/codesandbox-logo-bold.icon";
import { CodesandboxLogoDuotoneIcon } from "../duotone/codesandbox-logo-duotone.icon";
import { CodesandboxLogoFillIcon } from "../fill/codesandbox-logo-fill.icon";
import { CodesandboxLogoLightIcon } from "../light/codesandbox-logo-light.icon";
import { CodesandboxLogoRegularIcon } from "../regular/codesandbox-logo-regular.icon";
import { CodesandboxLogoThinIcon } from "../thin/codesandbox-logo-thin.icon";

export const CodesandboxLogoIcon = createIcon("CodesandboxLogo", {
  bold: CodesandboxLogoBoldIcon,
  duotone: CodesandboxLogoDuotoneIcon,
  fill: CodesandboxLogoFillIcon,
  light: CodesandboxLogoLightIcon,
  regular: CodesandboxLogoRegularIcon,
  thin: CodesandboxLogoThinIcon,
});

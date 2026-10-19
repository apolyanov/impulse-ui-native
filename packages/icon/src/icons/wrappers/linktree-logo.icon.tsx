import { createIcon } from "../../hocs/create-icon.hoc";
import { LinktreeLogoBoldIcon } from "../bold/linktree-logo-bold.icon";
import { LinktreeLogoDuotoneIcon } from "../duotone/linktree-logo-duotone.icon";
import { LinktreeLogoFillIcon } from "../fill/linktree-logo-fill.icon";
import { LinktreeLogoLightIcon } from "../light/linktree-logo-light.icon";
import { LinktreeLogoRegularIcon } from "../regular/linktree-logo-regular.icon";
import { LinktreeLogoThinIcon } from "../thin/linktree-logo-thin.icon";

export const LinktreeLogoIcon = createIcon("LinktreeLogo", {
  bold: LinktreeLogoBoldIcon,
  duotone: LinktreeLogoDuotoneIcon,
  fill: LinktreeLogoFillIcon,
  light: LinktreeLogoLightIcon,
  regular: LinktreeLogoRegularIcon,
  thin: LinktreeLogoThinIcon,
});

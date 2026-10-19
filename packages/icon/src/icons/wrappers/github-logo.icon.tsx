import { createIcon } from "../../hocs/create-icon.hoc";
import { GithubLogoBoldIcon } from "../bold/github-logo-bold.icon";
import { GithubLogoDuotoneIcon } from "../duotone/github-logo-duotone.icon";
import { GithubLogoFillIcon } from "../fill/github-logo-fill.icon";
import { GithubLogoLightIcon } from "../light/github-logo-light.icon";
import { GithubLogoRegularIcon } from "../regular/github-logo-regular.icon";
import { GithubLogoThinIcon } from "../thin/github-logo-thin.icon";

export const GithubLogoIcon = createIcon("GithubLogo", {
  bold: GithubLogoBoldIcon,
  duotone: GithubLogoDuotoneIcon,
  fill: GithubLogoFillIcon,
  light: GithubLogoLightIcon,
  regular: GithubLogoRegularIcon,
  thin: GithubLogoThinIcon,
});

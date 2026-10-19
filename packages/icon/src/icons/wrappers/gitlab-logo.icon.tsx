import { createIcon } from "../../hocs/create-icon.hoc";
import { GitlabLogoBoldIcon } from "../bold/gitlab-logo-bold.icon";
import { GitlabLogoDuotoneIcon } from "../duotone/gitlab-logo-duotone.icon";
import { GitlabLogoFillIcon } from "../fill/gitlab-logo-fill.icon";
import { GitlabLogoLightIcon } from "../light/gitlab-logo-light.icon";
import { GitlabLogoRegularIcon } from "../regular/gitlab-logo-regular.icon";
import { GitlabLogoThinIcon } from "../thin/gitlab-logo-thin.icon";

export const GitlabLogoIcon = createIcon("GitlabLogo", {
  bold: GitlabLogoBoldIcon,
  duotone: GitlabLogoDuotoneIcon,
  fill: GitlabLogoFillIcon,
  light: GitlabLogoLightIcon,
  regular: GitlabLogoRegularIcon,
  thin: GitlabLogoThinIcon,
});

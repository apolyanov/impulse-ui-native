import { createIcon } from "../../hocs/create-icon.hoc";
import { GitlabLogoSimpleBoldIcon } from "../bold/gitlab-logo-simple-bold.icon";
import { GitlabLogoSimpleDuotoneIcon } from "../duotone/gitlab-logo-simple-duotone.icon";
import { GitlabLogoSimpleFillIcon } from "../fill/gitlab-logo-simple-fill.icon";
import { GitlabLogoSimpleLightIcon } from "../light/gitlab-logo-simple-light.icon";
import { GitlabLogoSimpleRegularIcon } from "../regular/gitlab-logo-simple-regular.icon";
import { GitlabLogoSimpleThinIcon } from "../thin/gitlab-logo-simple-thin.icon";

export const GitlabLogoSimpleIcon = createIcon("GitlabLogoSimple", {
  bold: GitlabLogoSimpleBoldIcon,
  duotone: GitlabLogoSimpleDuotoneIcon,
  fill: GitlabLogoSimpleFillIcon,
  light: GitlabLogoSimpleLightIcon,
  regular: GitlabLogoSimpleRegularIcon,
  thin: GitlabLogoSimpleThinIcon,
});

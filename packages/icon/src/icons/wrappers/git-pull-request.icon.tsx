import { createIcon } from "../../hocs/create-icon.hoc";
import { GitPullRequestBoldIcon } from "../bold/git-pull-request-bold.icon";
import { GitPullRequestDuotoneIcon } from "../duotone/git-pull-request-duotone.icon";
import { GitPullRequestFillIcon } from "../fill/git-pull-request-fill.icon";
import { GitPullRequestLightIcon } from "../light/git-pull-request-light.icon";
import { GitPullRequestRegularIcon } from "../regular/git-pull-request-regular.icon";
import { GitPullRequestThinIcon } from "../thin/git-pull-request-thin.icon";

export const GitPullRequestIcon = createIcon("GitPullRequest", {
  bold: GitPullRequestBoldIcon,
  duotone: GitPullRequestDuotoneIcon,
  fill: GitPullRequestFillIcon,
  light: GitPullRequestLightIcon,
  regular: GitPullRequestRegularIcon,
  thin: GitPullRequestThinIcon,
});

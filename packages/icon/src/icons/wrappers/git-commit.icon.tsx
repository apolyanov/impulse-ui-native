import { createIcon } from "../../hocs/create-icon.hoc";
import { GitCommitBoldIcon } from "../bold/git-commit-bold.icon";
import { GitCommitDuotoneIcon } from "../duotone/git-commit-duotone.icon";
import { GitCommitFillIcon } from "../fill/git-commit-fill.icon";
import { GitCommitLightIcon } from "../light/git-commit-light.icon";
import { GitCommitRegularIcon } from "../regular/git-commit-regular.icon";
import { GitCommitThinIcon } from "../thin/git-commit-thin.icon";

export const GitCommitIcon = createIcon("GitCommit", {
  bold: GitCommitBoldIcon,
  duotone: GitCommitDuotoneIcon,
  fill: GitCommitFillIcon,
  light: GitCommitLightIcon,
  regular: GitCommitRegularIcon,
  thin: GitCommitThinIcon,
});

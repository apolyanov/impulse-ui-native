import { createIcon } from "../../hocs/create-icon.hoc";
import { GitBranchBoldIcon } from "../bold/git-branch-bold.icon";
import { GitBranchDuotoneIcon } from "../duotone/git-branch-duotone.icon";
import { GitBranchFillIcon } from "../fill/git-branch-fill.icon";
import { GitBranchLightIcon } from "../light/git-branch-light.icon";
import { GitBranchRegularIcon } from "../regular/git-branch-regular.icon";
import { GitBranchThinIcon } from "../thin/git-branch-thin.icon";

export const GitBranchIcon = createIcon("GitBranch", {
  bold: GitBranchBoldIcon,
  duotone: GitBranchDuotoneIcon,
  fill: GitBranchFillIcon,
  light: GitBranchLightIcon,
  regular: GitBranchRegularIcon,
  thin: GitBranchThinIcon,
});

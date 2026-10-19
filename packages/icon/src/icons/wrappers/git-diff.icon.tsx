import { createIcon } from "../../hocs/create-icon.hoc";
import { GitDiffBoldIcon } from "../bold/git-diff-bold.icon";
import { GitDiffDuotoneIcon } from "../duotone/git-diff-duotone.icon";
import { GitDiffFillIcon } from "../fill/git-diff-fill.icon";
import { GitDiffLightIcon } from "../light/git-diff-light.icon";
import { GitDiffRegularIcon } from "../regular/git-diff-regular.icon";
import { GitDiffThinIcon } from "../thin/git-diff-thin.icon";

export const GitDiffIcon = createIcon("GitDiff", {
  bold: GitDiffBoldIcon,
  duotone: GitDiffDuotoneIcon,
  fill: GitDiffFillIcon,
  light: GitDiffLightIcon,
  regular: GitDiffRegularIcon,
  thin: GitDiffThinIcon,
});

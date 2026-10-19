import { createIcon } from "../../hocs/create-icon.hoc";
import { GitMergeBoldIcon } from "../bold/git-merge-bold.icon";
import { GitMergeDuotoneIcon } from "../duotone/git-merge-duotone.icon";
import { GitMergeFillIcon } from "../fill/git-merge-fill.icon";
import { GitMergeLightIcon } from "../light/git-merge-light.icon";
import { GitMergeRegularIcon } from "../regular/git-merge-regular.icon";
import { GitMergeThinIcon } from "../thin/git-merge-thin.icon";

export const GitMergeIcon = createIcon("GitMerge", {
  bold: GitMergeBoldIcon,
  duotone: GitMergeDuotoneIcon,
  fill: GitMergeFillIcon,
  light: GitMergeLightIcon,
  regular: GitMergeRegularIcon,
  thin: GitMergeThinIcon,
});

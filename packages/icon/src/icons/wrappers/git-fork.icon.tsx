import { createIcon } from "../../hocs/create-icon.hoc";
import { GitForkBoldIcon } from "../bold/git-fork-bold.icon";
import { GitForkDuotoneIcon } from "../duotone/git-fork-duotone.icon";
import { GitForkFillIcon } from "../fill/git-fork-fill.icon";
import { GitForkLightIcon } from "../light/git-fork-light.icon";
import { GitForkRegularIcon } from "../regular/git-fork-regular.icon";
import { GitForkThinIcon } from "../thin/git-fork-thin.icon";

export const GitForkIcon = createIcon("GitFork", {
  bold: GitForkBoldIcon,
  duotone: GitForkDuotoneIcon,
  fill: GitForkFillIcon,
  light: GitForkLightIcon,
  regular: GitForkRegularIcon,
  thin: GitForkThinIcon,
});

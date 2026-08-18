import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitBranchBoldIcon } from "../bold/git-branch-bold.icon";
import { GitBranchDuotoneIcon } from "../duotone/git-branch-duotone.icon";
import { GitBranchFillIcon } from "../fill/git-branch-fill.icon";
import { GitBranchLightIcon } from "../light/git-branch-light.icon";
import { GitBranchRegularIcon } from "../regular/git-branch-regular.icon";
import { GitBranchThinIcon } from "../thin/git-branch-thin.icon";

export const GitBranchIcon = memo(function GitBranch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitBranchBoldIcon,
      duotone: GitBranchDuotoneIcon,
      fill: GitBranchFillIcon,
      light: GitBranchLightIcon,
      regular: GitBranchRegularIcon,
      thin: GitBranchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

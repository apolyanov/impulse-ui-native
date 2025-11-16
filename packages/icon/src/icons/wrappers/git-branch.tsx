import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitBranchBold } from "../bold";
import { GitBranchDuotone } from "../duotone";
import { GitBranchFill } from "../fill";
import { GitBranchLight } from "../light";
import { GitBranchRegular } from "../regular";
import { GitBranchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitBranch = memo(function GitBranch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitBranchBold,
      duotone: GitBranchDuotone,
      fill: GitBranchFill,
      light: GitBranchLight,
      regular: GitBranchRegular,
      thin: GitBranchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

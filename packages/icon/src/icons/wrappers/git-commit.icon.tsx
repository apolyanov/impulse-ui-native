import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitCommitBoldIcon } from "../bold/git-commit-bold.icon";
import { GitCommitDuotoneIcon } from "../duotone/git-commit-duotone.icon";
import { GitCommitFillIcon } from "../fill/git-commit-fill.icon";
import { GitCommitLightIcon } from "../light/git-commit-light.icon";
import { GitCommitRegularIcon } from "../regular/git-commit-regular.icon";
import { GitCommitThinIcon } from "../thin/git-commit-thin.icon";

export const GitCommitIcon = memo(function GitCommit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitCommitBoldIcon,
      duotone: GitCommitDuotoneIcon,
      fill: GitCommitFillIcon,
      light: GitCommitLightIcon,
      regular: GitCommitRegularIcon,
      thin: GitCommitThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

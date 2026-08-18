import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitDiffBoldIcon } from "../bold/git-diff-bold.icon";
import { GitDiffDuotoneIcon } from "../duotone/git-diff-duotone.icon";
import { GitDiffFillIcon } from "../fill/git-diff-fill.icon";
import { GitDiffLightIcon } from "../light/git-diff-light.icon";
import { GitDiffRegularIcon } from "../regular/git-diff-regular.icon";
import { GitDiffThinIcon } from "../thin/git-diff-thin.icon";

export const GitDiffIcon = memo(function GitDiff(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitDiffBoldIcon,
      duotone: GitDiffDuotoneIcon,
      fill: GitDiffFillIcon,
      light: GitDiffLightIcon,
      regular: GitDiffRegularIcon,
      thin: GitDiffThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

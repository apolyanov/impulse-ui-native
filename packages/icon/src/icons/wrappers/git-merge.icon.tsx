import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitMergeBoldIcon } from "../bold/git-merge-bold.icon";
import { GitMergeDuotoneIcon } from "../duotone/git-merge-duotone.icon";
import { GitMergeFillIcon } from "../fill/git-merge-fill.icon";
import { GitMergeLightIcon } from "../light/git-merge-light.icon";
import { GitMergeRegularIcon } from "../regular/git-merge-regular.icon";
import { GitMergeThinIcon } from "../thin/git-merge-thin.icon";

export const GitMergeIcon = memo(function GitMerge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitMergeBoldIcon,
      duotone: GitMergeDuotoneIcon,
      fill: GitMergeFillIcon,
      light: GitMergeLightIcon,
      regular: GitMergeRegularIcon,
      thin: GitMergeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitDiffBoldIcon } from "../bold";
import { GitDiffDuotoneIcon } from "../duotone";
import { GitDiffFillIcon } from "../fill";
import { GitDiffLightIcon } from "../light";
import { GitDiffRegularIcon } from "../regular";
import { GitDiffThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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

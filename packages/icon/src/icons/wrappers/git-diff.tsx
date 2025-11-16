import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitDiffBold } from "../bold";
import { GitDiffDuotone } from "../duotone";
import { GitDiffFill } from "../fill";
import { GitDiffLight } from "../light";
import { GitDiffRegular } from "../regular";
import { GitDiffThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitDiff = memo(function GitDiff(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitDiffBold,
      duotone: GitDiffDuotone,
      fill: GitDiffFill,
      light: GitDiffLight,
      regular: GitDiffRegular,
      thin: GitDiffThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

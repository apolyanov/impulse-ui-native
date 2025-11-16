import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitCommitBold } from "../bold";
import { GitCommitDuotone } from "../duotone";
import { GitCommitFill } from "../fill";
import { GitCommitLight } from "../light";
import { GitCommitRegular } from "../regular";
import { GitCommitThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitCommit = memo(function GitCommit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitCommitBold,
      duotone: GitCommitDuotone,
      fill: GitCommitFill,
      light: GitCommitLight,
      regular: GitCommitRegular,
      thin: GitCommitThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

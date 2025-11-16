import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitForkBold } from "../bold";
import { GitForkDuotone } from "../duotone";
import { GitForkFill } from "../fill";
import { GitForkLight } from "../light";
import { GitForkRegular } from "../regular";
import { GitForkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitFork = memo(function GitFork(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitForkBold,
      duotone: GitForkDuotone,
      fill: GitForkFill,
      light: GitForkLight,
      regular: GitForkRegular,
      thin: GitForkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

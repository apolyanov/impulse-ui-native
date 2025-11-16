import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GhostBold } from "../bold";
import { GhostDuotone } from "../duotone";
import { GhostFill } from "../fill";
import { GhostLight } from "../light";
import { GhostRegular } from "../regular";
import { GhostThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ghost = memo(function Ghost(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GhostBold,
      duotone: GhostDuotone,
      fill: GhostFill,
      light: GhostLight,
      regular: GhostRegular,
      thin: GhostThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

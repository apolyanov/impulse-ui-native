import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GhostBoldIcon } from "../bold";
import { GhostDuotoneIcon } from "../duotone";
import { GhostFillIcon } from "../fill";
import { GhostLightIcon } from "../light";
import { GhostRegularIcon } from "../regular";
import { GhostThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GhostIcon = memo(function Ghost(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GhostBoldIcon,
      duotone: GhostDuotoneIcon,
      fill: GhostFillIcon,
      light: GhostLightIcon,
      regular: GhostRegularIcon,
      thin: GhostThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GhostBoldIcon } from "../bold/ghost-bold.icon";
import { GhostDuotoneIcon } from "../duotone/ghost-duotone.icon";
import { GhostFillIcon } from "../fill/ghost-fill.icon";
import { GhostLightIcon } from "../light/ghost-light.icon";
import { GhostRegularIcon } from "../regular/ghost-regular.icon";
import { GhostThinIcon } from "../thin/ghost-thin.icon";

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

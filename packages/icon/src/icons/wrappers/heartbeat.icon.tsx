import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeartbeatBoldIcon } from "../bold/heartbeat-bold.icon";
import { HeartbeatDuotoneIcon } from "../duotone/heartbeat-duotone.icon";
import { HeartbeatFillIcon } from "../fill/heartbeat-fill.icon";
import { HeartbeatLightIcon } from "../light/heartbeat-light.icon";
import { HeartbeatRegularIcon } from "../regular/heartbeat-regular.icon";
import { HeartbeatThinIcon } from "../thin/heartbeat-thin.icon";

export const HeartbeatIcon = memo(function Heartbeat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartbeatBoldIcon,
      duotone: HeartbeatDuotoneIcon,
      fill: HeartbeatFillIcon,
      light: HeartbeatLightIcon,
      regular: HeartbeatRegularIcon,
      thin: HeartbeatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

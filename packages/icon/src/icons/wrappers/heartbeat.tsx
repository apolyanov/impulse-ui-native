import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartbeatBold } from "../bold";
import { HeartbeatDuotone } from "../duotone";
import { HeartbeatFill } from "../fill";
import { HeartbeatLight } from "../light";
import { HeartbeatRegular } from "../regular";
import { HeartbeatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Heartbeat = memo(function Heartbeat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartbeatBold,
      duotone: HeartbeatDuotone,
      fill: HeartbeatFill,
      light: HeartbeatLight,
      regular: HeartbeatRegular,
      thin: HeartbeatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

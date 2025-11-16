import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PingPongBold } from "../bold";
import { PingPongDuotone } from "../duotone";
import { PingPongFill } from "../fill";
import { PingPongLight } from "../light";
import { PingPongRegular } from "../regular";
import { PingPongThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PingPong = memo(function PingPong(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PingPongBold,
      duotone: PingPongDuotone,
      fill: PingPongFill,
      light: PingPongLight,
      regular: PingPongRegular,
      thin: PingPongThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

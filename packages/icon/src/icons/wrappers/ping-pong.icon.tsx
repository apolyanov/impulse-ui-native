import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PingPongBoldIcon } from "../bold";
import { PingPongDuotoneIcon } from "../duotone";
import { PingPongFillIcon } from "../fill";
import { PingPongLightIcon } from "../light";
import { PingPongRegularIcon } from "../regular";
import { PingPongThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PingPongIcon = memo(function PingPong(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PingPongBoldIcon,
      duotone: PingPongDuotoneIcon,
      fill: PingPongFillIcon,
      light: PingPongLightIcon,
      regular: PingPongRegularIcon,
      thin: PingPongThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

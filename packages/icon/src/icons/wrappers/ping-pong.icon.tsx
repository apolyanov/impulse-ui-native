import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PingPongBoldIcon } from "../bold/ping-pong-bold.icon";
import { PingPongDuotoneIcon } from "../duotone/ping-pong-duotone.icon";
import { PingPongFillIcon } from "../fill/ping-pong-fill.icon";
import { PingPongLightIcon } from "../light/ping-pong-light.icon";
import { PingPongRegularIcon } from "../regular/ping-pong-regular.icon";
import { PingPongThinIcon } from "../thin/ping-pong-thin.icon";

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

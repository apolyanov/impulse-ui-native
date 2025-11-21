import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BroadcastBoldIcon } from "../bold";
import { BroadcastDuotoneIcon } from "../duotone";
import { BroadcastFillIcon } from "../fill";
import { BroadcastLightIcon } from "../light";
import { BroadcastRegularIcon } from "../regular";
import { BroadcastThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BroadcastIcon = memo(function Broadcast(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BroadcastBoldIcon,
      duotone: BroadcastDuotoneIcon,
      fill: BroadcastFillIcon,
      light: BroadcastLightIcon,
      regular: BroadcastRegularIcon,
      thin: BroadcastThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

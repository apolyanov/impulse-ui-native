import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BroadcastBold } from "../bold";
import { BroadcastDuotone } from "../duotone";
import { BroadcastFill } from "../fill";
import { BroadcastLight } from "../light";
import { BroadcastRegular } from "../regular";
import { BroadcastThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Broadcast = memo(function Broadcast(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BroadcastBold,
      duotone: BroadcastDuotone,
      fill: BroadcastFill,
      light: BroadcastLight,
      regular: BroadcastRegular,
      thin: BroadcastThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

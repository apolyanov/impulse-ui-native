import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BroadcastBoldIcon } from "../bold/broadcast-bold.icon";
import { BroadcastDuotoneIcon } from "../duotone/broadcast-duotone.icon";
import { BroadcastFillIcon } from "../fill/broadcast-fill.icon";
import { BroadcastLightIcon } from "../light/broadcast-light.icon";
import { BroadcastRegularIcon } from "../regular/broadcast-regular.icon";
import { BroadcastThinIcon } from "../thin/broadcast-thin.icon";

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

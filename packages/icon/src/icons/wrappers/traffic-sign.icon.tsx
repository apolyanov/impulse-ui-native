import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrafficSignBoldIcon } from "../bold";
import { TrafficSignDuotoneIcon } from "../duotone";
import { TrafficSignFillIcon } from "../fill";
import { TrafficSignLightIcon } from "../light";
import { TrafficSignRegularIcon } from "../regular";
import { TrafficSignThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrafficSignIcon = memo(function TrafficSign(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrafficSignBoldIcon,
      duotone: TrafficSignDuotoneIcon,
      fill: TrafficSignFillIcon,
      light: TrafficSignLightIcon,
      regular: TrafficSignRegularIcon,
      thin: TrafficSignThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

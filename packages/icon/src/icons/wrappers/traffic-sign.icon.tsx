import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrafficSignBoldIcon } from "../bold/traffic-sign-bold.icon";
import { TrafficSignDuotoneIcon } from "../duotone/traffic-sign-duotone.icon";
import { TrafficSignFillIcon } from "../fill/traffic-sign-fill.icon";
import { TrafficSignLightIcon } from "../light/traffic-sign-light.icon";
import { TrafficSignRegularIcon } from "../regular/traffic-sign-regular.icon";
import { TrafficSignThinIcon } from "../thin/traffic-sign-thin.icon";

export const TrafficSignIcon = memo(function TrafficSign(
  props: IconWrapperProps,
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

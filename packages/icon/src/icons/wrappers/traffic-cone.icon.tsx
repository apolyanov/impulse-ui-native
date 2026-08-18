import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrafficConeBoldIcon } from "../bold/traffic-cone-bold.icon";
import { TrafficConeDuotoneIcon } from "../duotone/traffic-cone-duotone.icon";
import { TrafficConeFillIcon } from "../fill/traffic-cone-fill.icon";
import { TrafficConeLightIcon } from "../light/traffic-cone-light.icon";
import { TrafficConeRegularIcon } from "../regular/traffic-cone-regular.icon";
import { TrafficConeThinIcon } from "../thin/traffic-cone-thin.icon";

export const TrafficConeIcon = memo(function TrafficCone(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrafficConeBoldIcon,
      duotone: TrafficConeDuotoneIcon,
      fill: TrafficConeFillIcon,
      light: TrafficConeLightIcon,
      regular: TrafficConeRegularIcon,
      thin: TrafficConeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

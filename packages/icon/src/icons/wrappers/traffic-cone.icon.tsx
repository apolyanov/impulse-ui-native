import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrafficConeBoldIcon } from "../bold";
import { TrafficConeDuotoneIcon } from "../duotone";
import { TrafficConeFillIcon } from "../fill";
import { TrafficConeLightIcon } from "../light";
import { TrafficConeRegularIcon } from "../regular";
import { TrafficConeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrafficConeIcon = memo(function TrafficCone(
  props: IconWrapperProps
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

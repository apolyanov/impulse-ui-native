import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrafficConeBold } from "../bold";
import { TrafficConeDuotone } from "../duotone";
import { TrafficConeFill } from "../fill";
import { TrafficConeLight } from "../light";
import { TrafficConeRegular } from "../regular";
import { TrafficConeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrafficCone = memo(function TrafficCone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrafficConeBold,
      duotone: TrafficConeDuotone,
      fill: TrafficConeFill,
      light: TrafficConeLight,
      regular: TrafficConeRegular,
      thin: TrafficConeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrafficSignBold } from "../bold";
import { TrafficSignDuotone } from "../duotone";
import { TrafficSignFill } from "../fill";
import { TrafficSignLight } from "../light";
import { TrafficSignRegular } from "../regular";
import { TrafficSignThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrafficSign = memo(function TrafficSign(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrafficSignBold,
      duotone: TrafficSignDuotone,
      fill: TrafficSignFill,
      light: TrafficSignLight,
      regular: TrafficSignRegular,
      thin: TrafficSignThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

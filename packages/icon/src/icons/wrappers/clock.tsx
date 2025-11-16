import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockBold } from "../bold";
import { ClockDuotone } from "../duotone";
import { ClockFill } from "../fill";
import { ClockLight } from "../light";
import { ClockRegular } from "../regular";
import { ClockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Clock = memo(function Clock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockBold,
      duotone: ClockDuotone,
      fill: ClockFill,
      light: ClockLight,
      regular: ClockRegular,
      thin: ClockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

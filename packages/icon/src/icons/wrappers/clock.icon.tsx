import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockBoldIcon } from "../bold";
import { ClockDuotoneIcon } from "../duotone";
import { ClockFillIcon } from "../fill";
import { ClockLightIcon } from "../light";
import { ClockRegularIcon } from "../regular";
import { ClockThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockIcon = memo(function Clock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockBoldIcon,
      duotone: ClockDuotoneIcon,
      fill: ClockFillIcon,
      light: ClockLightIcon,
      regular: ClockRegularIcon,
      thin: ClockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

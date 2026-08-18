import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockBoldIcon } from "../bold/clock-bold.icon";
import { ClockDuotoneIcon } from "../duotone/clock-duotone.icon";
import { ClockFillIcon } from "../fill/clock-fill.icon";
import { ClockLightIcon } from "../light/clock-light.icon";
import { ClockRegularIcon } from "../regular/clock-regular.icon";
import { ClockThinIcon } from "../thin/clock-thin.icon";

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

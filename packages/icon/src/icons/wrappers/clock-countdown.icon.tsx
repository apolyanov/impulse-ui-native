import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockCountdownBoldIcon } from "../bold";
import { ClockCountdownDuotoneIcon } from "../duotone";
import { ClockCountdownFillIcon } from "../fill";
import { ClockCountdownLightIcon } from "../light";
import { ClockCountdownRegularIcon } from "../regular";
import { ClockCountdownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockCountdownIcon = memo(function ClockCountdown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockCountdownBoldIcon,
      duotone: ClockCountdownDuotoneIcon,
      fill: ClockCountdownFillIcon,
      light: ClockCountdownLightIcon,
      regular: ClockCountdownRegularIcon,
      thin: ClockCountdownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

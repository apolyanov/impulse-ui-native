import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockCountdownBoldIcon } from "../bold/clock-countdown-bold.icon";
import { ClockCountdownDuotoneIcon } from "../duotone/clock-countdown-duotone.icon";
import { ClockCountdownFillIcon } from "../fill/clock-countdown-fill.icon";
import { ClockCountdownLightIcon } from "../light/clock-countdown-light.icon";
import { ClockCountdownRegularIcon } from "../regular/clock-countdown-regular.icon";
import { ClockCountdownThinIcon } from "../thin/clock-countdown-thin.icon";

export const ClockCountdownIcon = memo(function ClockCountdown(
  props: IconWrapperProps,
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

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockCountdownBold } from "../bold";
import { ClockCountdownDuotone } from "../duotone";
import { ClockCountdownFill } from "../fill";
import { ClockCountdownLight } from "../light";
import { ClockCountdownRegular } from "../regular";
import { ClockCountdownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockCountdown = memo(function ClockCountdown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockCountdownBold,
      duotone: ClockCountdownDuotone,
      fill: ClockCountdownFill,
      light: ClockCountdownLight,
      regular: ClockCountdownRegular,
      thin: ClockCountdownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

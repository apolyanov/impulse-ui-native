import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockAfternoonBoldIcon } from "../bold/clock-afternoon-bold.icon";
import { ClockAfternoonDuotoneIcon } from "../duotone/clock-afternoon-duotone.icon";
import { ClockAfternoonFillIcon } from "../fill/clock-afternoon-fill.icon";
import { ClockAfternoonLightIcon } from "../light/clock-afternoon-light.icon";
import { ClockAfternoonRegularIcon } from "../regular/clock-afternoon-regular.icon";
import { ClockAfternoonThinIcon } from "../thin/clock-afternoon-thin.icon";

export const ClockAfternoonIcon = memo(function ClockAfternoon(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockAfternoonBoldIcon,
      duotone: ClockAfternoonDuotoneIcon,
      fill: ClockAfternoonFillIcon,
      light: ClockAfternoonLightIcon,
      regular: ClockAfternoonRegularIcon,
      thin: ClockAfternoonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

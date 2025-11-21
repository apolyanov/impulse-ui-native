import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockAfternoonBoldIcon } from "../bold";
import { ClockAfternoonDuotoneIcon } from "../duotone";
import { ClockAfternoonFillIcon } from "../fill";
import { ClockAfternoonLightIcon } from "../light";
import { ClockAfternoonRegularIcon } from "../regular";
import { ClockAfternoonThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockAfternoonIcon = memo(function ClockAfternoon(
  props: IconWrapperProps
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

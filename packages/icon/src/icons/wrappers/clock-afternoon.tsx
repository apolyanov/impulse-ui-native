import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockAfternoonBold } from "../bold";
import { ClockAfternoonDuotone } from "../duotone";
import { ClockAfternoonFill } from "../fill";
import { ClockAfternoonLight } from "../light";
import { ClockAfternoonRegular } from "../regular";
import { ClockAfternoonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockAfternoon = memo(function ClockAfternoon(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockAfternoonBold,
      duotone: ClockAfternoonDuotone,
      fill: ClockAfternoonFill,
      light: ClockAfternoonLight,
      regular: ClockAfternoonRegular,
      thin: ClockAfternoonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

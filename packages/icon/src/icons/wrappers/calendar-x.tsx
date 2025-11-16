import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarXBold } from "../bold";
import { CalendarXDuotone } from "../duotone";
import { CalendarXFill } from "../fill";
import { CalendarXLight } from "../light";
import { CalendarXRegular } from "../regular";
import { CalendarXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarX = memo(function CalendarX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarXBold,
      duotone: CalendarXDuotone,
      fill: CalendarXFill,
      light: CalendarXLight,
      regular: CalendarXRegular,
      thin: CalendarXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

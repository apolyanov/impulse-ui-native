import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarXBoldIcon } from "../bold/calendar-x-bold.icon";
import { CalendarXDuotoneIcon } from "../duotone/calendar-x-duotone.icon";
import { CalendarXFillIcon } from "../fill/calendar-x-fill.icon";
import { CalendarXLightIcon } from "../light/calendar-x-light.icon";
import { CalendarXRegularIcon } from "../regular/calendar-x-regular.icon";
import { CalendarXThinIcon } from "../thin/calendar-x-thin.icon";

export const CalendarXIcon = memo(function CalendarX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarXBoldIcon,
      duotone: CalendarXDuotoneIcon,
      fill: CalendarXFillIcon,
      light: CalendarXLightIcon,
      regular: CalendarXRegularIcon,
      thin: CalendarXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

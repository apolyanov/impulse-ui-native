import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarBoldIcon } from "../bold/calendar-bold.icon";
import { CalendarDuotoneIcon } from "../duotone/calendar-duotone.icon";
import { CalendarFillIcon } from "../fill/calendar-fill.icon";
import { CalendarLightIcon } from "../light/calendar-light.icon";
import { CalendarRegularIcon } from "../regular/calendar-regular.icon";
import { CalendarThinIcon } from "../thin/calendar-thin.icon";

export const CalendarIcon = memo(function Calendar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarBoldIcon,
      duotone: CalendarDuotoneIcon,
      fill: CalendarFillIcon,
      light: CalendarLightIcon,
      regular: CalendarRegularIcon,
      thin: CalendarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

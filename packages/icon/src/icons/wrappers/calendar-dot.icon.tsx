import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarDotBoldIcon } from "../bold/calendar-dot-bold.icon";
import { CalendarDotDuotoneIcon } from "../duotone/calendar-dot-duotone.icon";
import { CalendarDotFillIcon } from "../fill/calendar-dot-fill.icon";
import { CalendarDotLightIcon } from "../light/calendar-dot-light.icon";
import { CalendarDotRegularIcon } from "../regular/calendar-dot-regular.icon";
import { CalendarDotThinIcon } from "../thin/calendar-dot-thin.icon";

export const CalendarDotIcon = memo(function CalendarDot(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarDotBoldIcon,
      duotone: CalendarDotDuotoneIcon,
      fill: CalendarDotFillIcon,
      light: CalendarDotLightIcon,
      regular: CalendarDotRegularIcon,
      thin: CalendarDotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

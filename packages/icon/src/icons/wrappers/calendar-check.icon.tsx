import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarCheckBoldIcon } from "../bold/calendar-check-bold.icon";
import { CalendarCheckDuotoneIcon } from "../duotone/calendar-check-duotone.icon";
import { CalendarCheckFillIcon } from "../fill/calendar-check-fill.icon";
import { CalendarCheckLightIcon } from "../light/calendar-check-light.icon";
import { CalendarCheckRegularIcon } from "../regular/calendar-check-regular.icon";
import { CalendarCheckThinIcon } from "../thin/calendar-check-thin.icon";

export const CalendarCheckIcon = memo(function CalendarCheck(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarCheckBoldIcon,
      duotone: CalendarCheckDuotoneIcon,
      fill: CalendarCheckFillIcon,
      light: CalendarCheckLightIcon,
      regular: CalendarCheckRegularIcon,
      thin: CalendarCheckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

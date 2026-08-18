import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarMinusBoldIcon } from "../bold/calendar-minus-bold.icon";
import { CalendarMinusDuotoneIcon } from "../duotone/calendar-minus-duotone.icon";
import { CalendarMinusFillIcon } from "../fill/calendar-minus-fill.icon";
import { CalendarMinusLightIcon } from "../light/calendar-minus-light.icon";
import { CalendarMinusRegularIcon } from "../regular/calendar-minus-regular.icon";
import { CalendarMinusThinIcon } from "../thin/calendar-minus-thin.icon";

export const CalendarMinusIcon = memo(function CalendarMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarMinusBoldIcon,
      duotone: CalendarMinusDuotoneIcon,
      fill: CalendarMinusFillIcon,
      light: CalendarMinusLightIcon,
      regular: CalendarMinusRegularIcon,
      thin: CalendarMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

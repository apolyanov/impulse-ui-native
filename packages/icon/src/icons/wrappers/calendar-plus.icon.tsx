import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarPlusBoldIcon } from "../bold/calendar-plus-bold.icon";
import { CalendarPlusDuotoneIcon } from "../duotone/calendar-plus-duotone.icon";
import { CalendarPlusFillIcon } from "../fill/calendar-plus-fill.icon";
import { CalendarPlusLightIcon } from "../light/calendar-plus-light.icon";
import { CalendarPlusRegularIcon } from "../regular/calendar-plus-regular.icon";
import { CalendarPlusThinIcon } from "../thin/calendar-plus-thin.icon";

export const CalendarPlusIcon = memo(function CalendarPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarPlusBoldIcon,
      duotone: CalendarPlusDuotoneIcon,
      fill: CalendarPlusFillIcon,
      light: CalendarPlusLightIcon,
      regular: CalendarPlusRegularIcon,
      thin: CalendarPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

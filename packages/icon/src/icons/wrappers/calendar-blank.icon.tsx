import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarBlankBoldIcon } from "../bold/calendar-blank-bold.icon";
import { CalendarBlankDuotoneIcon } from "../duotone/calendar-blank-duotone.icon";
import { CalendarBlankFillIcon } from "../fill/calendar-blank-fill.icon";
import { CalendarBlankLightIcon } from "../light/calendar-blank-light.icon";
import { CalendarBlankRegularIcon } from "../regular/calendar-blank-regular.icon";
import { CalendarBlankThinIcon } from "../thin/calendar-blank-thin.icon";

export const CalendarBlankIcon = memo(function CalendarBlank(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarBlankBoldIcon,
      duotone: CalendarBlankDuotoneIcon,
      fill: CalendarBlankFillIcon,
      light: CalendarBlankLightIcon,
      regular: CalendarBlankRegularIcon,
      thin: CalendarBlankThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

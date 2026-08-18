import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarStarBoldIcon } from "../bold/calendar-star-bold.icon";
import { CalendarStarDuotoneIcon } from "../duotone/calendar-star-duotone.icon";
import { CalendarStarFillIcon } from "../fill/calendar-star-fill.icon";
import { CalendarStarLightIcon } from "../light/calendar-star-light.icon";
import { CalendarStarRegularIcon } from "../regular/calendar-star-regular.icon";
import { CalendarStarThinIcon } from "../thin/calendar-star-thin.icon";

export const CalendarStarIcon = memo(function CalendarStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarStarBoldIcon,
      duotone: CalendarStarDuotoneIcon,
      fill: CalendarStarFillIcon,
      light: CalendarStarLightIcon,
      regular: CalendarStarRegularIcon,
      thin: CalendarStarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

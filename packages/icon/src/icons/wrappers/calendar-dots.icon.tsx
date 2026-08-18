import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarDotsBoldIcon } from "../bold/calendar-dots-bold.icon";
import { CalendarDotsDuotoneIcon } from "../duotone/calendar-dots-duotone.icon";
import { CalendarDotsFillIcon } from "../fill/calendar-dots-fill.icon";
import { CalendarDotsLightIcon } from "../light/calendar-dots-light.icon";
import { CalendarDotsRegularIcon } from "../regular/calendar-dots-regular.icon";
import { CalendarDotsThinIcon } from "../thin/calendar-dots-thin.icon";

export const CalendarDotsIcon = memo(function CalendarDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarDotsBoldIcon,
      duotone: CalendarDotsDuotoneIcon,
      fill: CalendarDotsFillIcon,
      light: CalendarDotsLightIcon,
      regular: CalendarDotsRegularIcon,
      thin: CalendarDotsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

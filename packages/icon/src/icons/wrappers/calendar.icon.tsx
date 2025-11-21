import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarBoldIcon } from "../bold";
import { CalendarDuotoneIcon } from "../duotone";
import { CalendarFillIcon } from "../fill";
import { CalendarLightIcon } from "../light";
import { CalendarRegularIcon } from "../regular";
import { CalendarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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

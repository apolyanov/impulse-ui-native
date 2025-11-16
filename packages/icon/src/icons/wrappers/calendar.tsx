import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarBold } from "../bold";
import { CalendarDuotone } from "../duotone";
import { CalendarFill } from "../fill";
import { CalendarLight } from "../light";
import { CalendarRegular } from "../regular";
import { CalendarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Calendar = memo(function Calendar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarBold,
      duotone: CalendarDuotone,
      fill: CalendarFill,
      light: CalendarLight,
      regular: CalendarRegular,
      thin: CalendarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

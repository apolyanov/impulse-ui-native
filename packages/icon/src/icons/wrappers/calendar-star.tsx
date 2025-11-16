import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarStarBold } from "../bold";
import { CalendarStarDuotone } from "../duotone";
import { CalendarStarFill } from "../fill";
import { CalendarStarLight } from "../light";
import { CalendarStarRegular } from "../regular";
import { CalendarStarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarStar = memo(function CalendarStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarStarBold,
      duotone: CalendarStarDuotone,
      fill: CalendarStarFill,
      light: CalendarStarLight,
      regular: CalendarStarRegular,
      thin: CalendarStarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

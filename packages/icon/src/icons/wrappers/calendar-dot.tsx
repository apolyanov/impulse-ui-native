import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarDotBold } from "../bold";
import { CalendarDotDuotone } from "../duotone";
import { CalendarDotFill } from "../fill";
import { CalendarDotLight } from "../light";
import { CalendarDotRegular } from "../regular";
import { CalendarDotThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarDot = memo(function CalendarDot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarDotBold,
      duotone: CalendarDotDuotone,
      fill: CalendarDotFill,
      light: CalendarDotLight,
      regular: CalendarDotRegular,
      thin: CalendarDotThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

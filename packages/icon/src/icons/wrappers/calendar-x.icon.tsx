import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarXBoldIcon } from "../bold";
import { CalendarXDuotoneIcon } from "../duotone";
import { CalendarXFillIcon } from "../fill";
import { CalendarXLightIcon } from "../light";
import { CalendarXRegularIcon } from "../regular";
import { CalendarXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarXIcon = memo(function CalendarX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarXBoldIcon,
      duotone: CalendarXDuotoneIcon,
      fill: CalendarXFillIcon,
      light: CalendarXLightIcon,
      regular: CalendarXRegularIcon,
      thin: CalendarXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

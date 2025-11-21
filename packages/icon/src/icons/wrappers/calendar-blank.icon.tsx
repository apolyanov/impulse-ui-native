import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarBlankBoldIcon } from "../bold";
import { CalendarBlankDuotoneIcon } from "../duotone";
import { CalendarBlankFillIcon } from "../fill";
import { CalendarBlankLightIcon } from "../light";
import { CalendarBlankRegularIcon } from "../regular";
import { CalendarBlankThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarBlankIcon = memo(function CalendarBlank(
  props: IconWrapperProps
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

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarHeartBoldIcon } from "../bold";
import { CalendarHeartDuotoneIcon } from "../duotone";
import { CalendarHeartFillIcon } from "../fill";
import { CalendarHeartLightIcon } from "../light";
import { CalendarHeartRegularIcon } from "../regular";
import { CalendarHeartThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarHeartIcon = memo(function CalendarHeart(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarHeartBoldIcon,
      duotone: CalendarHeartDuotoneIcon,
      fill: CalendarHeartFillIcon,
      light: CalendarHeartLightIcon,
      regular: CalendarHeartRegularIcon,
      thin: CalendarHeartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

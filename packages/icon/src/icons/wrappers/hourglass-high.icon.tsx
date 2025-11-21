import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassHighBoldIcon } from "../bold";
import { HourglassHighDuotoneIcon } from "../duotone";
import { HourglassHighFillIcon } from "../fill";
import { HourglassHighLightIcon } from "../light";
import { HourglassHighRegularIcon } from "../regular";
import { HourglassHighThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassHighIcon = memo(function HourglassHigh(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassHighBoldIcon,
      duotone: HourglassHighDuotoneIcon,
      fill: HourglassHighFillIcon,
      light: HourglassHighLightIcon,
      regular: HourglassHighRegularIcon,
      thin: HourglassHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

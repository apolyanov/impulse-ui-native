import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassHighBoldIcon } from "../bold/hourglass-high-bold.icon";
import { HourglassHighDuotoneIcon } from "../duotone/hourglass-high-duotone.icon";
import { HourglassHighFillIcon } from "../fill/hourglass-high-fill.icon";
import { HourglassHighLightIcon } from "../light/hourglass-high-light.icon";
import { HourglassHighRegularIcon } from "../regular/hourglass-high-regular.icon";
import { HourglassHighThinIcon } from "../thin/hourglass-high-thin.icon";

export const HourglassHighIcon = memo(function HourglassHigh(
  props: IconWrapperProps,
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

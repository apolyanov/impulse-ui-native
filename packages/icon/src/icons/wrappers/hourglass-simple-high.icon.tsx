import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassSimpleHighBoldIcon } from "../bold/hourglass-simple-high-bold.icon";
import { HourglassSimpleHighDuotoneIcon } from "../duotone/hourglass-simple-high-duotone.icon";
import { HourglassSimpleHighFillIcon } from "../fill/hourglass-simple-high-fill.icon";
import { HourglassSimpleHighLightIcon } from "../light/hourglass-simple-high-light.icon";
import { HourglassSimpleHighRegularIcon } from "../regular/hourglass-simple-high-regular.icon";
import { HourglassSimpleHighThinIcon } from "../thin/hourglass-simple-high-thin.icon";

export const HourglassSimpleHighIcon = memo(function HourglassSimpleHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleHighBoldIcon,
      duotone: HourglassSimpleHighDuotoneIcon,
      fill: HourglassSimpleHighFillIcon,
      light: HourglassSimpleHighLightIcon,
      regular: HourglassSimpleHighRegularIcon,
      thin: HourglassSimpleHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

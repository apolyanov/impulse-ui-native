import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassSimpleBoldIcon } from "../bold/hourglass-simple-bold.icon";
import { HourglassSimpleDuotoneIcon } from "../duotone/hourglass-simple-duotone.icon";
import { HourglassSimpleFillIcon } from "../fill/hourglass-simple-fill.icon";
import { HourglassSimpleLightIcon } from "../light/hourglass-simple-light.icon";
import { HourglassSimpleRegularIcon } from "../regular/hourglass-simple-regular.icon";
import { HourglassSimpleThinIcon } from "../thin/hourglass-simple-thin.icon";

export const HourglassSimpleIcon = memo(function HourglassSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleBoldIcon,
      duotone: HourglassSimpleDuotoneIcon,
      fill: HourglassSimpleFillIcon,
      light: HourglassSimpleLightIcon,
      regular: HourglassSimpleRegularIcon,
      thin: HourglassSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

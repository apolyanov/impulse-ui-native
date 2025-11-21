import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleBoldIcon } from "../bold";
import { HourglassSimpleDuotoneIcon } from "../duotone";
import { HourglassSimpleFillIcon } from "../fill";
import { HourglassSimpleLightIcon } from "../light";
import { HourglassSimpleRegularIcon } from "../regular";
import { HourglassSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimpleIcon = memo(function HourglassSimple(
  props: IconWrapperProps
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

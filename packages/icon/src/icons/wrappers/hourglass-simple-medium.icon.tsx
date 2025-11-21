import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleMediumBoldIcon } from "../bold";
import { HourglassSimpleMediumDuotoneIcon } from "../duotone";
import { HourglassSimpleMediumFillIcon } from "../fill";
import { HourglassSimpleMediumLightIcon } from "../light";
import { HourglassSimpleMediumRegularIcon } from "../regular";
import { HourglassSimpleMediumThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimpleMediumIcon = memo(function HourglassSimpleMedium(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleMediumBoldIcon,
      duotone: HourglassSimpleMediumDuotoneIcon,
      fill: HourglassSimpleMediumFillIcon,
      light: HourglassSimpleMediumLightIcon,
      regular: HourglassSimpleMediumRegularIcon,
      thin: HourglassSimpleMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

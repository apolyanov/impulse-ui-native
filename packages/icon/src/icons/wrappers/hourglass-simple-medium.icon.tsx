import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassSimpleMediumBoldIcon } from "../bold/hourglass-simple-medium-bold.icon";
import { HourglassSimpleMediumDuotoneIcon } from "../duotone/hourglass-simple-medium-duotone.icon";
import { HourglassSimpleMediumFillIcon } from "../fill/hourglass-simple-medium-fill.icon";
import { HourglassSimpleMediumLightIcon } from "../light/hourglass-simple-medium-light.icon";
import { HourglassSimpleMediumRegularIcon } from "../regular/hourglass-simple-medium-regular.icon";
import { HourglassSimpleMediumThinIcon } from "../thin/hourglass-simple-medium-thin.icon";

export const HourglassSimpleMediumIcon = memo(function HourglassSimpleMedium(
  props: IconWrapperProps,
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

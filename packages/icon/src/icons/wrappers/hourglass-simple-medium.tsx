import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleMediumBold } from "../bold";
import { HourglassSimpleMediumDuotone } from "../duotone";
import { HourglassSimpleMediumFill } from "../fill";
import { HourglassSimpleMediumLight } from "../light";
import { HourglassSimpleMediumRegular } from "../regular";
import { HourglassSimpleMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimpleMedium = memo(function HourglassSimpleMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleMediumBold,
      duotone: HourglassSimpleMediumDuotone,
      fill: HourglassSimpleMediumFill,
      light: HourglassSimpleMediumLight,
      regular: HourglassSimpleMediumRegular,
      thin: HourglassSimpleMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

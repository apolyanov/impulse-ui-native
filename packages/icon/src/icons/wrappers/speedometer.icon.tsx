import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeedometerBoldIcon } from "../bold";
import { SpeedometerDuotoneIcon } from "../duotone";
import { SpeedometerFillIcon } from "../fill";
import { SpeedometerLightIcon } from "../light";
import { SpeedometerRegularIcon } from "../regular";
import { SpeedometerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeedometerIcon = memo(function Speedometer(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeedometerBoldIcon,
      duotone: SpeedometerDuotoneIcon,
      fill: SpeedometerFillIcon,
      light: SpeedometerLightIcon,
      regular: SpeedometerRegularIcon,
      thin: SpeedometerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

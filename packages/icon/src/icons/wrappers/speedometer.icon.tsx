import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeedometerBoldIcon } from "../bold/speedometer-bold.icon";
import { SpeedometerDuotoneIcon } from "../duotone/speedometer-duotone.icon";
import { SpeedometerFillIcon } from "../fill/speedometer-fill.icon";
import { SpeedometerLightIcon } from "../light/speedometer-light.icon";
import { SpeedometerRegularIcon } from "../regular/speedometer-regular.icon";
import { SpeedometerThinIcon } from "../thin/speedometer-thin.icon";

export const SpeedometerIcon = memo(function Speedometer(
  props: IconWrapperProps,
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

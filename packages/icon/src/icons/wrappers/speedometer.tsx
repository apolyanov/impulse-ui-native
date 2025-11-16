import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeedometerBold } from "../bold";
import { SpeedometerDuotone } from "../duotone";
import { SpeedometerFill } from "../fill";
import { SpeedometerLight } from "../light";
import { SpeedometerRegular } from "../regular";
import { SpeedometerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Speedometer = memo(function Speedometer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeedometerBold,
      duotone: SpeedometerDuotone,
      fill: SpeedometerFill,
      light: SpeedometerLight,
      regular: SpeedometerRegular,
      thin: SpeedometerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

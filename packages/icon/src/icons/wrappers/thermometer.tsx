import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThermometerBold } from "../bold";
import { ThermometerDuotone } from "../duotone";
import { ThermometerFill } from "../fill";
import { ThermometerLight } from "../light";
import { ThermometerRegular } from "../regular";
import { ThermometerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Thermometer = memo(function Thermometer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerBold,
      duotone: ThermometerDuotone,
      fill: ThermometerFill,
      light: ThermometerLight,
      regular: ThermometerRegular,
      thin: ThermometerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

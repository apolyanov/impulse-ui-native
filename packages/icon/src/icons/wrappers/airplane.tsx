import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneBold } from "../bold";
import { AirplaneDuotone } from "../duotone";
import { AirplaneFill } from "../fill";
import { AirplaneLight } from "../light";
import { AirplaneRegular } from "../regular";
import { AirplaneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Airplane = memo(function Airplane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneBold,
      duotone: AirplaneDuotone,
      fill: AirplaneFill,
      light: AirplaneLight,
      regular: AirplaneRegular,
      thin: AirplaneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

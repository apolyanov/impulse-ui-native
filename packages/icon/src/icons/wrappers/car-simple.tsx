import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarSimpleBold } from "../bold";
import { CarSimpleDuotone } from "../duotone";
import { CarSimpleFill } from "../fill";
import { CarSimpleLight } from "../light";
import { CarSimpleRegular } from "../regular";
import { CarSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CarSimple = memo(function CarSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarSimpleBold,
      duotone: CarSimpleDuotone,
      fill: CarSimpleFill,
      light: CarSimpleLight,
      regular: CarSimpleRegular,
      thin: CarSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

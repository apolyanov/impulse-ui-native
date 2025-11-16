import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarBold } from "../bold";
import { CarDuotone } from "../duotone";
import { CarFill } from "../fill";
import { CarLight } from "../light";
import { CarRegular } from "../regular";
import { CarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Car = memo(function Car(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarBold,
      duotone: CarDuotone,
      fill: CarFill,
      light: CarLight,
      regular: CarRegular,
      thin: CarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

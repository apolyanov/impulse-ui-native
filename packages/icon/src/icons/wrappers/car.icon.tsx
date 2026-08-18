import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CarBoldIcon } from "../bold/car-bold.icon";
import { CarDuotoneIcon } from "../duotone/car-duotone.icon";
import { CarFillIcon } from "../fill/car-fill.icon";
import { CarLightIcon } from "../light/car-light.icon";
import { CarRegularIcon } from "../regular/car-regular.icon";
import { CarThinIcon } from "../thin/car-thin.icon";

export const CarIcon = memo(function Car(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarBoldIcon,
      duotone: CarDuotoneIcon,
      fill: CarFillIcon,
      light: CarLightIcon,
      regular: CarRegularIcon,
      thin: CarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

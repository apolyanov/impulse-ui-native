import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarBoldIcon } from "../bold";
import { CarDuotoneIcon } from "../duotone";
import { CarFillIcon } from "../fill";
import { CarLightIcon } from "../light";
import { CarRegularIcon } from "../regular";
import { CarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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

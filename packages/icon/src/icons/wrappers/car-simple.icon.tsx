import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CarSimpleBoldIcon } from "../bold/car-simple-bold.icon";
import { CarSimpleDuotoneIcon } from "../duotone/car-simple-duotone.icon";
import { CarSimpleFillIcon } from "../fill/car-simple-fill.icon";
import { CarSimpleLightIcon } from "../light/car-simple-light.icon";
import { CarSimpleRegularIcon } from "../regular/car-simple-regular.icon";
import { CarSimpleThinIcon } from "../thin/car-simple-thin.icon";

export const CarSimpleIcon = memo(function CarSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarSimpleBoldIcon,
      duotone: CarSimpleDuotoneIcon,
      fill: CarSimpleFillIcon,
      light: CarSimpleLightIcon,
      regular: CarSimpleRegularIcon,
      thin: CarSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

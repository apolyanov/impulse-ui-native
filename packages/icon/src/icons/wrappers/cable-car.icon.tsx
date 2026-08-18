import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CableCarBoldIcon } from "../bold/cable-car-bold.icon";
import { CableCarDuotoneIcon } from "../duotone/cable-car-duotone.icon";
import { CableCarFillIcon } from "../fill/cable-car-fill.icon";
import { CableCarLightIcon } from "../light/cable-car-light.icon";
import { CableCarRegularIcon } from "../regular/cable-car-regular.icon";
import { CableCarThinIcon } from "../thin/cable-car-thin.icon";

export const CableCarIcon = memo(function CableCar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CableCarBoldIcon,
      duotone: CableCarDuotoneIcon,
      fill: CableCarFillIcon,
      light: CableCarLightIcon,
      regular: CableCarRegularIcon,
      thin: CableCarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

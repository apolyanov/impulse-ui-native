import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GarageBold } from "../bold";
import { GarageDuotone } from "../duotone";
import { GarageFill } from "../fill";
import { GarageLight } from "../light";
import { GarageRegular } from "../regular";
import { GarageThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Garage = memo(function Garage(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GarageBold,
      duotone: GarageDuotone,
      fill: GarageFill,
      light: GarageLight,
      regular: GarageRegular,
      thin: GarageThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinPlusBold } from "../bold";
import { MapPinPlusDuotone } from "../duotone";
import { MapPinPlusFill } from "../fill";
import { MapPinPlusLight } from "../light";
import { MapPinPlusRegular } from "../regular";
import { MapPinPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinPlus = memo(function MapPinPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinPlusBold,
      duotone: MapPinPlusDuotone,
      fill: MapPinPlusFill,
      light: MapPinPlusLight,
      regular: MapPinPlusRegular,
      thin: MapPinPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

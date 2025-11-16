import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinBold } from "../bold";
import { MapPinDuotone } from "../duotone";
import { MapPinFill } from "../fill";
import { MapPinLight } from "../light";
import { MapPinRegular } from "../regular";
import { MapPinThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPin = memo(function MapPin(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinBold,
      duotone: MapPinDuotone,
      fill: MapPinFill,
      light: MapPinLight,
      regular: MapPinRegular,
      thin: MapPinThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

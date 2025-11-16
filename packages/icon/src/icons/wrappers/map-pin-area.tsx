import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinAreaBold } from "../bold";
import { MapPinAreaDuotone } from "../duotone";
import { MapPinAreaFill } from "../fill";
import { MapPinAreaLight } from "../light";
import { MapPinAreaRegular } from "../regular";
import { MapPinAreaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinArea = memo(function MapPinArea(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinAreaBold,
      duotone: MapPinAreaDuotone,
      fill: MapPinAreaFill,
      light: MapPinAreaLight,
      regular: MapPinAreaRegular,
      thin: MapPinAreaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

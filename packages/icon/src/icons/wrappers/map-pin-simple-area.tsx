import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinSimpleAreaBold } from "../bold";
import { MapPinSimpleAreaDuotone } from "../duotone";
import { MapPinSimpleAreaFill } from "../fill";
import { MapPinSimpleAreaLight } from "../light";
import { MapPinSimpleAreaRegular } from "../regular";
import { MapPinSimpleAreaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinSimpleArea = memo(function MapPinSimpleArea(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinSimpleAreaBold,
      duotone: MapPinSimpleAreaDuotone,
      fill: MapPinSimpleAreaFill,
      light: MapPinSimpleAreaLight,
      regular: MapPinSimpleAreaRegular,
      thin: MapPinSimpleAreaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

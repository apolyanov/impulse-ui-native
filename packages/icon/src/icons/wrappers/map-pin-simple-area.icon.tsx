import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MapPinSimpleAreaBoldIcon } from "../bold/map-pin-simple-area-bold.icon";
import { MapPinSimpleAreaDuotoneIcon } from "../duotone/map-pin-simple-area-duotone.icon";
import { MapPinSimpleAreaFillIcon } from "../fill/map-pin-simple-area-fill.icon";
import { MapPinSimpleAreaLightIcon } from "../light/map-pin-simple-area-light.icon";
import { MapPinSimpleAreaRegularIcon } from "../regular/map-pin-simple-area-regular.icon";
import { MapPinSimpleAreaThinIcon } from "../thin/map-pin-simple-area-thin.icon";

export const MapPinSimpleAreaIcon = memo(function MapPinSimpleArea(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinSimpleAreaBoldIcon,
      duotone: MapPinSimpleAreaDuotoneIcon,
      fill: MapPinSimpleAreaFillIcon,
      light: MapPinSimpleAreaLightIcon,
      regular: MapPinSimpleAreaRegularIcon,
      thin: MapPinSimpleAreaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

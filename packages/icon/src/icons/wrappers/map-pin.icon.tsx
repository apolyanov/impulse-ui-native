import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MapPinBoldIcon } from "../bold/map-pin-bold.icon";
import { MapPinDuotoneIcon } from "../duotone/map-pin-duotone.icon";
import { MapPinFillIcon } from "../fill/map-pin-fill.icon";
import { MapPinLightIcon } from "../light/map-pin-light.icon";
import { MapPinRegularIcon } from "../regular/map-pin-regular.icon";
import { MapPinThinIcon } from "../thin/map-pin-thin.icon";

export const MapPinIcon = memo(function MapPin(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinBoldIcon,
      duotone: MapPinDuotoneIcon,
      fill: MapPinFillIcon,
      light: MapPinLightIcon,
      regular: MapPinRegularIcon,
      thin: MapPinThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

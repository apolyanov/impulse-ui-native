import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MapPinBoldIcon } from "../bold";
import { MapPinDuotoneIcon } from "../duotone";
import { MapPinFillIcon } from "../fill";
import { MapPinLightIcon } from "../light";
import { MapPinRegularIcon } from "../regular";
import { MapPinThinIcon } from "../thin";

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

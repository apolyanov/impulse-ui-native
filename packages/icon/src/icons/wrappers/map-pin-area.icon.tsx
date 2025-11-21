import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinAreaBoldIcon } from "../bold";
import { MapPinAreaDuotoneIcon } from "../duotone";
import { MapPinAreaFillIcon } from "../fill";
import { MapPinAreaLightIcon } from "../light";
import { MapPinAreaRegularIcon } from "../regular";
import { MapPinAreaThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinAreaIcon = memo(function MapPinArea(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinAreaBoldIcon,
      duotone: MapPinAreaDuotoneIcon,
      fill: MapPinAreaFillIcon,
      light: MapPinAreaLightIcon,
      regular: MapPinAreaRegularIcon,
      thin: MapPinAreaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

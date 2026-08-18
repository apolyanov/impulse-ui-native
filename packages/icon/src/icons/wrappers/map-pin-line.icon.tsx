import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MapPinLineBoldIcon } from "../bold/map-pin-line-bold.icon";
import { MapPinLineDuotoneIcon } from "../duotone/map-pin-line-duotone.icon";
import { MapPinLineFillIcon } from "../fill/map-pin-line-fill.icon";
import { MapPinLineLightIcon } from "../light/map-pin-line-light.icon";
import { MapPinLineRegularIcon } from "../regular/map-pin-line-regular.icon";
import { MapPinLineThinIcon } from "../thin/map-pin-line-thin.icon";

export const MapPinLineIcon = memo(function MapPinLine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinLineBoldIcon,
      duotone: MapPinLineDuotoneIcon,
      fill: MapPinLineFillIcon,
      light: MapPinLineLightIcon,
      regular: MapPinLineRegularIcon,
      thin: MapPinLineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MapPinSimpleLineBoldIcon } from "../bold/map-pin-simple-line-bold.icon";
import { MapPinSimpleLineDuotoneIcon } from "../duotone/map-pin-simple-line-duotone.icon";
import { MapPinSimpleLineFillIcon } from "../fill/map-pin-simple-line-fill.icon";
import { MapPinSimpleLineLightIcon } from "../light/map-pin-simple-line-light.icon";
import { MapPinSimpleLineRegularIcon } from "../regular/map-pin-simple-line-regular.icon";
import { MapPinSimpleLineThinIcon } from "../thin/map-pin-simple-line-thin.icon";

export const MapPinSimpleLineIcon = memo(function MapPinSimpleLine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinSimpleLineBoldIcon,
      duotone: MapPinSimpleLineDuotoneIcon,
      fill: MapPinSimpleLineFillIcon,
      light: MapPinSimpleLineLightIcon,
      regular: MapPinSimpleLineRegularIcon,
      thin: MapPinSimpleLineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

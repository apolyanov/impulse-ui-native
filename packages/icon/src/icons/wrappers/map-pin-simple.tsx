import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinSimpleBold } from "../bold";
import { MapPinSimpleDuotone } from "../duotone";
import { MapPinSimpleFill } from "../fill";
import { MapPinSimpleLight } from "../light";
import { MapPinSimpleRegular } from "../regular";
import { MapPinSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinSimple = memo(function MapPinSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinSimpleBold,
      duotone: MapPinSimpleDuotone,
      fill: MapPinSimpleFill,
      light: MapPinSimpleLight,
      regular: MapPinSimpleRegular,
      thin: MapPinSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

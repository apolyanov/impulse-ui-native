import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinSimpleLineBold } from "../bold";
import { MapPinSimpleLineDuotone } from "../duotone";
import { MapPinSimpleLineFill } from "../fill";
import { MapPinSimpleLineLight } from "../light";
import { MapPinSimpleLineRegular } from "../regular";
import { MapPinSimpleLineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinSimpleLine = memo(function MapPinSimpleLine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinSimpleLineBold,
      duotone: MapPinSimpleLineDuotone,
      fill: MapPinSimpleLineFill,
      light: MapPinSimpleLineLight,
      regular: MapPinSimpleLineRegular,
      thin: MapPinSimpleLineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

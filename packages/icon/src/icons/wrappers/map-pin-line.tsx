import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinLineBold } from "../bold";
import { MapPinLineDuotone } from "../duotone";
import { MapPinLineFill } from "../fill";
import { MapPinLineLight } from "../light";
import { MapPinLineRegular } from "../regular";
import { MapPinLineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinLine = memo(function MapPinLine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinLineBold,
      duotone: MapPinLineDuotone,
      fill: MapPinLineFill,
      light: MapPinLineLight,
      regular: MapPinLineRegular,
      thin: MapPinLineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

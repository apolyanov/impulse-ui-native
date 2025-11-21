import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapPinPlusBoldIcon } from "../bold";
import { MapPinPlusDuotoneIcon } from "../duotone";
import { MapPinPlusFillIcon } from "../fill";
import { MapPinPlusLightIcon } from "../light";
import { MapPinPlusRegularIcon } from "../regular";
import { MapPinPlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapPinPlusIcon = memo(function MapPinPlus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapPinPlusBoldIcon,
      duotone: MapPinPlusDuotoneIcon,
      fill: MapPinPlusFillIcon,
      light: MapPinPlusLightIcon,
      regular: MapPinPlusRegularIcon,
      thin: MapPinPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

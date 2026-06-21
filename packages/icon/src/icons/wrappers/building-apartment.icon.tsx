import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BuildingApartmentBoldIcon } from "../bold";
import { BuildingApartmentDuotoneIcon } from "../duotone";
import { BuildingApartmentFillIcon } from "../fill";
import { BuildingApartmentLightIcon } from "../light";
import { BuildingApartmentRegularIcon } from "../regular";
import { BuildingApartmentThinIcon } from "../thin";

export const BuildingApartmentIcon = memo(function BuildingApartment(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingApartmentBoldIcon,
      duotone: BuildingApartmentDuotoneIcon,
      fill: BuildingApartmentFillIcon,
      light: BuildingApartmentLightIcon,
      regular: BuildingApartmentRegularIcon,
      thin: BuildingApartmentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BuildingApartmentBoldIcon } from "../bold/building-apartment-bold.icon";
import { BuildingApartmentDuotoneIcon } from "../duotone/building-apartment-duotone.icon";
import { BuildingApartmentFillIcon } from "../fill/building-apartment-fill.icon";
import { BuildingApartmentLightIcon } from "../light/building-apartment-light.icon";
import { BuildingApartmentRegularIcon } from "../regular/building-apartment-regular.icon";
import { BuildingApartmentThinIcon } from "../thin/building-apartment-thin.icon";

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

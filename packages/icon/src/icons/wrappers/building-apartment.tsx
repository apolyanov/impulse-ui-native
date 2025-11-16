import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BuildingApartmentBold } from "../bold";
import { BuildingApartmentDuotone } from "../duotone";
import { BuildingApartmentFill } from "../fill";
import { BuildingApartmentLight } from "../light";
import { BuildingApartmentRegular } from "../regular";
import { BuildingApartmentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BuildingApartment = memo(function BuildingApartment(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingApartmentBold,
      duotone: BuildingApartmentDuotone,
      fill: BuildingApartmentFill,
      light: BuildingApartmentLight,
      regular: BuildingApartmentRegular,
      thin: BuildingApartmentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BuildingOfficeBold } from "../bold";
import { BuildingOfficeDuotone } from "../duotone";
import { BuildingOfficeFill } from "../fill";
import { BuildingOfficeLight } from "../light";
import { BuildingOfficeRegular } from "../regular";
import { BuildingOfficeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BuildingOffice = memo(function BuildingOffice(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingOfficeBold,
      duotone: BuildingOfficeDuotone,
      fill: BuildingOfficeFill,
      light: BuildingOfficeLight,
      regular: BuildingOfficeRegular,
      thin: BuildingOfficeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

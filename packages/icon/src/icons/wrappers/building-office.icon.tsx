import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BuildingOfficeBoldIcon } from "../bold";
import { BuildingOfficeDuotoneIcon } from "../duotone";
import { BuildingOfficeFillIcon } from "../fill";
import { BuildingOfficeLightIcon } from "../light";
import { BuildingOfficeRegularIcon } from "../regular";
import { BuildingOfficeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BuildingOfficeIcon = memo(function BuildingOffice(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingOfficeBoldIcon,
      duotone: BuildingOfficeDuotoneIcon,
      fill: BuildingOfficeFillIcon,
      light: BuildingOfficeLightIcon,
      regular: BuildingOfficeRegularIcon,
      thin: BuildingOfficeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

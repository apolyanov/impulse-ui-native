import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BuildingOfficeBoldIcon } from "../bold/building-office-bold.icon";
import { BuildingOfficeDuotoneIcon } from "../duotone/building-office-duotone.icon";
import { BuildingOfficeFillIcon } from "../fill/building-office-fill.icon";
import { BuildingOfficeLightIcon } from "../light/building-office-light.icon";
import { BuildingOfficeRegularIcon } from "../regular/building-office-regular.icon";
import { BuildingOfficeThinIcon } from "../thin/building-office-thin.icon";

export const BuildingOfficeIcon = memo(function BuildingOffice(
  props: IconWrapperProps,
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

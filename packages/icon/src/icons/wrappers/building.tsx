import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BuildingBold } from "../bold";
import { BuildingDuotone } from "../duotone";
import { BuildingFill } from "../fill";
import { BuildingLight } from "../light";
import { BuildingRegular } from "../regular";
import { BuildingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Building = memo(function Building(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingBold,
      duotone: BuildingDuotone,
      fill: BuildingFill,
      light: BuildingLight,
      regular: BuildingRegular,
      thin: BuildingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

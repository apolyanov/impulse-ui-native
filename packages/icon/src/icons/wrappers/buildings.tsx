import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BuildingsBold } from "../bold";
import { BuildingsDuotone } from "../duotone";
import { BuildingsFill } from "../fill";
import { BuildingsLight } from "../light";
import { BuildingsRegular } from "../regular";
import { BuildingsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Buildings = memo(function Buildings(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingsBold,
      duotone: BuildingsDuotone,
      fill: BuildingsFill,
      light: BuildingsLight,
      regular: BuildingsRegular,
      thin: BuildingsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

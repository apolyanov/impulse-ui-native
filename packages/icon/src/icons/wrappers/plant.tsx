import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlantBold } from "../bold";
import { PlantDuotone } from "../duotone";
import { PlantFill } from "../fill";
import { PlantLight } from "../light";
import { PlantRegular } from "../regular";
import { PlantThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Plant = memo(function Plant(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlantBold,
      duotone: PlantDuotone,
      fill: PlantFill,
      light: PlantLight,
      regular: PlantRegular,
      thin: PlantThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

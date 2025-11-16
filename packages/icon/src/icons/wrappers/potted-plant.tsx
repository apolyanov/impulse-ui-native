import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PottedPlantBold } from "../bold";
import { PottedPlantDuotone } from "../duotone";
import { PottedPlantFill } from "../fill";
import { PottedPlantLight } from "../light";
import { PottedPlantRegular } from "../regular";
import { PottedPlantThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PottedPlant = memo(function PottedPlant(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PottedPlantBold,
      duotone: PottedPlantDuotone,
      fill: PottedPlantFill,
      light: PottedPlantLight,
      regular: PottedPlantRegular,
      thin: PottedPlantThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

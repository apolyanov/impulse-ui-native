import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NuclearPlantBold } from "../bold";
import { NuclearPlantDuotone } from "../duotone";
import { NuclearPlantFill } from "../fill";
import { NuclearPlantLight } from "../light";
import { NuclearPlantRegular } from "../regular";
import { NuclearPlantThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NuclearPlant = memo(function NuclearPlant(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NuclearPlantBold,
      duotone: NuclearPlantDuotone,
      fill: NuclearPlantFill,
      light: NuclearPlantLight,
      regular: NuclearPlantRegular,
      thin: NuclearPlantThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

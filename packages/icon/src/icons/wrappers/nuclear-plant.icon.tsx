import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NuclearPlantBoldIcon } from "../bold";
import { NuclearPlantDuotoneIcon } from "../duotone";
import { NuclearPlantFillIcon } from "../fill";
import { NuclearPlantLightIcon } from "../light";
import { NuclearPlantRegularIcon } from "../regular";
import { NuclearPlantThinIcon } from "../thin";

export const NuclearPlantIcon = memo(function NuclearPlant(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NuclearPlantBoldIcon,
      duotone: NuclearPlantDuotoneIcon,
      fill: NuclearPlantFillIcon,
      light: NuclearPlantLightIcon,
      regular: NuclearPlantRegularIcon,
      thin: NuclearPlantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

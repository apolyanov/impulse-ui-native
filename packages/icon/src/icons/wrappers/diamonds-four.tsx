import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiamondsFourBold } from "../bold";
import { DiamondsFourDuotone } from "../duotone";
import { DiamondsFourFill } from "../fill";
import { DiamondsFourLight } from "../light";
import { DiamondsFourRegular } from "../regular";
import { DiamondsFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiamondsFour = memo(function DiamondsFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiamondsFourBold,
      duotone: DiamondsFourDuotone,
      fill: DiamondsFourFill,
      light: DiamondsFourLight,
      regular: DiamondsFourRegular,
      thin: DiamondsFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

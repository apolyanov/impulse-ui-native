import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalLowBold } from "../bold";
import { CellSignalLowDuotone } from "../duotone";
import { CellSignalLowFill } from "../fill";
import { CellSignalLowLight } from "../light";
import { CellSignalLowRegular } from "../regular";
import { CellSignalLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalLow = memo(function CellSignalLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalLowBold,
      duotone: CellSignalLowDuotone,
      fill: CellSignalLowFill,
      light: CellSignalLowLight,
      regular: CellSignalLowRegular,
      thin: CellSignalLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

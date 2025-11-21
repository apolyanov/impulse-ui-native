import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalLowBoldIcon } from "../bold";
import { CellSignalLowDuotoneIcon } from "../duotone";
import { CellSignalLowFillIcon } from "../fill";
import { CellSignalLowLightIcon } from "../light";
import { CellSignalLowRegularIcon } from "../regular";
import { CellSignalLowThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalLowIcon = memo(function CellSignalLow(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalLowBoldIcon,
      duotone: CellSignalLowDuotoneIcon,
      fill: CellSignalLowFillIcon,
      light: CellSignalLowLightIcon,
      regular: CellSignalLowRegularIcon,
      thin: CellSignalLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

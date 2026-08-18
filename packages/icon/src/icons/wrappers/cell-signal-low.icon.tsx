import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalLowBoldIcon } from "../bold/cell-signal-low-bold.icon";
import { CellSignalLowDuotoneIcon } from "../duotone/cell-signal-low-duotone.icon";
import { CellSignalLowFillIcon } from "../fill/cell-signal-low-fill.icon";
import { CellSignalLowLightIcon } from "../light/cell-signal-low-light.icon";
import { CellSignalLowRegularIcon } from "../regular/cell-signal-low-regular.icon";
import { CellSignalLowThinIcon } from "../thin/cell-signal-low-thin.icon";

export const CellSignalLowIcon = memo(function CellSignalLow(
  props: IconWrapperProps,
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

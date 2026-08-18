import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalHighBoldIcon } from "../bold/cell-signal-high-bold.icon";
import { CellSignalHighDuotoneIcon } from "../duotone/cell-signal-high-duotone.icon";
import { CellSignalHighFillIcon } from "../fill/cell-signal-high-fill.icon";
import { CellSignalHighLightIcon } from "../light/cell-signal-high-light.icon";
import { CellSignalHighRegularIcon } from "../regular/cell-signal-high-regular.icon";
import { CellSignalHighThinIcon } from "../thin/cell-signal-high-thin.icon";

export const CellSignalHighIcon = memo(function CellSignalHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalHighBoldIcon,
      duotone: CellSignalHighDuotoneIcon,
      fill: CellSignalHighFillIcon,
      light: CellSignalHighLightIcon,
      regular: CellSignalHighRegularIcon,
      thin: CellSignalHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

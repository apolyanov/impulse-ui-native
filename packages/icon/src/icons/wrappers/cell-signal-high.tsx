import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalHighBold } from "../bold";
import { CellSignalHighDuotone } from "../duotone";
import { CellSignalHighFill } from "../fill";
import { CellSignalHighLight } from "../light";
import { CellSignalHighRegular } from "../regular";
import { CellSignalHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalHigh = memo(function CellSignalHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalHighBold,
      duotone: CellSignalHighDuotone,
      fill: CellSignalHighFill,
      light: CellSignalHighLight,
      regular: CellSignalHighRegular,
      thin: CellSignalHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

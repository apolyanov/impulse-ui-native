import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalXBold } from "../bold";
import { CellSignalXDuotone } from "../duotone";
import { CellSignalXFill } from "../fill";
import { CellSignalXLight } from "../light";
import { CellSignalXRegular } from "../regular";
import { CellSignalXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalX = memo(function CellSignalX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalXBold,
      duotone: CellSignalXDuotone,
      fill: CellSignalXFill,
      light: CellSignalXLight,
      regular: CellSignalXRegular,
      thin: CellSignalXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

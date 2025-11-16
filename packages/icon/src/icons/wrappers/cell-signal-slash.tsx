import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalSlashBold } from "../bold";
import { CellSignalSlashDuotone } from "../duotone";
import { CellSignalSlashFill } from "../fill";
import { CellSignalSlashLight } from "../light";
import { CellSignalSlashRegular } from "../regular";
import { CellSignalSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalSlash = memo(function CellSignalSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalSlashBold,
      duotone: CellSignalSlashDuotone,
      fill: CellSignalSlashFill,
      light: CellSignalSlashLight,
      regular: CellSignalSlashRegular,
      thin: CellSignalSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

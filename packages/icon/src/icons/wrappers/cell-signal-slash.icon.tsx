import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalSlashBoldIcon } from "../bold/cell-signal-slash-bold.icon";
import { CellSignalSlashDuotoneIcon } from "../duotone/cell-signal-slash-duotone.icon";
import { CellSignalSlashFillIcon } from "../fill/cell-signal-slash-fill.icon";
import { CellSignalSlashLightIcon } from "../light/cell-signal-slash-light.icon";
import { CellSignalSlashRegularIcon } from "../regular/cell-signal-slash-regular.icon";
import { CellSignalSlashThinIcon } from "../thin/cell-signal-slash-thin.icon";

export const CellSignalSlashIcon = memo(function CellSignalSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalSlashBoldIcon,
      duotone: CellSignalSlashDuotoneIcon,
      fill: CellSignalSlashFillIcon,
      light: CellSignalSlashLightIcon,
      regular: CellSignalSlashRegularIcon,
      thin: CellSignalSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

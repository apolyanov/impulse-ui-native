import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalXBoldIcon } from "../bold/cell-signal-x-bold.icon";
import { CellSignalXDuotoneIcon } from "../duotone/cell-signal-x-duotone.icon";
import { CellSignalXFillIcon } from "../fill/cell-signal-x-fill.icon";
import { CellSignalXLightIcon } from "../light/cell-signal-x-light.icon";
import { CellSignalXRegularIcon } from "../regular/cell-signal-x-regular.icon";
import { CellSignalXThinIcon } from "../thin/cell-signal-x-thin.icon";

export const CellSignalXIcon = memo(function CellSignalX(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalXBoldIcon,
      duotone: CellSignalXDuotoneIcon,
      fill: CellSignalXFillIcon,
      light: CellSignalXLightIcon,
      regular: CellSignalXRegularIcon,
      thin: CellSignalXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

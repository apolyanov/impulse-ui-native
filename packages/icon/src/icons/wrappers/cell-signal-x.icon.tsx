import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalXBoldIcon } from "../bold";
import { CellSignalXDuotoneIcon } from "../duotone";
import { CellSignalXFillIcon } from "../fill";
import { CellSignalXLightIcon } from "../light";
import { CellSignalXRegularIcon } from "../regular";
import { CellSignalXThinIcon } from "../thin";

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

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalMediumBoldIcon } from "../bold/cell-signal-medium-bold.icon";
import { CellSignalMediumDuotoneIcon } from "../duotone/cell-signal-medium-duotone.icon";
import { CellSignalMediumFillIcon } from "../fill/cell-signal-medium-fill.icon";
import { CellSignalMediumLightIcon } from "../light/cell-signal-medium-light.icon";
import { CellSignalMediumRegularIcon } from "../regular/cell-signal-medium-regular.icon";
import { CellSignalMediumThinIcon } from "../thin/cell-signal-medium-thin.icon";

export const CellSignalMediumIcon = memo(function CellSignalMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalMediumBoldIcon,
      duotone: CellSignalMediumDuotoneIcon,
      fill: CellSignalMediumFillIcon,
      light: CellSignalMediumLightIcon,
      regular: CellSignalMediumRegularIcon,
      thin: CellSignalMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

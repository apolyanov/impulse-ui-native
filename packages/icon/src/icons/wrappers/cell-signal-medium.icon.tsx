import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalMediumBoldIcon } from "../bold";
import { CellSignalMediumDuotoneIcon } from "../duotone";
import { CellSignalMediumFillIcon } from "../fill";
import { CellSignalMediumLightIcon } from "../light";
import { CellSignalMediumRegularIcon } from "../regular";
import { CellSignalMediumThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalMediumIcon = memo(function CellSignalMedium(
  props: IconWrapperProps
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

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalMediumBold } from "../bold";
import { CellSignalMediumDuotone } from "../duotone";
import { CellSignalMediumFill } from "../fill";
import { CellSignalMediumLight } from "../light";
import { CellSignalMediumRegular } from "../regular";
import { CellSignalMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalMedium = memo(function CellSignalMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalMediumBold,
      duotone: CellSignalMediumDuotone,
      fill: CellSignalMediumFill,
      light: CellSignalMediumLight,
      regular: CellSignalMediumRegular,
      thin: CellSignalMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalFullBold } from "../bold";
import { CellSignalFullDuotone } from "../duotone";
import { CellSignalFullFill } from "../fill";
import { CellSignalFullLight } from "../light";
import { CellSignalFullRegular } from "../regular";
import { CellSignalFullThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalFull = memo(function CellSignalFull(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalFullBold,
      duotone: CellSignalFullDuotone,
      fill: CellSignalFullFill,
      light: CellSignalFullLight,
      regular: CellSignalFullRegular,
      thin: CellSignalFullThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

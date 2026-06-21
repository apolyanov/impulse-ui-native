import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellSignalFullBoldIcon } from "../bold";
import { CellSignalFullDuotoneIcon } from "../duotone";
import { CellSignalFullFillIcon } from "../fill";
import { CellSignalFullLightIcon } from "../light";
import { CellSignalFullRegularIcon } from "../regular";
import { CellSignalFullThinIcon } from "../thin";

export const CellSignalFullIcon = memo(function CellSignalFull(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalFullBoldIcon,
      duotone: CellSignalFullDuotoneIcon,
      fill: CellSignalFullFillIcon,
      light: CellSignalFullLightIcon,
      regular: CellSignalFullRegularIcon,
      thin: CellSignalFullThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

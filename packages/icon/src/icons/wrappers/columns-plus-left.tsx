import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ColumnsPlusLeftBold } from "../bold";
import { ColumnsPlusLeftDuotone } from "../duotone";
import { ColumnsPlusLeftFill } from "../fill";
import { ColumnsPlusLeftLight } from "../light";
import { ColumnsPlusLeftRegular } from "../regular";
import { ColumnsPlusLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ColumnsPlusLeft = memo(function ColumnsPlusLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ColumnsPlusLeftBold,
      duotone: ColumnsPlusLeftDuotone,
      fill: ColumnsPlusLeftFill,
      light: ColumnsPlusLeftLight,
      regular: ColumnsPlusLeftRegular,
      thin: ColumnsPlusLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

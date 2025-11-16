import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ColumnsPlusRightBold } from "../bold";
import { ColumnsPlusRightDuotone } from "../duotone";
import { ColumnsPlusRightFill } from "../fill";
import { ColumnsPlusRightLight } from "../light";
import { ColumnsPlusRightRegular } from "../regular";
import { ColumnsPlusRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ColumnsPlusRight = memo(function ColumnsPlusRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ColumnsPlusRightBold,
      duotone: ColumnsPlusRightDuotone,
      fill: ColumnsPlusRightFill,
      light: ColumnsPlusRightLight,
      regular: ColumnsPlusRightRegular,
      thin: ColumnsPlusRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

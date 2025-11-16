import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ColumnsBold } from "../bold";
import { ColumnsDuotone } from "../duotone";
import { ColumnsFill } from "../fill";
import { ColumnsLight } from "../light";
import { ColumnsRegular } from "../regular";
import { ColumnsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Columns = memo(function Columns(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ColumnsBold,
      duotone: ColumnsDuotone,
      fill: ColumnsFill,
      light: ColumnsLight,
      regular: ColumnsRegular,
      thin: ColumnsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ColumnsBoldIcon } from "../bold";
import { ColumnsDuotoneIcon } from "../duotone";
import { ColumnsFillIcon } from "../fill";
import { ColumnsLightIcon } from "../light";
import { ColumnsRegularIcon } from "../regular";
import { ColumnsThinIcon } from "../thin";

export const ColumnsIcon = memo(function Columns(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ColumnsBoldIcon,
      duotone: ColumnsDuotoneIcon,
      fill: ColumnsFillIcon,
      light: ColumnsLightIcon,
      regular: ColumnsRegularIcon,
      thin: ColumnsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

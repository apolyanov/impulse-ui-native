import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ColumnsBoldIcon } from "../bold/columns-bold.icon";
import { ColumnsDuotoneIcon } from "../duotone/columns-duotone.icon";
import { ColumnsFillIcon } from "../fill/columns-fill.icon";
import { ColumnsLightIcon } from "../light/columns-light.icon";
import { ColumnsRegularIcon } from "../regular/columns-regular.icon";
import { ColumnsThinIcon } from "../thin/columns-thin.icon";

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

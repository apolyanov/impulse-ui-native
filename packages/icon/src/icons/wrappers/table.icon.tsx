import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TableBoldIcon } from "../bold/table-bold.icon";
import { TableDuotoneIcon } from "../duotone/table-duotone.icon";
import { TableFillIcon } from "../fill/table-fill.icon";
import { TableLightIcon } from "../light/table-light.icon";
import { TableRegularIcon } from "../regular/table-regular.icon";
import { TableThinIcon } from "../thin/table-thin.icon";

export const TableIcon = memo(function Table(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TableBoldIcon,
      duotone: TableDuotoneIcon,
      fill: TableFillIcon,
      light: TableLightIcon,
      regular: TableRegularIcon,
      thin: TableThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});

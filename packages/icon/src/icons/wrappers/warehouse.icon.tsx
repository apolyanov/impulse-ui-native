import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WarehouseBoldIcon } from "../bold/warehouse-bold.icon";
import { WarehouseDuotoneIcon } from "../duotone/warehouse-duotone.icon";
import { WarehouseFillIcon } from "../fill/warehouse-fill.icon";
import { WarehouseLightIcon } from "../light/warehouse-light.icon";
import { WarehouseRegularIcon } from "../regular/warehouse-regular.icon";
import { WarehouseThinIcon } from "../thin/warehouse-thin.icon";

export const WarehouseIcon = memo(function Warehouse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarehouseBoldIcon,
      duotone: WarehouseDuotoneIcon,
      fill: WarehouseFillIcon,
      light: WarehouseLightIcon,
      regular: WarehouseRegularIcon,
      thin: WarehouseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
